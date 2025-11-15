import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-10 bg-teal-700 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4 xl:max-w-5xl">
          <h1 className="text-3xl font-medium">
            <a href="#" className="hover:opacity-70">❄︎ Rabbits ❄︎</a>
          </h1>
          <div>
            <button
              id="mobile-open-button"
              className="text-5xl shadow-inner focus:outline-none sm:hidden"
            >
              &#9776;
            </button>
            <nav
              className="hidden space-x-15 text-xl sm:block"
              aria-label="main"
            >
              <a href="#rabbit" className="hover:opacity-70">
                Rabbit
              </a>
              <a href="#testimonials" className="hover:opacity-70">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-70">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};
export default Header;
