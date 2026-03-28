const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 grid md:grid-cols-2 gap-6">
      
      {/* In Progress Card */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl p-8 text-white shadow-lg">
        <p className="text-sm opacity-80">In-Progress</p>
        <h2 className="text-4xl font-bold mt-2">{inProgressCount}</h2>
      </div>

      {/* Resolved Card */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white shadow-lg">
        <p className="text-sm opacity-80">Resolved</p>
        <h2 className="text-4xl font-bold mt-2">{resolvedCount}</h2>
      </div>

    </div>
  );
};

export default Banner;