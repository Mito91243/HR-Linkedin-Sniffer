export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          Find Your Next Professional Connection
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Discover meaningful connections for your chosen company.
        </p>
        <button className="mt-6 py-2 px-4 bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
          Get started
        </button>
      </div>
    </div>
  );
}
