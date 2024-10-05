import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
  const { dirname } = import.meta;
  const fromPath = path.join(dirname, 'files', 'archive.gz');
  const toPath = path.join(dirname, 'files', 'fileToCompress.txt');

  const input = createReadStream(fromPath);
  const output = createWriteStream(toPath);

  const unzip = createGunzip();

  input.pipe(unzip).pipe(output);
};

await decompress();
