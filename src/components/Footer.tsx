import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 rounded-t-lg bg-gray-800 p-6 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <h4 className="mb-2 text-xl font-bold">About Us</h4>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan metus ac tellus vehicula, at vulputate nunc pulvinar.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-xl font-bold">Quick Links</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Movies
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-xl font-bold">Follow Us</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500">
          &copy; 2024 Your Movie App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
