import React, { useState } from 'react';
import { createContact } from '../utils/api'; // Assuming API functions are imported here
import ContactForm from './ContactForm';

function ContactNewForm() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setError(null);

    try {
      await createContact(formData);
      setSuccessMessage('Contact created successfully!');
      setFormData(initialFormData); // Reset form after successful submission
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactForm
      formData={formData}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      successMessage={successMessage}
      isEditing={false}
    />
  );
}

export default ContactNewForm;
