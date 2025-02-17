import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={logo} alt="Xtreme Fitness" className="w-10 h-10 object-contain" /> */}
          <span className="text-xl pl-24 font-bold text-white">
            COMMANDO FITNESS GYM
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            "Home",
            "About",
            "Services",
            "Trainers",
            "Pricing",
            "Coming Soon",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium ${
                item === "Home"
                  ? "text-[#22c55e]"
                  : "text-white hover:text-[#22c55e]"
              } transition-colors`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="border border-[#22c55e] text-white py-2 px-6 rounded-full transition 
                     bg-transparent hover:bg-[#22c55e] hover:text-black"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
