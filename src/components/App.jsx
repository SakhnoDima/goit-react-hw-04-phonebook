import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Forms, { IconButton, Modal } from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { MainPage, Button } from './styles/App.styles';

const KEY_LS = 'cont';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
    open: true,
  };

  // === дістаю з LS ===
  componentDidMount() {
    const fromLs = localStorage.getItem(this.KEY_LS);
    const parseContacts = JSON.parse(fromLs);
    if (parseContacts) this.setState({ contacts: parseContacts }); // перевірка на пустий LS
  }
  // === записую в LS ===
  componentDidUpdate(prevProps) {
    if (this.state.contacts !== prevProps.contact) {
      localStorage.setItem(this.KEY_LS, JSON.stringify(this.state.contacts));
    }
  }
  // === тогл модалки ===
  modalToggle = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  // === сабміт форми ===
  formSubmitData = ({ name, number }) => {
    const { contacts } = this.state;
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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, updateContacts],
    }));
  };

  // === ім'я в полі фільтру ===
  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // === фільтруємо по імені ===
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
    if (filteredContacts.length === 0) {
      //! додав помилку якщо контактів по фільтру не знайшли
      this.state.open = false;
      return;
    }
    this.state.open = true;

    return filteredContacts;
  };

  // === видаляю контакт ===
  deleteContact = idCard => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idCard),
    }));
  };

  render() {
    const { filter, showModal } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <MainPage>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <Forms onSubmit={this.formSubmitData} />
        <Button type="button" onClick={this.modalToggle}>
          All Cntacts
        </Button>
        {showModal && (
          <Modal onCloses={this.modalToggle}>
            <>
              <IconButton onClick={this.modalToggle}>
                <AiOutlineCloseCircle />
              </IconButton>
              <h2 style={{ textAlign: 'center' }}>Contacts</h2>
              <Filter value={filter} onChange={this.onFilterChange} />
              <Contacts
                isOpen={this.state.open}
                contacts={filteredContacts}
                onDeleteContacts={this.deleteContact}
              />
            </>
          </Modal>
        )}
      </MainPage>
    );
  }
}
