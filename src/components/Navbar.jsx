const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-gray-800">
          CS — Ticket System
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;