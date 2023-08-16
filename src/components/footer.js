import React from 'react';


const Footer = () => {
  const footerStyle = {
    height: '20vh',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: '10px'
  };

  return (
    <div style={footerStyle}>
      <p>Connect with us:</p>
      
    </div>
  );
};

export default Footer;
