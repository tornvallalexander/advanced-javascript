/**
 * Modules are always imported synchronously. This means that the module is loaded and the code is executed
 * before the rest of the code in the file is executed.
 * This is only possible due to top-level 'static' imports, this makes the imports known before execution.
 * Although we tend to think of synchronous as bad, in this case, it is relly the simplest way to do it. It is what
 * makes dead code elimination possible.
 *
 * Interestingly, the code exported and imported are references, not copies. This is quite unique to ES6 modules.
 */

import { addToCart, cart } from './shopping-cart';

addToCart('milk', 2);
addToCart('bread', 1);
addToCart('eggs', 3);

// proof that the imported 'cart' is a reference, and not a copy.
console.log(cart);