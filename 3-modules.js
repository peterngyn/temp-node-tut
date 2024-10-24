// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade.js')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// when you import a module you invoke it
//when you export it, it actually wraps it in a function