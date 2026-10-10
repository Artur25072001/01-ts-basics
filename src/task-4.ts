function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("John Doe", 30);
printUserInfo("Jane Doe", 25, "tY2wH@example.com");
