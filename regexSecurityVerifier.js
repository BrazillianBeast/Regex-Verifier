// Imports safe-regex library
const validate = require(safe-regex'); 

// Gets regex pattern from input
// Argv will be something like: [ node, filename, input ]
const regex = process.argv[2]

// Checks for safety
const result = validate(regex) ? 'safe' : 'not-safe';

// Prints result
console.log(`Regex Pattern /${regex}/ is ${result}.`)