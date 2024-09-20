// Layout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../../context/themeContext';

const Layout = ({ children, title, description, keywords, author }) => {
  const { theme } = useTheme(); // Access theme from context

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '73vh' }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Green Delight-Delivery in 10 Minutes',
  description: 'A Quick Commerce site',
  keywords: 'Quick Commerce',
  author: 'Ritesh Kumar',
};

export default Layout;
