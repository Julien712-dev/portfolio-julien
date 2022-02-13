import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { navMenu, siteMetadata, socialMenu } from '../config';

interface LayoutProps {
  pageTitle?: string
  backgroundIndex?: number
}

const Layout: FC<LayoutProps> = ({ children, pageTitle, backgroundIndex }) => (
  <>
    <Head>
      <title>{pageTitle || "Julien's portfolio"}</title>
      <meta name="description" content={siteMetadata.description} />
    </Head>

    <div className={`Layout page-bg-${backgroundIndex || 4}`}>
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;

function Header() {
  return (
    <header className="w-full px-4 py-6 font-mono flex justify-between max-w-7xl mx-auto">
      <Link href="/">
        <a className="react-effect text-glow">
          Home
        </a>
      </Link>
      <nav>
        <ul className="flex">
          {navMenu.map(({ label, path }) => (
            <li key={path} className="">
              <Link href={path}>
                <a className="px-2 code-effect text-glow">
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
