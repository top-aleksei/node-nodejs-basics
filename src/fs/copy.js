import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { access } from 'node:fs';
import path from 'node:path';

const copy = async () => {
  const { dirname } = import.meta;
  const copyFromPath = path.join(dirname, 'files');
  const copyToPath = path.join(dirname, 'files_copy');

  access(copyFromPath, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }
  });

  access(copyToPath, (err) => {
    if (!err) {
      throw new Error('FS operation failed');
    }
  });

  await mkdir(copyToPath);

  const files = await readdir(copyFromPath);
  files.forEach((file) => {
    copyFile(path.join(copyFromPath, file), path.join(copyToPath, file));
  });
};

await copy();
