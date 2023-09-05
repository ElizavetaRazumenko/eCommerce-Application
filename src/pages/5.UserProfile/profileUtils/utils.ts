export const checkEmail = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (value.match(/\s/)) {
    setState('must not contain spaces');
  } else if (!value.includes('@')) {
    setState('must contain @');
  } else if (!value.includes('.')) {
    setState('must contain a domain name');
  } else if (!re.test(value)) {
    setState('incorrect email form');
  } else if (value === '') {
    setState('cannot be empty');
  } else {
    setState('');
  }
};

export const checkTextField = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (value.length === 0) {
    setState('must be filled');
  } else if (value.match(/[0-9]/)) {
    setState('must not contain numbers');
  } else if (value.match(/[!@#$&*"'./|/\\+^`~_=]/)) {
    setState('must not contain special characters');
  } else if (value.trim() !== value) {
    setState('must not contain leading or trailing spaces');
  } else {
    setState('');
  }
};

export const checkDate = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  const re = /\d{4}(-)\d{2}\1\d{2}/g;
  const currentYear = new Date().getFullYear();
  const date = value.slice(8);
  const mounth = value.slice(5, 7);
  const year = value.slice(0, 4);
  const userBirthday = new Date(`${currentYear}-${mounth}-${date}`);
  let age = currentYear - +year;
  if (new Date() < userBirthday) {
    age = age - 1;
  }
  if (!re.test(value)) {
    setState('date must be in the form yyyy-mm-dd');
  } else if (currentYear - +year < 0) {
    setState('you cannot be born in the future');
  } else if (age < 13) {
    setState('registration of users over 13 years old');
  } else if (value.length > 10) {
    setState('date must be in the form yyyy-mm-dd');
  } else if (+mounth > 12) {
    setState('enter the number of the month from 1 to 12');
  } else if (+date > 31) {
    setState('enter the number of the day from 1 to 31');
  } else {
    setState('');
  }
};

export const checkPassword = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (value.length < 8) {
    setState('must be at least 8 characters long');
  } else if (!value.match(/[A-Z]/)) {
    setState('must contain at least one capital letter (AZ)');
  } else if (!value.match(/[a-z]/)) {
    setState('must contain at least one lowercase letter (az)');
  } else if (!value.match(/\d/)) {
    setState('must contain at least one number');
  } else if (!value.match(/[[!@#$&*"'./|/\\+^`~_=]/)) {
    setState('must contain at least one special character');
  } else if (value.trim() !== value) {
    setState('must not contain leading or trailing spaces');
  } else {
    setState('');
  }
};

export const checkCity = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (value.match(/[0-9]/)) {
    setState('must not contain numbers');
  } else if (value.length === 0) {
    setState('must be filled');
  } else if (value.match(/[[!@#$&*"'./|/\\+^`~_=]/)) {
    setState('must not contain special characters');
  } else if (value.trim() !== value) {
    setState('cannot start/end with a space');
  } else {
    setState('');
  }
};

export const checkStreet = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (value.match(/[0-9]/)) {
    setState('must not contain numbers');
  } else if (value.length === 0) {
    setState('must be filled');
  } else if (value.trim() !== value) {
    setState('cannot start/end with a space');
  } else {
    setState('');
  }
};

export const checkCountry = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (value !== 'IT' && value !== 'ES') {
    setState('enter "IT" (Italy) or "ES" (Spain)');
  } else {
    setState('');
  }
};

export const checkPostalCode = (
  value: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  country: string,
) => {
  console.log(country);
  const reg = /^\d+$/;
  if (!reg.test(value)) {
    setState('must contain contain only digits');
  } else if (country !== 'IT' && country !== 'ES') {
    setState('first fill in the field "country" correctly');
  } else if (country === 'ES' && value.length !== 5) {
    setState('spain postal code must contain 5 digits');
  } else if (country === 'IT' && value.length !== 5) {
    setState('spain postal code must contain 5 digits');
  } else {
    setState('');
  }
};
