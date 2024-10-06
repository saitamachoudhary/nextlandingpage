import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-6">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Left Section - Copyright and Terms */}
          <div className="text-center lg:text-left">
            <p className="text-sm">
              © BOOM Events 2024
              <a href="/terms" className="ml-4  hover:underline">
                Terms & Conditions
              </a>
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
            {['Contact', 'Blog', 'Podcast', 'Pricing', 'Brand logos', 'FAQ', 'More'].map((item, index) => (
              <a key={index} href={`/${item.toLowerCase()}`} className="text-gray-800 hover:text-text-gray-400">
                {item}
              </a>
            ))}
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-gray-800 hover:bg-gray-200"
              aria-label="Facebook"
            >
              <FontAwesomeIcon className='w-4' icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-gray-800 hover:bg-gray-200"
              aria-label="Instagram"
            >
              <FontAwesomeIcon className='w-4' icon={faInstagram} />
            </a>
            <a
              href="https://x.com"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-gray-800 hover:bg-gray-200"
              aria-label="X"
            >
              <FontAwesomeIcon className='w-4' icon={faXTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-gray-800 hover:bg-gray-200"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className='w-4' icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
