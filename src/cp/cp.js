import { fork } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const { dirname } = import.meta;
  const childPath = path.join(dirname, 'files', 'script.js');

  const child = fork(childPath, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
