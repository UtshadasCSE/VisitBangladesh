import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import appStoreIcon from "../../../assets/icons/appstore.svg";
import googlePlay from "../../../assets/icons/googleplay.svg";

const Footer = () => {
  return (
    <div className="">
      <hr />
      <footer className="pt-8 font-popins bg-white  ">
        <div className="container max-sm:w-11/12 mx-auto flex justify-between gap-3 max-sm:flex max-sm:flex-col">
          <div className=" flex max-sm:flex-col justify-between gap-10">
            <div>
              <ul className="flex flex-col gap-2">
                <li className="font-semibold">Related Sites</li>
                <li className="hover:underline cursor-pointer">
                  Bangladesh Tourism Board
                </li>
                <li className="hover:underline cursor-pointer">
                  Business Events
                </li>
                <li className="hover:underline cursor-pointer">
                  Visit Southeast Asia
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li className="font-semibold">Contact Us</li>
                <li className="hover:underline cursor-pointer">Call Us</li>
                <li className="hover:underline cursor-pointer">Write to Us</li>
                <li className="hover:underline cursor-pointer">
                  Bangladesh Visitor Center
                </li>
              </ul>
            </div>
          </div>
          <div className="max-sm:py-5">
            <h3 className="font-semibold">Connect with Us</h3>
            <div className="flex gap-3 py-2 text-4xl">
              <FaSquareFacebook className="cursor-pointer" />
              <BsInstagram className="cursor-pointer" />
              <FaPinterestSquare className="cursor-pointer" />
            </div>
            <h3 className="font-semibold">Download Our App</h3>
            <div className="flex gap-3 py-2">
              <img src={appStoreIcon} alt="" />
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </div>

        <div className="py-5 text-white"></div>
        <div className="bg-[#323232] py-4 text-white">
          <div className="container mx-auto flex max-sm:flex-col justify-between">
            <ul className="flex max-sm:flex-col items-center gap-4">
              <li className="cursor-pointer hover:underline">Terms of Use</li>
              <li className="cursor-pointer hover:underline">Privacy</li>
              <li className="cursor-pointer hover:underline">Cookie Policy</li>
              <li className="cursor-pointer hover:underline">
                Report Vulnerability
              </li>
            </ul>
            <div>
              <p className="max-sm:text-center max-sm:py-4">
                Copyright © {new Date().getFullYear()} Bangladesh Tourism Board
                <br /> Last Updated 22 Jul 2024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
