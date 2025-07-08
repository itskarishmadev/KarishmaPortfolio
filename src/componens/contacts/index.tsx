import React from "react";
import RotatingWheel from "./rotatingWheel";
import ContactForm from "./contactForm";

const Contact = () => {
  const [showContact, setShowContact] = React.useState(false);
  return (
    <>
      {showContact ? (
        <ContactForm />
      ) : (
        <RotatingWheel onHireClick={() => setShowContact(true)} />
      )}
    </>
  )
};

export default Contact;
