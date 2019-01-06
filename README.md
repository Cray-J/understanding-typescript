# understanding-typescript

## Compiling
tsc --init (creates a tsconfig.json file and tells the project that it is a typescript project)
tsc (compiles all .ts files to javascript)

### Compiling all files
tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts . Compiles all files into one, in appearing order

tsc --outFile app.js (with reference "imports" in the .ts file)

tsc --w  // watch mode



# Install packages
`npm install --save-dev @types/jquery`


# Smart keys for intellij
cmd-shift-8 to turn off Column selection mode


# Type definitions
Jquery as example: Script added in index.html file. Using scripts straight after works fine.
Using in another class, `declare var $: any;` is needed in the same file. Optionally, this can
be added in a `.d.ts` file to make it available in all files. Last but not least,
npm can be told to install a type definition instead.