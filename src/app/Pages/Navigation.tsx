// components/Navbar.js
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-opacity-0 p-4 md:pt-8 md:pb-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link
          href="/"
          className="nav-link text-white text-xl font-bold md:mr-4 mb-4 md:mb-0"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="nav-link text-white text-xl font-bold md:mr-4 mb-4 md:mb-0"
        >
          About
        </Link>

        <Link
          href="/experience"
          className="nav-link text-white text-xl font-bold md:mr-4 mb-4 md:mb-0"
        >
          Experience
        </Link>

        <Link
          href="/certificates"
          className="nav-link text-white text-xl font-bold md:mr-4 mb-4 md:mb-0"
        >
          Certificates
        </Link>

        <Link href="/contact" className="nav-link text-white text-xl font-bold">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
