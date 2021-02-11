import React from 'react';

import './index.scss';
import Logo from '@src/images/icon.png';
import { Link } from 'gatsby';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="header__nav">

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
