import React, { useState } from "react";
import "../styles/contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <p>Remplissez ce formulaire et nous vous répondrons dès que possible.</p>

      <div className="contact-content">

        <form onSubmit={handleSubmit} className="contact-form">
          <label>Nom :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Prénom :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Numéro de téléphone :</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message :</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
