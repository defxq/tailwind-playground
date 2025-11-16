const Footer = () => {
  return (
    <>
      <footer className="bg-teal-700 text-xl text-white">
        <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
            <address className="max-w-3xl">
                <h2>Lorem ipsum dolor sit amet</h2>
                555 Astro Way.<br />
                Address: Lorem ipsum dolo<br />
                Email: Lorem ipsum dolor <br />
                Phone: Lorem ipsum dolor 
            </address>
            <nav className="underline hidden md:flex flex-col gap-2" aria-label="footer">
                <a href="#rabbit" className="hover:opacity-80">Memberships</a>
                <a href="#testimonials" className="hover:opacity-80">Testimonials</a>
                <a href="#contact" className="hover:opacity-80">Contact Us</a>
            </nav>
            <div className="flex flex-col sm:gap-2">
                <p className= "text-right">
                    Copyright &copy; <span id="year">2025</span>
                </p>
                <p className="text-right">All rights reserved</p>
            </div>
        </section>
      </footer>
    </>
  );
};
export default Footer;
