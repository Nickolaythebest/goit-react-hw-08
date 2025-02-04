import s from './Contact.module.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';

import { FaUserEdit } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

import { deleteContact } from '../../redux/contactsOps';
import {editContactThunk} from '../../redux/contactsOps'

const Contact = ({name, number, id, isCompleted, isFavorite}) => {
    const dispatch = useDispatch()
     
    return (
        <li className={s.container}>
            {isFavorite && <MdFavorite className={s.herz} color='red' width='40'/>}
             
            <span className={s.mainCont}>
                <span className={s.item}>  
                    <FaUser className={s.icons}/>
                    <p className={s.text}>{name}</p>
                </span>
                <span className={s.item}>
                   <BsFillTelephoneFill className={s.icons}/>
                    <p className={s.text}>{number}</p>
                </span>
                </span>
                <span className={s.notesMain}>
                <span className={s.notes}>
               
                <button type='button' className={s.buttonContactIcon} onClick={() => {
                    const newName = prompt('Enter new name: ', name);
                    const newNumber = prompt('Enter new numder: ', number);
                    if (newName.trim() && newNumber.trim()) {
                        dispatch(editContactThunk({ id, name: newName, number: newNumber }));
                    }
                } }><FaUserEdit /></button>
                </span>
                <button type='button' className={s.buttonContact} onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </span>
            </li>
    )
}
export default Contact;
