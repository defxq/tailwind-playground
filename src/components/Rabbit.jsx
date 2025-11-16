const Rabbit = () => {
  return (
    <>
      <section id="rabbit" className="my-12 scroll-mt-20 p-6 [@media(min-aspect-ratio:3/2)]:min-h-[calc(100vh-68px)] [@media(min-aspect-ratio:1/2)]:min-h-[calc(100vh-68px)]">
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
            <p className="mt-2 text-center text-2xl text-slate-500 sm:hidden dark:text-slate-400">
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
            <p className="mt-2 text-center text-2xl text-slate-500 sm:hidden dark:text-slate-400">
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
            <p className="mt-2 text-center text-2xl text-slate-500 sm:hidden dark:text-slate-400">
              Luxury Life
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Rabbit;
