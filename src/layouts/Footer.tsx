import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="py-[3rem] text-center">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        Frontend Mentor
      </a>
      .
      <br />
      Coded by{' '}
      <a href="https://github.com/szczepanieceryk" className="text-orange-500">
        Eryk
      </a>
      .
    </footer>
  );
};

export default Footer;
