import ContactForm from '../components/ContactForm/ContactForm.jsx'
import SearchBox from '../components/SearchBox/SearchBox.jsx'
import ContactList from '../components/ContactList/ContactList.jsx'
import { fetchContacts } from '../redux/contacts/operations.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); // Загружаем контакты при монтировании
  }, [dispatch]);
  return (
    <>
      <div className='container'>
  <h1 className='title'>Phonebook</h1>
  <ContactForm />
  <SearchBox  />
  <ContactList />
</div>
    </>
  )
}

export default ContactsPage;
