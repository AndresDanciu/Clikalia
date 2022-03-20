/* eslint-disable sonarjs/prefer-immediate-return */

// Truncate a string nicely to a certain length
export const truncate = (str: string, length: number) => {
  if (str.length <= length) {
    return str;
  }
  const subString = str.substr(0, length);
  return subString.substr(0, subString.lastIndexOf(' ')) + '…';
};

/**
 * Given a number, truncate it to the given number of places (Example: 2,470 and returns a truncated number: 2.5k)
 * @param {number} number - the number to be truncated
 * @param [places=1] - The number of decimal places to round to.
 * @returns The number is being truncated to x decimal place. (Example: 1 = 1.5k. 2 = 1.48k))
 */
export const truncateNumber = (number: number, places = 1) => {
  const truncated = number > 999 ? (number / 1000).toFixed(places) + 'k' : number;
  const lastDigit = truncated.toString().slice(-2);

  if (lastDigit === '0k' && places === 1) {
    return truncated.toString().slice(0, -3) + 'k';
  } else {
    return truncated;
  }
};

/**
 * Sort an array of objects by a date key in ascending or descending order
 * @param array - The array to sort.
 * @param {string} key - The key to sort by.
 * @param {string} order - The order in which to sort the array.
 * @returns An array of objects.
 */
export const sortByDate = (array: Array<never>, key: string, order: string) => {
  return array.sort((a, b) => {
    const x = new Date(a[key]).getTime();
    const y = new Date(b[key]).getTime();
    const val = order === 'desc' ? y - x : x - y;
    return val;
  });
};

/**
 * Sort an array of objects by the value of a property
 * @param array - The array to sort.
 * @returns An array of objects.
 */
export const sortByTitle = (array: Array<any>) => {
  return array.sort((a, b) => {
    const x = a['name'];
    const y = b['name'];
    const val = x.localeCompare(y, {
      sensitivity: 'base',
      numeric: 'true',
      caseFirst: 'upper',
    });
    return val;
  });
};
