import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to our modern hospital management system, where innovation meets
            healthcare. Our mission is to streamline hospital operations, improve 
            patient care, and provide healthcare professionals with the tools they 
            need to manage appointments and records efficiently. We believe that 
            accessible and well-managed healthcare systems are the foundation of a 
            healthy community.
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            With years of experience in the healthcare tech industry, our team is
            dedicated to creating seamless software solutions. This platform is
            designed to bridge the gap between patients and doctors, offering
            features like online appointment booking, doctor management, and secure
            medical records. We are committed to continuous improvement and user
            satisfaction.
          </p>
          <p>Join us in revolutionizing healthcare!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;