import { readFile } from 'node:fs/promises';
import { access } from 'node:fs';
import path from 'node:path';

const read = async () => {
  const { dirname } = import.meta;
  const readFilePath = path.join(dirname, 'files', 'fileToRead.txt');

  access(readFilePath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });

  const data = await readFile(readFilePath, 'utf-8');
  console.log(data);
};
await read();
