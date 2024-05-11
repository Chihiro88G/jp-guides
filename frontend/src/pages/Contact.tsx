import { Fragment } from 'react';
import ContactTop from '../components/contact/ContactTop';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <Fragment>
      <ContactTop />
      <ContactForm />
    </Fragment>
  )
}