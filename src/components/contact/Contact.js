import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container contact">
      <h3>Contact Us</h3>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
