const Contact = () => {
  return (
    <>
      <section id="contact" className="my-12 scroll-mt-16 p-6 [@media(min-aspect-ratio:3/2)]:min-h-[calc(100vh-68px)] [@media(min-aspect-ratio:1/2)]:min-h-[calc(100vh-68px)]">
        <h2 className="text-center mb-6 text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Contact Us
        </h2>
        <form
          action=""
          className="mx-auto max-w-4xl flex flex-col items-start text-2xl sm:text-3xl"
        >
          <label htmlFor="subject" className="text-slate-900 dark:text-slate-200">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            minLength="3"
            maxLength="60"
            placeholder="Your Subject"
            className="p-3 my-4 w-full rounded-xl border border-solid border-slate-900 bg-white text-2xl text-black sm:text-3xl dark:border-none"
          />
          <label htmlFor="message" className="text-slate-900 dark:text-slate-200">Message:</label>
          <textarea
            name="message"
            id="message"
            required
            cols="30"
            rows="10"
            placeholder="Your message"
            className="p-3 sm:text-3xl my-4 w-full rounded-xl border border-solid border-slate-900 bg-white text-2xl text-black dark:border-none"
          ></textarea>
          <button
            type="submit"
            className="text-2xl sm:text-3xl w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 hover:bg-teal-600 active:bg-teal-500 dark:border-none"
          >
            Submit
          </button>
        </form>
        <input type="text" />
      </section>
    </>
  );
};
export default Contact;
