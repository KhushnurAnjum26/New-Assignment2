const TaskStatus = ({ inProgress, onComplete }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <h2 className="font-semibold text-gray-700 mb-4">
        Task Status
      </h2>

      {inProgress.length === 0 ? (
        <p className="text-sm text-gray-400">
          No resolved tasks yet.
        </p>
      ) : (
        inProgress.map((ticket) => (
          <div
            key={ticket.id}
            className="mb-4 border-b pb-3"
          >
            <p className="text-sm font-medium text-gray-700 mb-2">
              {ticket.title}
            </p>

            <button
              onClick={() => onComplete(ticket)}
              className="w-full bg-green-600 text-white py-1.5 text-sm rounded-md hover:bg-green-700"
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;