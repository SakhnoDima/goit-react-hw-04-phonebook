import React from 'react';
import PropTypes from 'prop-types';
import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { Button, Error, Item, List } from './Contacts.styles';

const Contacts = ({ contacts, onDeleteContacts, isOpen }) => {
  return (
    <div>
      {isOpen ? (
        <List>
          {contacts.map(({ name, number, id }) => {
            return (
              <Item key={id}>
                <RiContactsBook2Fill />
                {name} : {number}
                <Button onClick={() => onDeleteContacts(id)}>
                  <RiDeleteBin5Line />
                </Button>
              </Item>
            );
          })}
        </List>
      ) : (
        <Error>Contacts not found</Error>
      )}
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContacts: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
