process.env.NODE_ENV = process.env.NODE_ENV || 'development';
import { TileSlicer } from './TileSlicer';
import { Resizer } from './Resizer';
const path = require('path');
require('events').EventEmitter.prototype._maxListeners = 1000;

const run = async () => {
  const levels = await Resizer.generateLevels(path.join(__dirname, '../data/Cat.jpg'));
  const slicer = new TileSlicer();
  for (const level of levels) {
    console.log(`Attempting to slice tiles for level ${level.value}`);
    await slicer.slice(level.path, level.value);
  }
};

run()
.then()
.catch(err => {
  console.log(err.stack);
});
