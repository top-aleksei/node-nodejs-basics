const parseEnv = () => {
  const args = process.env;
  const res = Object.keys(args)
    .reduce((acc, key) => (key.startsWith('RSS_') ? [...acc, `${key}=${args[key]}`] : acc), [])
    .join('; ');
  console.log('res: ', res);
};

parseEnv();
