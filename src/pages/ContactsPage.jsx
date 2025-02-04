
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import SearchBox from '../components/SearchBox/SearchBox.jsx'
import ContactList from '../components/ContactList/ContactList.jsx'

function ContactsPage() {
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
