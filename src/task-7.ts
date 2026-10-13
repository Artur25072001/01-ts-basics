function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, TypeScript!");
    }, 1000);
  });
}

getMessage()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
