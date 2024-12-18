"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);

  const handleLanguageSelect = (language: string) => {
    alert(`Idioma seleccionado: ${language}`);
    setLanguageMenuOpen(false); // Cierra el menú después de seleccionar
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Contrapiso
          </span>
        </Link>

        {/* Idiomas */}
        <div className="relative flex items-center md:order-2">
          <button
            type="button"
            onClick={() => setLanguageMenuOpen(!isLanguageMenuOpen)}
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            aria-expanded={isLanguageMenuOpen}
          >
            <svg
              className="w-5 h-5 rounded-full me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <path
                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                />
              </g>
            </svg>
            English (US)
          </button>

          {/* Dropdown para selección de idiomas */}
          {isLanguageMenuOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 z-50"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleLanguageSelect("Inglés (US)")}
                  >
                    English (US)
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleLanguageSelect("Español")}
                  >
                    Español
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleLanguageSelect("Francés")}
                  >
                    Français
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Menú de navegación */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <Link href="/" className="text-gray-900 dark:text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className="text-gray-900 dark:text-white hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/artistas" className="text-gray-900 dark:text-white hover:underline">
                Artistas
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-900 dark:text-white hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-gray-900 dark:text-white hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
