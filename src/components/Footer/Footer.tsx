import React from 'react';

interface FooterProps {
  onSync: () => void;
  // You can add more props related to user authentication or other functionalities as needed
}

const Footer: React.FC<FooterProps> = ({ onSync }) => {
  return (
    <footer>
      <button onClick={onSync}>Sync Data</button>
      {/* Additional functionality can be added here */}
    </footer>
  );
}

export default Footer;
