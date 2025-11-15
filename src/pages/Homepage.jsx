import { Link } from "react-router";

const Homepage = () => {
  return (
    <main className="mx-auto max-w-4xl p-4 text-white xl:max-w-5xl">
      <section
        id="hero"
        className="mb-12 flex flex-col-reverse items-center gap-8 p-6 sm:flex-row scroll-mt-40"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 sm:text-left sm:text-5xl dark:text-white">
            Turn your reality into a
            <span className="text-indigo-700 dark:text-indigo-300"> Dream</span>
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-center dark:text-slate-400">
            We're building reality in a dream world. We turn your ideas into a
            reality in a dream world. From making sandwich and beyond...
          </p>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 sm:text-center dark:text-slate-400">
            Thanks to Rabbits.co
          </p>
        </article>
        <img
          src="/assets/courageThedog.png"
          alt="image-holder"
          className="w-1/2 min-w-50"
        />
      </section>
      <hr className="mx-auto w-1/2 border-t border-black dark:border-white" />

      <section id="rabbit" className="my-12 p-6 scroll-mt-20">
        <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Our Membership plans
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
            <img src="/assets/ctd2.png" alt="Explorer" className="mb-6 w-1/2" />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Explorer
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block dark:text-slate-400">
              $
            </p>
            <p className="mt-2 text-center text-2xl text-slate-50 sm:hidden dark:text-slate-400">
              Affordable Exploration
            </p>
          </li>

          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
            <img
              src="/assets/lustrous.png"
              alt="Adventurer"
              className="mb-6 w-4/6"
            />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Adventurer
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block dark:text-slate-400">
              $$
            </p>
            <p className="mt-2 text-center text-2xl text-slate-50 sm:hidden dark:text-slate-400">
              Best selling Characters
            </p>
          </li>

          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl sm:w-5/6 dark:border-gray-100 dark:bg-black">
            <img src="/assets/silh.png" alt="Infinity" className="mb-6 w-1/2" />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Infinity
            </h3>
            <p className="mt-2 hidden text-center text-3xl text-slate-500 sm:block dark:text-slate-400">
              $$$
            </p>
            <p className="mt-2 text-center text-2xl text-slate-50 sm:hidden dark:text-slate-400">
              Luxury Life
            </p>
          </li>
        </ul>
      </section>

      <hr className="mx-auto w-1/2 border-t border-black dark:border-white" />

      <section id="testimonials" className="my-12 p-6">
        <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Testimonials
        </h2>
      </section>

      <hr className="mx-auto w-1/2 border-t border-black dark:border-white" />

      <section id="contact" className="my-12 p-6">
        <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Contact Us
        </h2>
      </section>
    </main>
  );
};
export default Homepage;
