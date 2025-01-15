import React, { useState, useEffect } from "react";
import { createContact, updateContact } from "../utils/api"; // API functions for create and update
import ContactForm from "./ContactForm"; // Import the reusable ContactForm
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = ({ icon, label, value }) => (
  <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-lg transition-all ease-in-out duration-300">
    {icon}
    <span className="text-gray-800">
      <strong>{label}:</strong> {value}
    </span>
  </li>
);

const ContactDetails = () => (
  <div className="bg-white shape shadow-lg rounded-lg p-8 mb-8 max-w-lg mx-auto">
    <ul className="space-y-6 text-lg">
      <ContactInfo icon={<FaPhoneAlt />} label="Phone" value="757-536-1233" />
      <ContactInfo icon={<FaEnvelope />} label="Email" value="info@lemichclinic.org" />
      <ContactInfo icon={<FaMapMarkerAlt />} label="Address" value="5205 Colley Ave, Norfolk, VA 23508" />
    </ul>

    <p className="mt-6 text-sm text-gray-600">
      We are located 4 miles south of Naval Station Norfolk and 2 blocks from ODU. For business requests, email Dr. Gregory Lemich at <strong>info@lemichclinic.org</strong>.
    </p>
  </div>
);

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
          const data = await fetch(`/api/contacts/${contactId}`).then((res) => res.json());
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
        setSuccessMessage("We will be in touch shortly.");
      }
    } catch (error) {
      setErrorMessage("Error processing contact. Please try again.");
    } finally {
      setLoading(false);
    }
  };
// bg-gradient-to-r from-[#b3cde0] to-white
  return (
    <div className="bg-gray-50  py-12">
      <h1 className="text-2xl font-bold text-center  mb-6 tracking-wide">
      For session requests and client inquiries:
      </h1>

      <div className="flex justify-center">
        <div className="max-w-lg w-full">
          {/* Contact Information Section */}
          <ContactDetails />

          <div className="mt-10">
            {errorMessage && <div className="text-red-600 text-center mb-4">{errorMessage}</div>}
            {successMessage && <div className="text-green-600 text-center mb-4">{successMessage}</div>}

            <ContactForm
              onSubmit={handleSubmit}
              initialData={contactData}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
