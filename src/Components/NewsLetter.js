function NewsLetter() {
  return (
    <div className="bg-[#5959D9] p-24 rounded-lg">
      <p className="text-lg text-white text-left mb-10">
        Send me exclusive offers, unique gift ideas, and personalized <br />
        tips for shopping and selling on Commerce.
      </p>
      <div class="mb-4 relative">
        <input
          className="shadow appearance-none border rounded-2xl w-9/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-3.5"
          id="username"
          type="text"
          placeholder="Enter your Email"
        />
        <a
          href="#"
          className="bg-[#EB6D20] hover:bg-[#EB6D20] text-white py-2 px-4 rounded-2xl shadow absolute right-[130px] top-[5px] flex gap-2"
        >
          Subscribe
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default NewsLetter;
