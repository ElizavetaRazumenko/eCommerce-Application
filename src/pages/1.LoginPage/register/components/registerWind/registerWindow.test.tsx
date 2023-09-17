import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RegisterWindow from './registerWindow';

test('RegisterWindow component', () => {
  const setUserState = jest.fn();
  render(
    <Router>
      <RegisterWindow setUserState={setUserState} />
    </Router>,
  );
});
