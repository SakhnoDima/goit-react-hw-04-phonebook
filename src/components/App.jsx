import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Forms, { IconButton, Modal } from './Form';
import { Contacts } from './Contacts';
import Filter from './Filter';
import { MainPage, Button } from './styles/App.styles';
import { useLocalStorage } from './hook/useLocalStorage';

const KEY_LS = 'cont';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(KEY_LS, []);
  const [filter, setFilter] = useState('');
  const [showModal, setModalShow] = useState(false);

  // === тогл модалки ===
  const modalToggle = () => {
    setModalShow(prev => !prev);
  };

  // === сабміт форми ===
  const formSubmitData = ({ name, number }) => {
    // ===  перевірка на вже існуюче ім'я ===
    const includeName = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (includeName) {
      alert(`${name} Is already in contacts`);
      return;
    }
    // === додавання до списку крнтакту ===

    const updateContacts = { id: nanoid(2), name, number };
    setContacts(prev => [...prev, updateContacts]);
  };

  // === ім'я в полі фільтру ===
  const onFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  // === фільтруємо по імені ===
  const filterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  };

  // === видаляю контакт ===
  const deleteContact = idCard => {
    setContacts(prev => prev.filter(({ id }) => id !== idCard));
  };

  const filteredContacts = filterContacts();
  return (
    <MainPage>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <Forms onSubmit={formSubmitData} />
      <Button type="button" onClick={modalToggle}>
        All Cntacts
      </Button>
      {showModal && (
        <Modal onCloses={modalToggle}>
          <>
            <IconButton onClick={modalToggle}>
              <AiOutlineCloseCircle />
            </IconButton>
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter value={filter} onChange={onFilterChange} />
            <Contacts
              contacts={filteredContacts}
              onDeleteContacts={deleteContact}
            />
          </>
        </Modal>
      )}
    </MainPage>
  );
};
