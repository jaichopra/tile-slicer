process.env.NODE_ENV = process.env.NODE_ENV || 'development';
import { TileSlicer } from './TileSlicer';
import { Resizer } from './Resizer';
const path = require('path');
const fs = require('fs');
require('events').EventEmitter.prototype._maxListeners = 1000;

const run = async () => {
  if (process.argv.length < 3) {
    throw new Error('Please provide an image file path relative to the local dir');
  }
  const file = path.join(__dirname, '../', process.argv[2]);
  if (!fs.existsSync(file)) {
    throw new Error(`Please ensure the file exists at the path ${file}`);
  }
  const levels = await Resizer.generateLevels(file);
  const slicer = new TileSlicer();
  for (const level of levels) {
    console.log(`Attempting to slice tiles for level ${level.value}`);
    await slicer.slice(level.path, level.value);
  }
};

run()
.then()
.catch(err => {
  console.log(err);
});
