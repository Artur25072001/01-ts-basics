function getMessage(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello, ${name}!`);
    }, 1000);
  });
}

getMessage("John Doe")
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
