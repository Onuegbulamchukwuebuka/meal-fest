import logo from "../../Asset/flair logo.png";
import { FaUserTie } from "react-icons/fa6";
import { GrLogin } from "react-icons/gr";

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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-slate-50">
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
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link to="/">
              <div className="flex w-32 h-9 flex-shrink-0 items-center">
                <img alt="Your Company" src={logo} className="h-auto w-auto" />
              </div>
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                <ul className="flex gap-2 my-1 ">
                  <Link
                    to="/"
                    className="flex flex-col item-center text-black text-center rounded-md font-bold hover:text-blue-700"
                  >
                    <p>HOME</p>
                  </Link>
                  <Link
                    to="/Order"
                    className="flex flex-col item-center text-black text-center rounded-md font-bold hover:text-blue-700"
                  >
                    <p>COLLECTION</p>
                  </Link>
                  <Link
                    to="/Blog"
                    className="flex flex-col item-center text-black text-center rounded-md font-bold hover:text-blue-700"
                  >
                    <p>BLOG</p>
                  </Link>
                  <Link
                    to="/About"
                    className="flex flex-col item-center text-black text-center rounded-md font-bold hover:text-blue-700"
                  >
                    <p>ABOUT</p>
                  </Link>
                  <Link
                    to="/Contact"
                    className="flex flex-col item-center text-black text-center rounded-md font-bold hover:text-blue-700"
                  >
                    <p>CONTACT</p>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            {/* <Link to="/Login">
              <div className=" flex h-8 w-15 rounded-lg bg-trasperent p-1 text-black font-semibold hover:text-slate-50 hover:bg-black ">
                Login <GrLogin className="h-8 pb-1.5" />
              </div>
            </Link> */}
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <div className="w-6 h-6 rounded-full text-black text-center bg-transperent item-center mx-auto my-auto ">
                    <FaUserTie className="w-6 h-6 text-center text-lg rounded-full" />
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/Login"
                    className="block px-4 py-2 text-sm text-blacl data-[focus]:bg-blue-700 data-[focus]:text-slate-50"
                  >
                    Log in
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/Signup"
                    className="block px-4 py-2 text-sm text-black data-[focus]:bg-blue-700 data-[focus]:text-slate-50"
                  >
                    Sign up
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/FAQ"
                    className="block px-4 py-2 text-sm text-black data-[focus]:bg-blue-700 data-[focus]:text-slate-50"
                  >
                    FAQ
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <ul className="flex flex-col gap-2 my-1 mx-3 ">
            <Link
              to="/"
              className="flex flex-col item-center text-black text-start rounded-md font-bold hover:text-blue-700"
            >
              <p>HOME</p>
            </Link>
            <Link
              to="/Shop"
              className="flex flex-col item-center text-black text-start rounded-md font-bold hover:text-blue-700"
            >
              <p>COLLECTION</p>
            </Link>
            <Link
              to="/Blog"
              className="flex flex-col item-center text-black text-start rounded-md font-bold hover:text-blue-700"
            >
              <p>BLOG</p>
            </Link>
            <Link
              to="/About"
              className="flex flex-col item-center text-black text-start rounded-md font-bold hover:text-blue-700"
            >
              <p>ABOUT</p>
            </Link>
            <Link
              to="/Contact"
              className="flex flex-col item-center text-black text-start rounded-md font-bold hover:text-blue-700"
            >
              <p>CONTACT</p>
            </Link>
          </ul>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
