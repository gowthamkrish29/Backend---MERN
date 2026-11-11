
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "MY DAY", path: "/my-day" },
    { name: "MEMORIES", path: "/memories" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-xl md:px-16">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-widest">
          D<span className="text-orange-500">.</span>26
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-xs font-bold tracking-widest transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button - No Icons */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-bold tracking-widest text-orange-500 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="mt-6 flex flex-col gap-6 border-t border-white/10 pt-5 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-bold tracking-widest ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
