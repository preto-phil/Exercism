// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
// export function cardTypeCheck(stack, card) {
//   let number = 0;
//   for (let i = 0; i < stack.length; i++) {
//     if (stack[i] === card) {
//       number += 1;
//     }
//   };
//   return number;
// }

export function cardTypeCheck(stack, card) {
  let num = 0;
  stack.forEach((number) => {
    if (number === card) {
      num += 1;
    }
  })
  return num;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let num = 0;
  if (type === false) {
    for (let n of stack) {
      if (n % 2 !== 0) {num += 1}
    }
  } else if (type === true) {
    for (let n of stack) {
      if (n % 2 === 0) {num += 1}
    }
  };
  return num;
}
