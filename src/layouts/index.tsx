import * as React from 'react';
import Header from '../components/header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Layout;
