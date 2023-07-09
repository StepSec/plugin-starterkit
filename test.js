import test from 'bron';
import assert from 'assert/strict';
import { factory, runTasks } from 'release/test/util/index.js';
import Plugin from './index.js';

const namespace = 'plugin-starterkit';

test('should not throw', async () => {
  const options = { [namespace]: {} };
  const plugin = factory(Plugin, { namespace, options });
  await assert.doesNotReject(runTasks(plugin));
});
