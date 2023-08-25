import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { Button } from './IconButton.styles';

export const IconButton = ({ children, onClick }) => {
  return (
    <IconContext.Provider
      value={{ color: 'black', size: '20px', hover: 'red' }}
    >
      <Button type="button" onClick={onClick}>
        {children}
      </Button>
    </IconContext.Provider>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
