function make_shirt(size: string = "Large", message: string = "I Love TypeScript"): void {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
  }
make_shirt()
make_shirt("Medium")
make_shirt("Small", "Full Stack Developer")