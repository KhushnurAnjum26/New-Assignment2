const ResolvedList = ({ resolved }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border mt-6">
      <h2 className="font-semibold text-gray-700 mb-4">
        Resolved Task
      </h2>

      {resolved.length === 0 ? (
        <p className="text-sm text-gray-400">
          No resolved tasks yet.
        </p>
      ) : (
        resolved.map((ticket) => (
          <div
            key={ticket.id}
            className="text-sm text-gray-600 border-b py-2"
          >
            {ticket.title}
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedList;