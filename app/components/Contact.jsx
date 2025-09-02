"use client";

export default function Contact() {
  const inputClasses =
    "h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic will go here.
    alert("Form submitted! (placeholder)");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-sm mt-24"
    >
      <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
      <h1 className="text-4xl font-semibold text-slate-700 pb-4">
        Get in touch with us
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        Lorem Ipsum has been the industrys standard dummy text.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <label className="text-black/70" htmlFor="your-name">
            Your Name
          </label>
          <input
            id="your-name"
            name="name"
            type="text"
            className={inputClasses}
            required
          />
        </div>
        <div className="w-full">
          <label className="text-black/70" htmlFor="your-email">
            Your Email
          </label>
          <input
            id="your-email"
            name="email"
            type="email"
            className={inputClasses}
            required
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-black/70" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-5 w-56 h-12 px-4 rounded-full font-semibold text-white shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-500 hover:to-orange-500 hover:scale-105 active:scale-95 transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
