import {
  checkEmail,
  checkPassword,
  checkTextField,
  checkDate,
  checkPostalCode,
  checkTextLocationField,
} from './state';

import { FieldLocationType, FieldType } from '../types/types';

describe('checkEmail function', () => {
  test('should set isValid to false for an email with spaces', () => {
    const testField = {
      value: 'email contains spaces@testemail.com',
      isValid: true,
    } as FieldType;
    checkEmail(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for an email without "@"', () => {
    const testField = {
      value: 'withouttestmail.com',
      isValid: true,
    } as FieldType;
    checkEmail(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for an email without "."', () => {
    const testField = {
      value: 'invalid@testmail',
      isValid: true,
    } as FieldType;
    checkEmail(testField);

    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for an incorrectly email form', () => {
    const testField = {
      value: '#incorrect@testmail.com',
      isValid: true,
    } as FieldType;
    checkEmail(testField);
    expect(testField.isValid).toBe(false);
  });
});

describe('checkPassword function', () => {
  test('should set isValid to false for a password shorter than 8 characters', () => {
    const testField = {
      value: 'Abcd123',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for a password without a capital letter', () => {
    const testField = {
      value: 'abcdefgh',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for a password without a lowercase letter', () => {
    const testField = {
      value: 'ABCDEFGH',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for a password without a number', () => {
    const testField = {
      value: 'Abcdefg@',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for a password without a special character', () => {
    const testField = {
      value: 'Abcd1234',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should set isValid to false for a password with leading or trailing spaces', () => {
    const testField = {
      value: ' Abcd1234@ ',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });
});

describe('checkTextField function', () => {
  test('should set isValid to false for empty field', () => {
    const testField = {
      value: '',
      isValid: true,
    } as FieldType;
    const resultField = checkTextField(testField);
    expect(resultField.isValid).toBe(false);
  });

  test('should set isValid to false for field with numbers in "First name" placeholder', () => {
    const testField = {
      value: 'John123',
      plshldr: 'First name',
      isValid: true,
    } as FieldType;
    const resultField = checkTextField(testField);
    expect(resultField.isValid).toBe(false);
  });

  test('should set isValid to false for field with special characters in "First name" placeholder', () => {
    const testField = {
      value: 'John@Doe',
      plshldr: 'First name',
      isValid: true,
    } as FieldType;
    const resultField = checkTextField(testField);
    expect(resultField.isValid).toBe(false);
  });

  test('should not modify field with valid input', () => {
    const testField = {
      value: 'John',
      plshldr: 'First name',
      isValid: true,
    } as FieldType;
    const resultField = checkTextField(testField);
    expect(resultField.isValid).toBe(true);
  });
});

describe('checkDate function', () => {
  test('should not allow dates from the future', () => {
    const currentYear = new Date().getFullYear();
    const futureDate = new Date(currentYear + 1, 0, 1);
    const testField = {
      value: `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${futureDate.getDate().toString().padStart(2, '0')}`,
      isValid: true,
    } as FieldType;
    checkDate(testField);
    expect(testField.isValid).toBe(false);
  });

  test('registration for users over 13 years', () => {
    const testField = {
      value: '2013-03-03',
      isValid: true,
    } as FieldType;
    checkDate(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should be in the form yyyy-mm-dd', () => {
    const testField = {
      value: '08-18-2023',
      errorMessage: '',
      isValid: true,
    } as FieldType;
    checkDate(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should be valid month', () => {
    const testField = {
      value: '2023-14-27',
      isValid: true,
    } as FieldType;
    checkDate(testField);
    expect(testField.isValid).toBe(false);
  });
  test('should not be day greater than 31', () => {
    const testField = {
      value: '2023-08-32',
      isValid: true,
    } as FieldType;
    checkDate(testField);
    expect(testField.isValid).toBe(false);
  });
});

describe('checkPostalCode function', () => {
  test('should be contaons digits', () => {
    const testField = {
      value: 'abc123',
      isValid: true,
    } as FieldType;

    const typeAddress = 'billing' || 'shipping';
    checkPostalCode(testField, typeAddress);
    expect(testField.isValid).toBe(false);
  });
});

describe('checkTextLocationField', () => {
  test('should not contain numbers', () => {
    const testField = {
      value: 'Milan123',
      isValid: true,
    } as FieldLocationType;
    checkTextLocationField(testField);
    expect(testField.isValid).toBe(false);
  });

  test('should not contain special characters', () => {
    const testField = {
      value: '@Mil#an!',
      isValid: true,
    } as FieldLocationType;
    checkTextLocationField(testField);
    expect(testField.isValid).toBe(false);
  });
});
