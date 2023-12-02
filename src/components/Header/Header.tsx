import React from 'react';

interface HeaderProps {
  sessionTitle: string;
}

const Header: React.FC<HeaderProps> = ({ sessionTitle }) => {
  return (
    <header>
      <h1>Podcast Recording App</h1>
      <h2>{sessionTitle}</h2>
    </header>
  );
}

export default Header;
