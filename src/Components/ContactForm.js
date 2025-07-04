import React, { useState, useEffect } from "react";

function ContactForm({ onSubmit, initialData = null, loading, error, successMessage}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
      setPhone(initialData.phone);
      setMessage(initialData.message);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, phone, message };
    onSubmit(formData); 
  };

  return (
    <form className="space-y-4 " onSubmit={handleSubmit}>
      {error && <div className="text-red-500">{error}</div>}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      
      <div className="row mb-3 ">
        <div className="col-lg-6">
          <label className="form-label text-slate-500 font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-lg-6">
          <label className="form-label text-slate-500 font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label text-slate-500 font-medium" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label text-slate-500 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="form-control"
          rows="4"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn accent-button px-6 py-2  hover:shadow-lg transition"
          disabled={loading}
        >
       Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
