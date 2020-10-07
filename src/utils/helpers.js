/* tslint:disable */
/* eslint-disable */
import FastEqual from "fast-deep-equal";

export const objectToMultipart = object => {
  let form_data = new FormData();

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      form_data.set(key, object[key]);
    }
  }

  return form_data;
};

export const serializeObject = object => {
  return Object.keys(object)
    .map(key => key + "=" + object[key])
    .join("&");
};

export const camelToWord = string => {
  const result = string.replace( /([A-Z])/g, " $1" );
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const capitalize = string => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAll = string => {
  if (!string) return "";
  const parts = string.split(/\s/g);
  return parts.map(p => capitalize(p)).join(" ");
};

export const getQueryParameters = str => {
  return (str || "")
    .replace(/(^\?)/, "")
    .split("&")
    .map(
      function(n) {
        return (n = n.split("=")), (this[n[0]] = n[1]), this;
      }.bind({})
    )[0];
};

export const randomString = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

export const arrayFlat = array => array.concat.apply([], array);

export const groupArray = (array, keyField) => {
  if (!Array.isArray(array) || array.length === 0) return {};
  return array.reduce(function(r, a) {
    r[a[keyField]] = r[a[keyField]] || [];
    r[a[keyField]].push(a);
    return r;
  }, Object.create(null));
};

export const findDeep = (input, nestedKey, key, value, cb) => {
  if (!Array.isArray(input)) return cb({});
  function find(input, nestedKey, key, id, cb) {
    input.forEach(item => {
      if (item[key] === value) cb(item);
      if (item[nestedKey]) find(item[nestedKey], nestedKey, key, value, cb);
    });
  }
  find(input, nestedKey, key, value, cb);
};

export const safeParseJSON = (string, suppress) => {
  let parsed;
  try {
    parsed = JSON.parse(string);
  } catch (e) {
    !suppress && console.warn("safeParseJSON", string, e);
  }
  return parsed;
};

export const isEmpty = obj => {
  if (!obj) return true;
  if (typeof obj === "string") return !(obj || "").trim();
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
      return obj.constructor === Object;
    } else {
      let empty = true;
      for (let key of keys) {
        if (!isEmpty(obj[key])) {
          empty = false;
          return empty;
        }
      }
      return empty;
    }
  }
};

export const isEqual = (a, b) => {
  if ((!a && b) || (a && !b)) return false;
  if (!a && !b) return typeof a === typeof b;
  return FastEqual(a, b);
};

// export const getKeyboardType = field => {
//   if (isEmpty(field)) return;
//   if (field.name === "email") return "email-address";
//   if (field.name === "phone") return "phone-pad";
// };

export const getRGBFromStr = (str, s, l) => {
  if (!str) return 0;

  str = str
    .replace(/\s/g, "")
    .split("")
    .reverse()
    .join("");

  const sat = s || 50;
  const light = l || 65;

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let h = hash % 360;
  return "hsl(" + h + ", " + sat + "%, " + light + "%)";
};

export const isModified = async (input, old, childKey) => {
  let modified = false;

  for (let key in old) {
    if (!old.hasOwnProperty(key)) continue;
    if (childKey) {
      if (old[key][childKey] !== input[key][childKey]) modified = true;
    } else {
      if (old[key] !== input[key]) modified = true;
    }
  }
  return await modified;
};

export const ipsum = () => `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco est laborum.
  `;

export const getDisplayNameEng = profile => {
  if (!profile) return "";
  if (profile.data) {
    if (typeof profile.data === "string") {
      profile = safeParseJSON(profile.data);
    } else {
      profile = profile.data;
    }
  }
  return (
    profile.displayName ||
    ((profile.firstName || profile.lastName) &&
      `${profile.firstName || ""} ${profile.lastName || ""}`) ||
    ""
  );
};

export const abbvLastNameDisplayNameEng = displayName => {
  if (!displayName) return "";
  const split = displayName.split(/\s+/g);
  const firstName = split[0];
  const lastName = split[1];
  const lastNameAbbv = lastName && lastName.substring(0, 1) + ".";
  return `${firstName}${lastNameAbbv && ` ${lastNameAbbv}`}`;
};

export const getTimeString24 = date => {
  return (
    date &&
    `${(date.getHours() < 10 ? "0" : "") +
      date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes()}`
  );
};

export const getISOStringLocal = date => {
  if (typeof date !== "object") date = new Date(date);
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  return new Date(date - tzoffset).toISOString().slice(0, -1);
};

export const getDayNameEng = date => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
};

export const getFullDayNameEng = date => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[date.getDay()];
};

export const getMonthNameEng = date => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return months[date.getMonth()];
};

export const getFullMonthNameEng = date => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[date.getMonth()];
};

export const getWeekNumber = date => {
  // Copy date so don't modify original
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay()||7));
  // Get first day of year
  let yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  let weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
  return [date.getUTCFullYear(), weekNo];
};

export const preventDefaultStopProp = event => {
  event && typeof event.preventDefault === "function" && event.preventDefault();
  event && typeof event.stopPropagation === "function" && event.stopPropagation();
};

export const stopProp = event => event && typeof event.stopPropagation === "function" && event.stopPropagation();

export const validateEmail = email => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
  return emailRegex.test(email);
};

export const passwordRegExp = {
  lowerNum8: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-_=+,.?"':{}[\]|<>`/\\]{8,}$/g,
  lowerNumSpec8: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+,.?"':{}[\]|<>`/\\])[A-Za-z\d!@#$%^&*()\-_=+,.?"':{}[\]|<>`/\\]{8,}$/g,
  upperLowerNum8: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+,.?"':{}[\]|<>`/\\]{8,}$/g,
  upperLowerNumSpec8: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+,.?"':{}[\]|<>`/\\])[A-Za-z\d!@#$%^&*()\-_=+,.?"':{}[\]|<>`/\\]{8,}$/g,
};

// export const validatePassword = (fieldData, field, error, noError, UIText) => {
//   const selectedRegExp = passwordRegExp.lowerNum8;
//
//   if (field === "oldPassword") {
//     if (!fieldData.oldPassword) {
//       error.anyPassword = true;
//       return (
//         !noError &&
//         (error.oldPassword = `${UIText.entryRequiring} ${UIText.oldPassword}`)
//       );
//     }
//
//     if (fieldData.password && fieldData.password === fieldData.oldPassword) {
//       error.anyPassword = true;
//       return (
//         !noError && (error.password = UIText.changePasswordSamePasswordError)
//       );
//     } else {
//       error.password = "";
//     }
//
//     error.oldPassword = "";
//   }
//
//   if (field === "password") {
//     if (!fieldData.password) {
//       error.anyPassword = true;
//       return (
//         !noError &&
//         (error.password = `${UIText.entryRequiring} ${UIText.password}`)
//       );
//     }
//
//     if (!selectedRegExp.exp.test(fieldData.password)) {
//       error.anyPassword = true;
//       return !noError && (error.password = selectedRegExp.error);
//     }
//
//     if (fieldData.oldPassword && fieldData.password === fieldData.oldPassword) {
//       error.anyPassword = true;
//       return (
//         !noError && (error.password = UIText.changePasswordSamePasswordError)
//       );
//     } else {
//       error.password = "";
//     }
//
//     if (fieldData.repeat && fieldData.password !== fieldData.repeat) {
//       error.anyPassword = true;
//       return (error.repeat = UIText.registrationPasswordNotMatch);
//     } else {
//       error.repeat = "";
//     }
//
//     error.password = "";
//   }
//
//   if (field === "repeat") {
//     if (!fieldData.repeat) {
//       error.anyPassword = true;
//       return !noError && (error.repeat = UIText.registrationConfirmPassword);
//     }
//
//     if (fieldData.password !== fieldData.repeat) {
//       error.anyPassword = true;
//       return !noError && (error.repeat = UIText.registrationPasswordNotMatch);
//     }
//
//     error.repeat = "";
//   }
//
//   if (!error.oldPassword && !error.password && !error.repeat)
//     error.anyPassword = false;
// };

export const getPriceString = (amount, symbol, comma) => {
  if (!amount || isNaN(amount)) return "";
  const neutral = amount >= 0 ? amount : -amount;
  let price = Number(neutral).toFixed(2);
  if (comma) price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return amount >= 0 ? `${symbol || "$"}${price}` : `-${symbol || "$"}${price}`;
};

export const minutesToMilli = minutes => minutes * 60 * 1000;

export const hoursToMilli = hours => minutesToMilli(hours * 60);

export const daysToMilli = days => hoursToMilli(days * 24);

export const yyyymmdd = (Date, separator) => {
  if (!Date) return;
  if (typeof Date.getTime !== "function") {
    console.warn("Not a valid date object");
    return Date;
  }
  separator = (typeof separator === "string" && separator) || "/";
  return `${Date.getFullYear()}${separator}${
    (Date.getMonth() + 1 || "").toString().padStart(2, "0")
  }${separator}${
    (Date.getDate() || "").toString().padStart(2, "0")
  }`;
};

export const getDatesInBetween = (start, end) => {
  const startDate = new Date(start).setHours(0, 0, 0, 0);
  const endDate = new Date(end).setHours(0, 0, 0, 0);
  let dates = [];
  let remaining = endDate - startDate;
  while (remaining >= daysToMilli(1)) {
    dates.push(new Date(startDate + remaining));
    remaining = remaining - daysToMilli(1);
  }
  dates.reverse();
  return dates;
};

export const formatFixedDigit = (value, digits) => {
  console.warn("Deprecated formatFixedDigit, use String.prototype['padStart' | 'padEnd'] instead!");
  if (isNaN(value) || value < 0 || !digits) return value;
  const zeros = "0".repeat(digits - 1);
  const threshold = Number(`1${zeros}`) - 1;
  return value > threshold ? value.toString() : `${zeros}${value}`;
};

export const parseErrorName = err => {
  if (!err) return "Unknown error";
  if (typeof err === "string") return err;
  return (((err.response || {}).data || {}).error
    || ((err.response || {}).data || {}).name
    || (`${((err.config || {}).method || "").toUpperCase()} ${(err.config || {}).url || ""}`).trim()
    || err.name
    || err.error
    || (err.response || {}).statusText
    || "Error").toString()
    .concat((err.response || {}).status ? ` [${(err.response || {}).status}]` : "");
};

export const parseErrorMsg = (err, includeStack) => {
  if (!err || isEmpty(err)) return err;
  if (typeof err === "string" || typeof err === "number") {
    return err;
  }
  if (typeof err === "object") {
    const responseData = err.response && err.response.data;
    if (responseData) {
      if (typeof responseData === "string") {
        return responseData.concat(includeStack && err.stack ? `\n \n${err.stack}` : "");
      }
      if ((responseData.error || responseData.name) &&
        responseData.message &&
        (responseData.trace || responseData.stack)) {
        if (includeStack) {
          return responseData.message.concat("\n \n" + responseData.trace || responseData.stack);
        }
        return responseData.message;
      }
      try {
        const errorStr = JSON.stringify(responseData, null, 2);
        if (includeStack && err.stack) return errorStr.concat("\n \n" + err.stack);
        return errorStr;
      } catch (e) {
        return e;
      }
    }
    return (err.message || "No message available")
    .concat(includeStack && err.stack ? `\n \n${err.stack}` : "");
  }
  return err;
};

export const replaceBaseUrlInString = string => {
  const portString = window.location.port.toString().match(/^80$|^443$/g)
    ? ""
    : `:${window.location.port}`;
  // Same domain policy so we don't need to append hostname in this case.
  return string.replace(/{frontendBaseUrl}/g, "");
};

export const isNonZeroFalse = value => !value && value !== 0;

export const evalStringBoolean = value => {
  if (!value) return false;
  if (typeof value === "boolean") return value;
  if (typeof value !== "string")
    return console.warn(`${value} is not a string or boolean value.`) && false;
  return value === "true" ? true : value === "false" ? false : value;
};

export const getEventRealValue = event => {
  if (!event || !event.detail) return null;
  const { checked, value } = event.detail;
  return checked !== undefined
    ? (checked || undefined)
    : value && (/^[0-9]*$/g).test(value)
    ? Number(value)
    : value;
};


export const contextReject = rejection => Promise.reject(rejection);

export const contextResolve = resolution => Promise.resolve(resolution);

export const asyncPause = async ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export const whenFulfill = conditioner => (async function wait() {
  if (typeof conditioner !== "function") return Promise.reject("A condition checking function is required.");
  await asyncPause(250);
  if (!conditioner()) return wait();
  return Promise.resolve(true);
})();

export const runInAsync = (method, delay) => async function(...args) {
  new Promise(resolve =>
    setTimeout(() => {
      resolve(method(...arguments));
    }, delay || 0)
  );
};

export const getArgsNames = method => {
  const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  const ARGUMENT_NAMES = /([^\s,]+)/g;
  return (func => {
    const fnStr = func.toString().replace(STRIP_COMMENTS, '');
    let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
    if (result === null) result = [];
    return result;
  })(method);
};

export const flipCoin = () => [true, false][Math.round(Math.random())];