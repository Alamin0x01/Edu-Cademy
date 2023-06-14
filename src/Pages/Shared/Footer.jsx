import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-10 bg-sky-500 text-white">
      <div className="flex justify-between flex-col lg:flex-row items-center text-center lg:space-y-0 space-y-6">
        <div>
          <img
            className="h-12 ml-9"
            src="https://i.ibb.co/bQxpnbc/of-HD-N1-QIFy-I4-AAAAASUVORK5-CYII.jpg"
            alt=""
          />
          <p>
            Edu-Cademy
            <br />
            support@Edu-Cademy.com <br />
            +880 175634456
          </p>
        </div>
        <div>
          <span className="footer-title">Menu</span>
          <p>
            <Link className="hover:text-orange" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/Classes">
              Classes
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Teachers
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Dashboard
            </Link>
          </p>
          <p>
            <Link className="hover:text-orange" to="/">
              Blogs
            </Link>
          </p>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>
            South air, <br />
            Bonani Road <br />
            Dhaka
            <br />
            1st floor, Edu-Cademy
          </p>
        </div>
        <div>
          <span className="footer-title">Social Links</span>
          <div className="mb-4">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Edu-Cademy">
                <FaFacebook className="text-3xl cursor-pointer hover:text-orange" />
              </a>
              <a href="https://www.instagram.com/Edu-Cademy/">
                <FaInstagramSquare className="text-3xl cursor-pointer hover:text-orange" />
              </a>
              <a href="https://twitter.com/Edu-Cademy">
                <FaTwitter className="text-3xl cursor-pointer hover:text-orange" />
              </a>
              <a href="https://github.com/Edu-Cademy">
                <FaGithub className="text-3xl cursor-pointer hover:text-orange" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" items-center mt-8">
          <div className="border-t border-orange mx-auto mb-6"></div>
          <div className="text-center">
            <p>Copyright © Edu-Cademy - 2023 - All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
