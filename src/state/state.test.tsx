import { checkEmail, checkPassword } from './state';

import { FieldType } from '../types/types';

describe('checkEmail function', () => {
  it('should set isValid to false for an email with spaces', () => {
    const testField = {
      value: 'email contains spaces@testemail.com',
      isValid: true,
    } as FieldType;
    checkEmail(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for an email without "@"', () => {
    const testField = {
      value: 'withouttestmail.com',
      isValid: true,
    } as FieldType;
    checkEmail(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for an email without "."', () => {
    const testField = {
      value: 'invalid@testmail',
      isValid: true,
    } as FieldType;
    checkEmail(testField);

    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for an incorrectly email form', () => {
    const testField = {
      value: '#incorrect@testmail.com',
      isValid: true,
    } as FieldType;
    checkEmail(testField);
    expect(testField.isValid).toBe(false);
  });
});

describe('checkPassword function', () => {
  it('should set isValid to false for a password shorter than 8 characters', () => {
    const testField = {
      value: 'Abcd123',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for a password without a capital letter', () => {
    const testField = {
      value: 'abcdefgh',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for a password without a lowercase letter', () => {
    const testField = {
      value: 'ABCDEFGH',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for a password without a number', () => {
    const testField = {
      value: 'Abcdefg@',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for a password without a special character', () => {
    const testField = {
      value: 'Abcd1234',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });

  it('should set isValid to false for a password with leading or trailing spaces', () => {
    const testField = {
      value: ' Abcd1234@ ',
      isValid: true,
    } as FieldType;
    checkPassword(testField);
    expect(testField.isValid).toBe(false);
  });
});
