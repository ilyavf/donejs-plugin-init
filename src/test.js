import { assert } from 'chai/chai';
import 'steal-mocha';
import plugin from './index';

describe('my-plugin', function () {
  it('should initialized the plugin', function () {
    assert.equal(plugin(), 'This is my-plugin');
  });
});
