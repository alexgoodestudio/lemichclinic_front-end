import React, { useState, useEffect } from "react";
import { createContact, updateContact } from "../utils/api"; // API functions for create and update
import ContactForm from "./ContactForm"; // Import the reusable ContactForm

function Contact({ contactId = null }) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    if (contactId) {
      // If contactId is provided, fetch the contact data to edit
      async function fetchContact() {
        try {
          const data = await fetch(`/api/contacts/${contactId}`).then(res => res.json());
          setContactData(data); // Set the contact data for editing
        } catch (error) {
          setErrorMessage("Error loading contact data.");
        }
      }

      fetchContact();
    }
  }, [contactId]);

  // Handle form submission for both create and update
  const handleSubmit = async (formData) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (contactId) {
        // If contactId exists, update the contact
        await updateContact(contactId, formData);
        setSuccessMessage("Contact updated successfully!");
      } else {
        // Otherwise, create a new contact
        await createContact(formData);
        setSuccessMessage("We will be in touch shortly");
      }
    } catch (error) {
      setErrorMessage("Error processing contact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        {contactId ? "Edit Contact" : "Create Contact"}
      </h1>

      <div className="container mx-auto mb-10 px-4">
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        {successMessage && <div className="text-green-500">{successMessage}</div>}

        <ContactForm
          onSubmit={handleSubmit}
          initialData={contactData} // Pass initial data for editing if available
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Contact;
