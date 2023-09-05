// import { FieldLocationType, FieldType } from '../../../types/types';

const state = {
  profilePage: {
    fieldData: [
      {
        id: 1,
        plshldr: 'First name',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 2,
        plshldr: 'Last name',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 3,
        plshldr: 'Date of birth: yyyy-mm-dd',
        classname: 'user',
        page: 'register',
        type: 'text',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 4,
        plshldr: 'Email',
        classname: 'email',
        page: 'register',
        type: 'email',
        errorMessage: '',
        value: '',
        isValid: false,
      },
      {
        id: 5,
        plshldr: 'Password',
        classname: 'password',
        page: 'register',
        type: 'password',
        errorMessage: '',
        value: '',
        isValid: false,
      },
    ],
    location: {
      billing: [
        {
          type: 'country',
          value: 'Italy',
          errorMessage: '',
          isValid: true,
        },
        {
          type: 'city',
          value: '',
          errorMessage: '',
          isValid: false,
        },
        {
          type: 'street',
          value: '',
          errorMessage: '',
          isValid: false,
        },
        {
          type: 'postal',
          value: '',
          errorMessage: '',
          isValid: false,
        },
      ],
      shipping: [
        {
          type: 'country',
          value: 'Italy',
          errorMessage: '',
          isValid: true,
        },
        {
          type: 'city',
          value: '',
          errorMessage: '',
          isValid: false,
        },
        {
          type: 'street',
          value: '',
          errorMessage: '',
          isValid: false,
        },
        {
          type: 'postal',
          value: '',
          errorMessage: '',
          isValid: false,
        },
      ],
    },
  },
};

// const findField = (id: number) => {
//   let field: FieldType;
//   field = state.profilePage.fieldData.find((item) => item.id === id) as FieldType;
//   return field;
// };

// export const checkTextField = (field: FieldType) => {
//   if (field.value.length === 0) {
//     field.errorMessage = 'must be filled';
//     field.isValid = false;
//   } else field.isValid = true;
//   if (['First name', 'Last name'].includes(field.plshldr)) {
//     if (field.value.match(/[0-9]/)) {
//       field.errorMessage = 'must not contain numbers';
//       field.isValid = false;
//     }
//     if (field.value.match(/[!@#$&*"'./|/\\+^`~_=]/)) {
//       field.errorMessage = 'must not contain special characters';
//       field.isValid = false;
//     }
//     if (field.value.trim() !== field.value) {
//       field.errorMessage = 'must not contain leading or trailing spaces';
//       field.isValid = false;
//     }
//   }
//   return field;
// };

// export const checkEmail = (field: FieldType) => {
//   const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//   if (field.value.match(/\s/)) {
//     field.errorMessage = 'must not contain spaces';
//     field.isValid = false;
//   } else if (!field.value.includes('@')) {
//     field.errorMessage = 'must contain @';
//     field.isValid = false;
//   } else if (!field.value.includes('.')) {
//     field.errorMessage = 'must contain a domain name';
//     field.isValid = false;
//   } else if (!re.test(field.value)) {
//     field.errorMessage = 'incorrect email form';
//     field.isValid = false;
//   }
// };

// export const checkPassword = (field: FieldType) => {
//   if (field.value.length < 8) {
//     field.errorMessage = 'must be at least 8 characters long';
//     field.isValid = false;
//   } else if (!field.value.match(/[A-Z]/)) {
//     field.errorMessage = 'must contain at least one capital letter (AZ)';
//     field.isValid = false;
//   } else if (!field.value.match(/[a-z]/)) {
//     field.errorMessage = 'must contain at least one lowercase letter (az)';
//     field.isValid = false;
//   } else if (!field.value.match(/\d/)) {
//     field.errorMessage = 'must contain at least one number';
//     field.isValid = false;
//   } else if (!field.value.match(/[[!@#$&*"'./|/\\+^`~_=]/)) {
//     field.errorMessage = 'must contain at least one special character';
//     field.isValid = false;
//   } else if (field.value.trim() !== field.value) {
//     field.errorMessage = 'must not contain leading or trailing spaces';
//     field.isValid = false;
//   }
// };

// export const checkDate = (field: FieldType) => {
//   const re = /\d{4}(-)\d{2}\1\d{2}/g;
//   if (!re.test(field.value)) {
//     field.errorMessage = 'date must be in the form yyyy-mm-dd';
//     field.isValid = false;
//   }
//   const currentYear = new Date().getFullYear();
//   const date = field.value.slice(8);
//   const mounth = field.value.slice(5, 7);
//   const year = field.value.slice(0, 4);
//   const userBirthday = new Date(`${currentYear}-${mounth}-${date}`);
//   let age = currentYear - +year;
//   if (new Date() < userBirthday) {
//     age = age - 1;
//   }
//   if (currentYear - +year < 0) {
//     field.errorMessage = 'you cannot be born in the future';
//     field.isValid = false;
//   } else if (age < 13) {
//     field.errorMessage = 'registration of users over 13 years old';
//     field.isValid = false;
//   } else if (field.value.length > 10) {
//     field.errorMessage = 'date must be in the form yyyy-mm-dd';
//     field.isValid = false;
//   } else if (+mounth > 12) {
//     field.errorMessage = 'enter the number of the month from 1 to 12';
//     field.isValid = false;
//   } else if (+date > 31) {
//     field.errorMessage = 'enter the number of the day from 1 to 31';
//     field.isValid = false;
//   }
// };

// export const addInputValue = (id: string, value: string, inputType: string) => {
//   const field = findField(+id);
//   field.value = value;
//   field.errorMessage = '';
//   checkTextField(field);
//   if (field.isValid) {
//     if (inputType === 'email') {
//       checkEmail(field);
//     } else if (inputType === 'password') {
//       checkPassword(field);
//     } else if (inputType.startsWith('date of')) {
//       checkDate(field);
//     }
//   }
// };

// export const checkPostalCode = (field: FieldLocationType, typeAddress: 'billing' | 'shipping') => {
//   const country = state.profilePage.location[typeAddress].find(
//     (item) => item.type === 'country',
//   )!.value;
//   const reg = /^\d+$/;
//   if (!reg.test(field.value)) {
//     field.errorMessage = 'must contain contain only digits';
//     field.isValid = false;
//   } else if (country === 'Spain' && field.value.length !== 5) {
//     field.errorMessage = 'spain postal code must contain 5 digits';
//     field.isValid = false;
//   } else if (country === 'Italy' && field.value.length !== 5) {
//     field.errorMessage = 'italy postal code must contain 5 digits';
//     field.isValid = false;
//   }
// };

// export const checkTextLocationField = (field: FieldLocationType) => {
//   if (field.value.match(/[0-9]/)) {
//     field.errorMessage = 'must not contain numbers';
//     field.isValid = false;
//   }
//   if (field.value.match(/[[!@#$&*"'./|/\\+^`~_=]/) && field.type === 'city') {
//     field.errorMessage = 'must not contain special characters';
//     field.isValid = false;
//   }
//   if (field.value.trim() !== field.value) {
//     field.errorMessage = 'cannot start/end with a space';
//     field.isValid = false;
//   }
// };

// export const addLocationValue = (
//   typeAddress: 'billing' | 'shipping',
//   type: 'city' | 'street' | 'postal',
//   value: string,
// ) => {
//   const field = state.profilePage.location[typeAddress].find((item) => item.type === type)!;
//   field.value = value;
//   field.errorMessage = '';
//   if (field.value.length === 0) {
//     field.errorMessage = 'must be filled';
//     field.isValid = false;
//   } else field.isValid = true;
//   if (['city', 'street'].includes(field.type)) {
//     checkTextLocationField(field);
//   } else {
//     checkPostalCode(field, typeAddress);
//   }
// };

export default state;

//                                  NEW FUNCTIONS

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
  if (!re.test(value)) {
    setState('date must be in the form yyyy-mm-dd');
  }
  const currentYear = new Date().getFullYear();
  const date = value.slice(8);
  const mounth = value.slice(5, 7);
  const year = value.slice(0, 4);
  const userBirthday = new Date(`${currentYear}-${mounth}-${date}`);
  let age = currentYear - +year;
  if (new Date() < userBirthday) {
    age = age - 1;
  }
  if (currentYear - +year < 0) {
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
  }
};
