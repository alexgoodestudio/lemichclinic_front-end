import React, { useState, useEffect } from "react";
import { listContacts, deleteContact } from "../utils/api"; 
import { useNavigate } from "react-router-dom"; 
import "../style.css"; 

function EmployeeHome() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsData = await listContacts();
        setContacts(contactsData || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      await deleteContact(contactId);
      setContacts(contacts.filter(contact => contact.id !== contactId));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // const handleEdit = (contactId) => {
  //   if (!contactId) return;
  //   navigate(`/contacts/${contactId}/edit`);
  // };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 px-4">
          <div className="text-2xl font-semibold text-blue-600">Employee Dashboard</div>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            contacts.length > 0 ? (
              contacts.map((contact) => (
                <div
                  key={contact.id} // Use 'id' instead of 'contact_id'
                  className="contact-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">{contact.name}</div>
                    <div className="space-x-4">
                      <button
                        onClick={() => handleDelete(contact.id)}  // Use 'id' here as well
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                      {/* <button
                        onClick={() => {
                          handleEdit(contact.id);  // Use 'id' in the handleEdit function
                        }}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button> */}
                    </div>
                  </div>
                  <p className="text-gray-700">{contact.email}</p>
                  <p className="text-gray-700">{contact.phone}</p>
                  <p className="text-gray-700">{contact.message}</p>
                </div>
              ))
            ) : (
              <div>No contacts available.</div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeHome;
