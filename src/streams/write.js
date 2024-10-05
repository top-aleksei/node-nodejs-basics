import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { stdin } from 'node:process';

const write = async () => {
  const { dirname } = import.meta;
  const writePath = path.join(dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(writePath);
  stdin.pipe(writeStream);
};

await write();
