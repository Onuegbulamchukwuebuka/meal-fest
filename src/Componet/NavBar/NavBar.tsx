import mlogo from "../../Asset/mlogo (1).png";
import { BrowserRouter } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NarBar() {
  return (
    <Disclosure as="nav" className="bg-red-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-red-950 hover:bg-red-950 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-950">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-evenly sm:items-stretch sm:justify-start">
            <div>
              <div className="flex justify-center gap-24 space-x-1 mx-0">
                <div className="flex  flex-shrink-0 items-center">
                  <Link to={"/"}>
                    <img
                      alt="Your Company"
                      src={mlogo}
                      className="h-12 w-36 object-cover"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex justify-center w-64 gap-1 my-3 ">
                    <Link to={"/"}>
                      <li className="bg-red-950 text-yellow-300 h-10 w-20 text-l text-center py-2 rounded-md font-bold">
                        HOME
                      </li>
                    </Link>
                    <Link to={"/Categories"}>
                      <li className=" text-red-950 h-10 w-28 text-sm text-center py-2 rounded-md font-bold hover:bg-red-950 hover:text-yellow-300">
                        CATEGORIES
                      </li>
                    </Link>
                    <Link to={"/About"}>
                      <li className=" text-red-950 h-10 w-28 text-sm text-center py-2 rounded-md font-bold hover:bg-red-950 hover:text-yellow-300">
                        ABOUT
                      </li>
                    </Link>
                    <Link to={"/Contact"}>
                      <li className=" text-red-950 h-10 w-28 text-sm text-center py-2 rounded-md font-bold hover:bg-red-950 hover:text-yellow-300">
                        CONTACT
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="  right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className=" p-1 text-red-950">
              <FaCartPlus aria-hidden="true" className="h-6 w-6" />
            </button>
            <button>
              <RiHeartAddFill className="h-6 w-6 text-sm rounded-full text-red-950" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="flex justify-center text-center rounded-full ">
                  <button>
                    <FaUserTie className="h-6 w-6 text-sm rounded-full text-red-950" />
                  </button>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-red-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/UserProfile"
                    className="block px-4 py-2 text-sm text-red-950 data-[focus]:bg-yellow-300"
                  >
                    User Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/Login"
                    className="block px-4 py-2 text-sm text-red-950 data-[focus]:bg-yellow-300"
                  >
                    Login
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/FAQ"
                    className="block px-4 py-2 text-sm text-red-950 data-[focus]:bg-yellow-300"
                  >
                    FAQ
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <ul className="flex flex-col justify-start w-64 gap-1 my-3 ">
            <Link to={"/"}>
              <li className="bg-red-950 text-yellow-300 h-10 mw-auto px-2 text-start text-l py-2 rounded-md font-bold">
                HOME
              </li>
            </Link>
            <Link to={"/Categories"}>
              <li className=" text-red-950 h-10  text-sm mw-auto px-2 text-start py-2 rounded-md font-bold hover:bg-red-950 hover:text-yellow-300">
                CATEGORIES
              </li>
            </Link>
            <Link to={"/About"}>
              <li className=" text-red-950 h-10  text-sm mw-auto px-2 text-start py-2 rounded-md font-bold hover:bg-red-950 hover:text-yellow-300">
                ABOUT
              </li>
            </Link>
            <Link to={"/Contact"}>
              <li className=" text-red-950 h-10  text-sm mw-auto px-2 text-start py-2 rounded-md font-bold hover:bg-red-950 hover:text-yellow-300">
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

// import React from "react";

// const NavBar = () => {
//   return <div>NavBar NavBar</div>;
// };

// export default NavBar;
