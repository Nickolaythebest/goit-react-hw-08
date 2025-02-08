
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact.jsx'
import s from './ContactList.module.css'
import { selectFilteredContacts, selectIsError, selectIsLoading } from '../../redux/contactsSlice.js';
/*import { selectFilter } from '../../redux/filtersSlice.js';*/
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import Loader from '../Loader/Loader.jsx'
import  ErrorMessage  from '../ErrorMessage/ErrorMessage.jsx';

const ContactList = () => {
    /*const contacts = useSelector(selectContact) || [];*/ 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const isError = useSelector(selectIsError);
    const isLoading = useSelector(selectIsLoading);
    /*const filter = useSelector(selectFilter) || '';*/
    /*const filterData = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))*/
    const filterdeContacts = useSelector(selectFilteredContacts);
    return (
        <>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        <ul className={s.list}>
            {filterdeContacts.map(items => (
                <Contact {...items} key={items.id} />
            )
            )}
        
        </ul>
        </>
        
    )
}
export default ContactList;