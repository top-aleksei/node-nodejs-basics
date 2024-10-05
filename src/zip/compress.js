import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const { dirname } = import.meta;
  const fromPath = path.join(dirname, 'files', 'fileToCompress.txt');
  const toPath = path.join(dirname, 'files', 'archive.gz');

  const input = createReadStream(fromPath);
  const output = createWriteStream(toPath);

  const zip = createGzip();

  input.pipe(zip).pipe(output);
};

await compress();
