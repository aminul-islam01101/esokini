import Link from "next/link";
import logo from "../../../public/assets/Logo-Mockup-(Black).png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} width={110} height={100} alt="logo" />
            </Link>
            <span className="text-black">we are coming soon..</span>
          </div>

          {/* Center Column - Navigation Links */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/shop" className="hover:text-blue-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Social Icons */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/esokinib"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-black hover:text-blue-500 text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-black hover:text-blue-500 text-xl" />
              </a>
              <a
                href="https://www.instagram.com/esokinibd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-black hover:text-blue-500 text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/esokini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-black hover:text-blue-500 text-xl" />
              </a>
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-sm mb-2">1234 E-commerce St, Suite 567</p>
              <p className="text-sm mb-4">City, Country, ZIP</p>
              <p className="text-sm mb-4">
                <a href="tel:+1234567890" className="hover:text-blue-500">
                  Call us: +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} E-Commerce Website. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
