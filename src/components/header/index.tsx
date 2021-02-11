import React from 'react';

import './index.scss';
import Logo from '@src/images/icon.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header__nav">

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
