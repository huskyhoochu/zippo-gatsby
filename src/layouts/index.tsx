import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '@src/components/header';
import Footer from '@src/components/footer';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <main>
      <Helmet>
        <title>지포의 나날들</title>
      </Helmet>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
