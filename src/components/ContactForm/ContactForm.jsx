
import style from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import * as Yup from "yup";

import { addContact } from '../../redux/contacts/operations';

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(20, "Too Long!").required("Required"),
    phone: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Уведiть номер телефону у форматi 000-000-0000'
    )
    .required('Це поле обов`язкове'),
})


const ContactForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
  const phoneFieldId = useId();

    const initialValues = {
        username: "",
        phone: "",
    }
   
    const handleSubmit = (values, actions) => {
        const newContact = {
            
            name: values.username,
            number: values.phone,
            
            
        };
        dispatch(addContact(newContact));
        console.log(newContact);
        actions.resetForm()
    }

   
    return (
        <Formik
        validationSchema={FeedbackSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        >
            <Form className={style.container}>
                <div className={style.dataContainer}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name='username' id={nameFieldId} className={style.typing}/>
                <ErrorMessage className={style.msg} name='username' component='span'/>
                </div>
                <div className={style.dataContainer}>
                    <label htmlFor={phoneFieldId}>Number</label>
                    <Field type="tel" name='phone' id={phoneFieldId} placeholder="000-000-0000" className={style.typing} />
                    <ErrorMessage className={style.msg} name='phone' component='span' />
                </div>
                <button type='submit' className={style.butotnForm}>Add Contact</button>
            </Form>
        </Formik>
    )
}
export default ContactForm;