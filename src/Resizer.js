const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

export class Resizer {
  static async generateLevels(inputPath) {
    let x;
    let y;
    let level = 0;
    const pipeline = sharp(inputPath);
    const metaData = await sharp(inputPath).metadata();
    x = metaData.width;
    y = metaData.height;
    const levelPromises = [];
    const levelPaths = [];
    const writableStreams = [];
    while (x >= 1 || y >= 1) {
      console.log(`Dimensions of ${x} x ${y}`);
      levelPromises.push(this.generateLevelDimensions(level, x, y, pipeline, levelPaths, writableStreams));
      if (x === 1 && y === 1) {
        break;
      }
      x = Math.max(Math.floor(x * 0.5), 1);
      y = Math.max(Math.floor(y * 0.5), 1);
      ++level;
    }
    console.log(`Generated ${level} levels!`);
    await Promise.all(levelPromises);
    // await this.writeToFile(inputPath, pipeline);
    // writableStreams.map(stream => stream.close());
    return levelPaths;
  }

  static writeToFile(inputPath, pipeline) {
    return new Promise((resolve, reject) => {
      const readableStream = fs.createReadStream(inputPath);
      readableStream
        .pipe(pipeline)
        .on('finish', resolve)
        .on('error', reject);
    });
  }

  static generateLevelDimensions(level, x, y, _pipeline, levelPaths, writableStreams) {
    const levelPath = path.join(__dirname, `../tmp/${level}.jpg`);
    levelPaths.push({
      value: level,
      path: levelPath,
    });
    const writableStream = fs.createWriteStream(levelPath);
    writableStreams.push(writableStream);
    return _pipeline
      .clone()
      .resize(x, y)
      .toFile(levelPath);
  }
}
