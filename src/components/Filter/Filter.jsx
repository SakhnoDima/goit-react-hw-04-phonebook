import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Title } from './Filter.styles';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Title>Find contacts by name</Title>
      <Label>
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
