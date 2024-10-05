const parseArgs = () => {
  const args = process.argv.slice(2);
  const res = args
    .reduce(
      (acc, arg, index) =>
        arg.startsWith('--') ? [...acc, `${arg.slice(2)} is ${args[index + 1]}`] : acc,
      [],
    )
    .join(', ');
  console.log(res);
};

parseArgs();
