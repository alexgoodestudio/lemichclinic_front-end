import React, { useState, useEffect } from "react";
import { createContact, updateContact } from "../utils/api";
import ContactForm from "./ContactForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../style.css";
import { Helmet } from "react-helmet";


function ContactInfo({ icon, label, value }) {

  return (
    <li className="flex items-center text-lg space-x-4 p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-shadow duration-200 shadow-sm hover:shadow-md">
      <div className="text-blue-500 text-xl">{icon}</div>
      <span className="text-gray-800">
        <strong>{label}:</strong> {value}
      </span>
    </li>
  );
}

function ContactDetails() {
  return (
    
    <div className="rounded-lg ppneue bg-white shadow-lg p-6">
            <Helmet>
              <meta
                name="description"
                content="Contact us at The Lemich Clinic | Experts in mental health services for veterans and military personnel in Norfolk, VA."
              />
              <title> Contact Us | Norfolk, VA | Military Mental Health Services</title>
            </Helmet>
      <h2 className="text-xl  font-bold text-gray-800 mb-4">Contact Information</h2>
      <ul className="space-y-4">
        <ContactInfo icon={<FaPhoneAlt />} label="Phone" value="757-536-1233" />
        <ContactInfo icon={<FaEnvelope />} label="Email" value="info@lemichclinic.org" />
        <ContactInfo
          icon={<FaMapMarkerAlt />}
          label="Address"
          value="5205 Colley Ave, Norfolk, VA 23508"
        />
      </ul>
      <p className="mt-6 text-gray-600 text-sm">
        We are located 4 miles south of Naval Station Norfolk and 2 blocks from ODU. For business
        requests, email Dr. Gregory Lemich at <strong>info@lemichclinic.org</strong>.
      </p>
    </div>
  );
}

function Contact({ contactId = null }) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (contactId) {
      async function fetchContact() {
        try {
          const data = await fetch(`/api/contacts/${contactId}`).then((res) => res.json());
          setContactData(data);
        } catch (error) {
          setErrorMessage("Error loading contact data.");
        }
      }
      fetchContact();
    }
  }, [contactId]);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (contactId) {
        await updateContact(contactId, formData);
        setSuccessMessage("Contact updated successfully!");
      } else {
        await createContact(formData);
        setSuccessMessage("We will be in touch shortly.");
      }
    } catch (error) {
      setErrorMessage("Error processing contact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">

      <h1 className=" text-4xl ppneue-med text-start text-gray-800 mb-5">
        Get in Touch with Us.
      </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Details */}
          <ContactDetails />

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
            {successMessage && (
              <div className="text-green-500 text-center mb-4">{successMessage}</div>
            )}
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
