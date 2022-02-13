import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { navMenu, siteMetadata, socialMenu } from '../config';

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <title>Julien's portfolio</title>
      <meta name="description" content={siteMetadata.description} />
    </Head>

    <Header />
    <main className="flex-1 flex flex-col">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;

function Header() {
  return (
    <header className="w-full px-4 py-6 font-mono flex justify-between max-w-7xl mx-auto">
      <Link href="/">
        <a className="react-effect">
          Home
        </a>
      </Link>
      <nav>
        <ul className="flex">
          {navMenu.map(({ label, path }) => (
            <li key={path} className="">
              <Link href={path}>
                <a className="px-2 code-effect">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full px-4 py-6 max-w-7xl mx-auto">
      <nav>
        <ul className="flex justify-end">
          {socialMenu.map(({ label, link }) => (
            <li key={link} className="uppercase">
              <a href={link} target="_blank" rel="noreferrer" className="font-mono px-2">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}