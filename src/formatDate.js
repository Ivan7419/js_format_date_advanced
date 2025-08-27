'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  let dateArray = date.split(fromFormat[3]);

  switch (fromFormat[0]) {
    case 'YYYY':
    case 'YY':
      dateArray.reverse();
      break;
    case 'MM':
      if (fromFormat[1] === 'DD') {
        dateArray = [dateArray[1], dateArray[0], dateArray[2]];
      } else {
        dateArray = [dateArray[2], dateArray[0], dateArray[1]];
      }
      break;
    default:
      break;
  }

  switch (toFormat[0]) {
    case 'DD':
      switch (toFormat[2]) {
        case 'YY':
          if (fromFormat.includes('YYYY')) {
            dateArray[2] = dateArray[2].slice(2);
          }

          return dateArray.join(toFormat[3]);
        case 'YYYY':
          if (fromFormat.includes('YY')) {
            if (+dateArray[2] < 30) {
              dateArray[2] = '20' + dateArray[2];
            } else {
              dateArray[2] = '19' + dateArray[2];
            }
          }

          return dateArray.join(toFormat[3]);
        default:
          break;
      }
      break;
    case 'YY':
      if (fromFormat.includes('YY')) {
        if (+dateArray[2] < 30) {
          dateArray[2] = '20' + dateArray[2];
        } else {
          dateArray[2] = '19' + dateArray[2];
        }
      } else {
        dateArray[2] = dateArray[2].slice(2);
      }

      return dateArray.reverse().join(toFormat[3]);
    case 'YYYY':
      if (fromFormat.includes('YY')) {
        if (+dateArray[2] < 30) {
          dateArray[2] = '20' + dateArray[2];
        } else {
          dateArray[2] = '19' + dateArray[2];
        }
      }

      return dateArray.reverse().join(toFormat[3]);

    case 'MM':
      if (fromFormat.includes('YY')) {
        if (+dateArray[2] < 30) {
          dateArray[2] = '20' + dateArray[2];
        } else {
          dateArray[2] = '19' + dateArray[2];
        }
      } else {
        dateArray[2] = dateArray[2].slice(2);
      }

      if (toFormat[1] === 'DD') {
        dateArray = [dateArray[1], dateArray[0], dateArray[2]];
      } else {
        dateArray = [dateArray[2], dateArray[0], dateArray[1]];
      }

      return dateArray.join(toFormat[3]);
    default:
      break;
  }
}

module.exports = formatDate;
