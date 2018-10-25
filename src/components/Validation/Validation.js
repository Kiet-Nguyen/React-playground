import React from 'react';
import { number } from 'prop-types';

import './Validation.css';

const Validation = ({ length }) => {
  let result = null;

  if (length < 5) {
    result = 'Result: Text is too short';
  } else if (length > 5) {
    result = 'Result: Text is too long';
  } else {
    result = 'Result: Good';
  }

  return (
    <span className="Validation">
      {result}
    </span>
  );
};

Validation.propTypes = {
  length: number.isRequired,
};

export default Validation;
