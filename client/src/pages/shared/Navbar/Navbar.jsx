import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/icons/visitbd_icon.png";
import { FaNewspaper } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { MdFestival } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiAddCircleFill } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";
import { FaBuilding } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="fixed z-30 navbar px-7 max-sm:px-2 shadow-lg font-popins backdrop-blur-sm bg-white/30 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-max p-2 shadow"
              >
                <li>
                  <details>
                    <summary className="hover:border-b-4 border-red-500">
                      What's Happening
                    </summary>
                    <ul className="p-2 w-max flex backdrop-blur-sm bg-white/30">
                      <div>
                        <li>
                          <NavLink
                            to={"/events"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <MdEmojiEvents />
                            Events
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={"/news"}>
                            <FaNewspaper />
                            News
                          </NavLink>
                        </li>
                      </div>
                      <div>
                        <li>
                          <NavLink
                            to={"/blogs"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <MdFestival />
                            Upcomming News
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <FaEarthAmericas />
                            Why Bangladesh
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="hover:border-b-4 border-red-500">
                      Neighbourhoods
                    </summary>
                    <ul className="p-2 w-max flex backdrop-blur-sm bg-white/30">
                      <div>
                        <li>
                          <NavLink
                            to={"/relations"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <LiaConnectdevelop />
                            Relations
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"/india"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <FaBuilding />
                            Delhi
                          </NavLink>
                        </li>
                      </div>
                      <div>
                        <li>
                          <NavLink
                            to={"/nepal"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <FaBuilding />
                            Kathmandu
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to={"/china"}
                            className={({ isActive }) =>
                              isActive ? "border-b-4 border-red-500" : ""
                            }
                          >
                            <FaBuilding />
                            Beijing
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink
                    to={"/travel-tips"}
                    className={({ isActive }) =>
                      isActive ? "border-b-4 border-red-500" : ""
                    }
                  >
                    Travel Tips
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"blogs"}
                    className={({ isActive }) =>
                      isActive ? "border-b-4 border-red-500" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn btn-ghost text-xl w-28 flex justify-center h-full"
            >
              <img src={logo} alt="Visit BD logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <details>
                  <summary className="hover:border-b-4 border-red-500">
                    What's Happening
                  </summary>
                  <ul className="p-2 w-max flex backdrop-blur-sm bg-white/30">
                    <div>
                      <li>
                        <NavLink
                          to={"/events"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <MdEmojiEvents />
                          Events
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/news"}>
                          <FaNewspaper />
                          News
                        </NavLink>
                      </li>
                    </div>
                    <div>
                      <li>
                        <NavLink
                          to={"/blogs"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <MdFestival />
                          Upcomming News
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/about"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <FaEarthAmericas />
                          Why Bangladesh
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="hover:border-b-4 border-red-500">
                    Neighbourhoods
                  </summary>
                  <ul className="p-2 w-max flex backdrop-blur-sm bg-white/30">
                    <div>
                      <li>
                        <NavLink
                          to={"/relations"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <LiaConnectdevelop />
                          Relations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/india"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <FaBuilding />
                          Delhi
                        </NavLink>
                      </li>
                    </div>
                    <div>
                      <li>
                        <NavLink
                          to={"/nepal"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <FaBuilding />
                          Kathmandu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={"/china"}
                          className={({ isActive }) =>
                            isActive ? "border-b-4 border-red-500" : ""
                          }
                        >
                          <FaBuilding />
                          Beijing
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink
                  to={"/travel-tips"}
                  className={({ isActive }) =>
                    isActive ? "border-b-4 border-red-500" : ""
                  }
                >
                  Travel Tips
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"blogs"}
                  className={({ isActive }) =>
                    isActive ? "border-b-4 border-red-500" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to={"/signin"}
              className="btn border-2 border-[#e12729] bg-[#007f4e] text-white max-sm:text-xs"
            >
              <RiAddCircleFill />
              Add Beauties
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
