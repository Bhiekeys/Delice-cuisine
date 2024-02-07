import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              placerat eleifend velit sed tempor.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-sm">
              <li>123 Street, City</li>
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-sm">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 rounded-md py-2 px-4 text-sm text-gray-200 w-full"
              />
              <button className="bg-gray-600 text-gray-200 py-2 px-4 mt-2 rounded-md text-sm hover:bg-gray-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; 2023 Delice Cuisine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
