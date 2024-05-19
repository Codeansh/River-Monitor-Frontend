import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import img from "next/img";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Namami Gange",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.min.js"></Script>
        <Script type="text/javascript" src="/static/script.js"></Script>

      </head>

      <body className="font-sans no-scrollbar">
        <nav className="fixed top-0 w-full  z-99999999 bg-green-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="{{ .Site.Params.homepage }}/" className="flex items-center">
              <img src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcRoSr9d2Dbs4sIpO2Ti01R1B5ocSD6KXjlyHAeXGQXHzA&s"
                className="h-6 mr-3 sm:h-9" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a href="/"
                    className="font-bold text-base block py-2 pl-3 pr-4 text-gray-500 bg-green-700 rounded md:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white"
                    aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/about"
                    className="font-bold text-base block py-2 pl-3 pr-4 text-gray-500 bg-green-700 rounded md:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white">About</a>
                </li>
                <li>
                  <a href="/rivers"
                    className="font-bold text-base block py-2 pl-3 pr-4 text-gray-500 bg-green-700 rounded md:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white">Rivers</a>
                </li>
                <li>
                  <a href="/updates"
                    className="font-bold text-base block py-2 pl-3 pr-4 text-gray-500 bg-green-700 rounded md:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white">Updates</a>
                </li>
                <li>
                  <a href="/contact"
                    className="font-bold text-base block py-2 pl-3 pr-4 text-gray-500 bg-green-700 rounded md:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></Script>

        {children}

        <div className="fixed bottom-0 left-0 w-full">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>

        <footer
          className="fixed bottom-0 w-full bg-green-50 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800 text-white text-center py-4 mt-8">
          <p>&copy; 2023 River Monitoring Network</p>
        </footer>
      </body>
    </html>
  );
}
