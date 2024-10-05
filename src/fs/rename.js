import { rename as fsRename } from 'node:fs/promises';
import { access } from 'node:fs';
import path from 'node:path';

const rename = async () => {
  const { dirname } = import.meta;
  const oldFilePath = path.join(dirname, 'files', 'wrongFilename.txt');
  const newFilePath = path.join(dirname, 'files', 'properFilename.md');

  access(oldFilePath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });

  access(newFilePath, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }
  });

  await fsRename(oldFilePath, newFilePath);
};

await rename();
