import Head from 'next/head';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      <div className="container">{children}</div>
    </main>

  </>
);

export default Layout;
