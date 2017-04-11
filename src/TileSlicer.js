const os = require('os');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

export class TileSlicer {
  constructor() {
    const coresCount = os.cpus().length;
    sharp.concurrency(coresCount);
  }

  async slice(inputPath, level) {
    if (!inputPath) {
      throw new Error('We require some input to slice');
    }
    const metaData = await this.getMetaData(inputPath);
    console.log(`Image of dimensions ${metaData.width} x ${metaData.height} at level ${level}`);
    if (!fs.existsSync(path.join(__dirname, `../output/${level}`))) {
      fs.mkdirSync(path.join(__dirname, `../output/${level}`));
    }
    const hSize = Math.ceil(metaData.width / 256);
    const vSize = Math.ceil(metaData.height / 256);
    const pipeline = sharp();
    const pipelinePromises = [];
    if (hSize === 1 && vSize === 1) { // There is only 1 tile
      pipelinePromises.push(this.generateOffset(level, 0, 0, pipeline, metaData.width, metaData.height));
    } else {
      for (let i = 0; i < hSize; ++i) {
        for (let j = 0; j < vSize; ++j) {
          const endH = i === hSize - 1;
          const endV = j === vSize - 1;
          let h;
          let v;
          if (endH) {
            h = metaData.width % 256;
          }
          if (endV) {
            v = metaData.height % 256;
          }
          pipelinePromises.push(this.generateOffset(level, i, j, pipeline, h, v));
        }
      }
    }

    const pipelineBuckets = this.bucket(pipelinePromises, 50);
    for (const buckets of pipelineBuckets) {
      await Promise.all(buckets);
    }
    await this.generateTiles(inputPath, pipeline);
  }

  generateTiles(inputPath, pipeline) {
    return new Promise((resolve, reject) => {
      const readableStream = fs.createReadStream(inputPath);
      readableStream
        .pipe(pipeline)
        .on('finish', resolve)
        .on('error', reject);
    });
  }

  // Dont worry, we're not reading the file here
  // Simply grabbing metadata
  getMetaData(inputPath) {
    return sharp(inputPath).metadata();
  }

  generateOffset(level, hPos, vPos, _pipeline, h, v) {
    const hOffset = hPos * 256;
    const vOffset = vPos * 256;
    const writableStreamForTile = fs.createWriteStream(path.join(__dirname,
      `../output/${level}/${hOffset}_${vOffset}.jpg`));
    return _pipeline
      .clone()
      .extract({
        left: hPos * 256,
        top: vPos * 256,
        width: h || 256,
        height: v || 256,
      })
      .pipe(writableStreamForTile);
  }

  bucket(array, bucketSize) {
    const buckets = [];
    let start = 0;
    let end = 0;
    while (end !== array.length) {
      start = end;
      end = Math.min(array.length, end + bucketSize);
      buckets.push(array.slice(start, end));
    }
    return buckets;
  }
}
