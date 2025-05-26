import { Sun, Moon, X, Menu } from "lucide-react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import mainLogoL from "../assets/Main_Logo_1.png";
import mainLogoD from "../assets/Main_Logo_2.png";


Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const headerClass = `w-full border sticky-top ${
    darkMode ? "bg-dark text-light" : "bg-light text-dark"
  }`;

  const linkClass = `fs-5 text-decoration-none ${
    darkMode ? "bg-dark text-light" : "bg-light text-dark"
  }`;
const cardClass = `card p-3 d-flex flex-column justify-content-center align-items-center h-100 ${
  darkMode
    ? "bg-dark text-light border border-light"
    : "bg-light text-dark border border-dark"
}`;

const mainLogo = darkMode ? mainLogoD : mainLogoL;

  return (
    <>
      {!isMenuOpen && (
        <header className={headerClass} style={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <div className="container py-4">
            <nav className="d-flex align-items-center justify-content-between">
              {/* <h1 className="text-2xl fw-ligh text-primary"           
              style={{fontFamily: "Lucida Handwriting"}}>Hewan</h1> */}
              <img src={mainLogo} alt="Main Logo" style={{ height: "50px" }} />
              <div className="d-flex gap-5 d-none d-md-flex">
                {["home","about" ,"skills","projects", "contact"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(id);
                    }}
                    className={linkClass}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="border-0 bg-transparent"
                >
                  {darkMode ? <Sun size={30} color="white" /> : <Moon size={30} />}
                </button>
              </div>

              <button
                className="d-md-none border-0 bg-transparent"
                onClick={() => setIsMenuOpen(true)}
              >
                {darkMode ? <Menu size={30} color="white" /> : <Menu size={30} />}
              </button>
            </nav>
          </div>
        </header>
      )}

      {isMenuOpen && (
        <header className={headerClass} style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <div className="container py-4 px-5">
          <div className="d-flex justify-content-end">
            <button className="border-0 bg-transparent" onClick={() => setIsMenuOpen(false)}>
              {darkMode ? <X size={30} color="white" /> : <X size={30} />}
            </button>
          </div>
          <div className="d-flex flex-column gap-3 mt-3">
            {["home","about" ,"skills","projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={linkClass}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <div className="d-flex justify-content-start">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="border-0 bg-transparent"
              >
                {darkMode ? <Sun size={30} color="white" /> : <Moon size={30} />}
              </button>
            </div>
          </div>
        </div>
        </header>
      )}
    </>
  );
}
