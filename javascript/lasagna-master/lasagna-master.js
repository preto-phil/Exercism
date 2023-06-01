/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
    if (timer === 0) {
        return 'Lasagna is done.';
    } else if (timer > 0) {
        return 'Not done, please wait.';
    } else {
        return 'You forgot to set the timer.';
    }
}

export function preparationTime(array, number = 2) {
    return array.length * number;
}

export function quantities(array) {
    let sauce = 0;
    let noodles = 0;
    for (let i in array) {
        if (array[i] === 'noodles') {
            noodles += 50;
        } else if (array[i] === 'sauce') {
            sauce += 0.2;
        } 
    }
    return {
        noodles: noodles,
        sauce: sauce
    }  
}

export function addSecretIngredient(array1, array2) {
    let myArray = array2;
    let lastItem = array1[array1.length - 1];
    myArray.push(lastItem);
}

export function scaleRecipe(recipe, portions = 2) {
    let portionNumber = portions / 2;
    let adjustedRecipe = {};
    for (let r in recipe) {
        adjustedRecipe[r] = recipe[r] * portionNumber;
    }
    return adjustedRecipe;
}