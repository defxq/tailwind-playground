const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="widescreen mb-12 flex scroll-mt-40 flex-col-reverse items-center gap-8 p-6 sm:flex-row [@media(min-aspect-ratio:1/2)]:min-h-[calc(100vh-68px)] [@media(min-aspect-ratio:3/2)]:min-h-[calc(100vh-68px)]"
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
    </>
  );
};
export default Hero;
