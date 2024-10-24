const _ = require('lodash')

const items = [1, [2, [3 , [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)



// Our Father, who art in heaven,
// hallowed be thy name;
// thy kingdom come,
// thy will be done
// on earth as it is in heaven.
// Give us this day our daily bread,
// and forgive us our trespasses,
// as we forgive those who trespass against us;
// and lead us not into temptation,
// but deliver us from evil.

// Amen.