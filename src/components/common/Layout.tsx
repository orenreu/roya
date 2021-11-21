import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/normalize.css';
import '../../styles/global.css';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
