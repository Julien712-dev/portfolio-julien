import Head from 'next/head';
import { siteMetadata, socialMenu } from '../config';

function Contact() {
  return (
    <>
      <Head>
        <title>Say hello to Julien</title>
      </Head>

      <div className="m-auto max-w-4xl mx-auto p-4">
        <h1 className="title h1 mb-4">
          <span className="pb-3 inline-block">
            🤙
          </span>
          <br />
          Say hello ―
        </h1>
        <h2 className="subtitle h3 mb-4">
          Tell me about Rust, Typescript, Solidity or crypto-currency.
        </h2>
        <ul className="h3 mb-4">
          <li>
            <a href={`mailto:${siteMetadata.mail}`}>
              {siteMetadata.mail}
            </a>
          </li>
          {socialMenu.map(({ label, link }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Contact;