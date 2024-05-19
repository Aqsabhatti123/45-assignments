function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
}
make_sandwich("chicken", "cheese");
make_sandwich("turkey","lettuce","tomato");
make_sandwich("avocado","sprouts","mustard","mayo");
