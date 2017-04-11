import * as should from 'should';
import { MyModule } from '../../moduleFile';

describe('Set of unit test cases', () => {
  it('returns the string hi', done => {
    MyModule.someFunction().should.equal('hi');
    done();
  });
});
