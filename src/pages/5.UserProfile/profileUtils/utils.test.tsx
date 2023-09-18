import React from 'react';

import {
  checkEmail,
  checkTextField,
  checkDate,
  checkPassword,
  checkCity,
  checkStreet,
  checkCountry,
  checkPostalCode,
} from './utils';

describe('checkEmail', () => {
  it('should validate a valid email', () => {
    const setState = jest.fn();

    checkEmail('test@email.com', setState);
    expect(setState).toHaveBeenCalledWith('');
  });

  it('should validate an email without "@"', () => {
    const setState = jest.fn();

    checkEmail('testemail', setState);
    expect(setState).toHaveBeenCalledWith('must contain @');
  });

  it('should validate an email with spaces', () => {
    const setState = jest.fn();

    checkEmail('email with space@email.com', setState);
    expect(setState).toHaveBeenCalledWith('must not contain spaces');
  });
});

describe('checkTextField', () => {
  it('should validate a valid text field', () => {
    const setState = jest.fn();

    checkTextField('ValidText', setState);
    expect(setState).toHaveBeenCalledWith('');
  });

  it('should validate a text field with numbers', () => {
    const setState = jest.fn();

    checkTextField('Text with numbers 123', setState);
    expect(setState).toHaveBeenCalledWith('must not contain numbers');
  });

  it('should validate a text field with special characters', () => {
    const setState = jest.fn();

    checkTextField('Text with special characters @', setState);
    expect(setState).toHaveBeenCalledWith('must not contain special characters');
  });
});

describe('checkDate function', () => {
  it('should not allow dates from the future', () => {
    const setState = jest.fn();
    checkDate(`${new Date().getFullYear() + 1}-01-01`, setState);
    expect(setState).toHaveBeenCalledWith('you cannot be born in the future');
  });
  it('should require registration for users over 13 years', () => {
    const setState = jest.fn();
    checkDate('2012-01-15', setState);
    expect(setState).toHaveBeenCalledWith('registration of users over 13 years old');
  });
  it('should be in the form yyyy-mm-dd', () => {
    const setState = jest.fn();
    checkDate('08-18-2023', setState);
    expect(setState).toHaveBeenCalledWith('date must be in the form yyyy-mm-dd');
  });
});

describe('checkPassword function', () => {
  it('should validate a valid password', () => {
    const setState = jest.fn();
    checkPassword('Password345!', setState);
    expect(setState).toHaveBeenCalledWith('');
  });

  it('should validate a short password', () => {
    const setState = jest.fn();
    checkPassword('Pass', setState);
    expect(setState).toHaveBeenCalledWith('must be at least 8 characters long');
  });

  it('should validate a password without a capital letter', () => {
    const setState = jest.fn();
    checkPassword('password345', setState);
    expect(setState).toHaveBeenCalledWith('must contain at least one capital letter (AZ)');
  });
});

describe('checkCity', () => {
  it('should validate city correctly', () => {
    const setState = jest.fn();

    checkCity('Milan', setState);
    expect(setState).toHaveBeenCalledWith('');

    checkCity('Rome', setState);
    expect(setState).toHaveBeenCalledWith('');

    checkCity('123 Milam', setState);
    expect(setState).toHaveBeenCalledWith('must not contain numbers');

    checkCity('City #Milam', setState);
    expect(setState).toHaveBeenCalledWith('must not contain special characters');

    checkCity(' City', setState);
    expect(setState).toHaveBeenCalledWith('cannot start/end with a space');
  });
});

describe('checkStreet function', () => {
  it('should validate street  when it does not contain numbers', () => {
    const setState = jest.fn();
    checkStreet('Milano Str', setState);
    expect(setState).toHaveBeenCalledWith('');
  });

  it('should validate street  when it contains numbers', () => {
    const setState = jest.fn();
    checkStreet('123 Milano Str', setState);
    expect(setState).toHaveBeenCalledWith('must not contain numbers');
  });

  it('should validate street  when it is empty', () => {
    const setState = jest.fn();
    checkStreet('', setState);
    expect(setState).toHaveBeenCalledWith('must be filled');
  });

  it('should validate street  when it starts or ends with spaces', () => {
    const setState = jest.fn();
    checkStreet('Invalid Street ', setState);
    expect(setState).toHaveBeenCalledWith('cannot start/end with a space');
  });
});

describe('checkCountry', () => {
  it('should validate country correctly', () => {
    const setState = jest.fn();

    checkCountry('IT', setState);
    expect(setState).toHaveBeenCalledWith('');

    checkCountry('ES', setState);
    expect(setState).toHaveBeenCalledWith('');

    checkCountry('FR', setState);
    expect(setState).toHaveBeenCalledWith('enter "IT" (Italy) or "ES" (Spain)');
  });
});

describe('checkPostalCode', () => {
  it('should validate postal code correctly', () => {
    const setState = jest.fn();

    checkPostalCode('12345', setState, 'IT');
    expect(setState).toHaveBeenCalledWith('');

    checkPostalCode('54321', setState, 'ES');
    expect(setState).toHaveBeenCalledWith('');

    checkPostalCode('123', setState, 'IT');
    expect(setState).toHaveBeenCalledWith('italy postal code must contain 5 digits');

    checkPostalCode('5432', setState, 'ES');
    expect(setState).toHaveBeenCalledWith('spain postal code must contain 5 digits');

    checkPostalCode('ABC23', setState, 'FR');
    expect(setState).toHaveBeenCalledWith('must contain contain only digits');
  });
});
