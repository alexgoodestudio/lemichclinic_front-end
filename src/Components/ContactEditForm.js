import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { readContact, updateContact } from '../utils/api'; 
import ContactForm from './ContactForm';

function ContactEditForm() {
  const { contact_id } = useParams(); 
  const navigate = useNavigate();

  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const contact = await readContact(contact_id); 
        setFormData(contact);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchContact();
  }, [contact_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setError(null);

    try {
      await updateContact(contact_id, formData);
      setSuccessMessage('Contact updated successfully!');
      navigate(`/contacts/${contact_id}`); // Redirect after successful edit
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ContactForm
      formData={formData}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      successMessage={successMessage}
      isEditing={true}
    />
  );
}

export default ContactEditForm;
