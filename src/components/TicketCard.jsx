const TicketCard = ({ ticket, onClick }) => {
  const priorityColor =
    ticket.priority === "High"
      ? "text-red-500"
      : ticket.priority === "Medium"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md cursor-pointer transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800 text-sm">
          {ticket.title}
        </h3>

        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          {ticket.status}
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-3">
        {ticket.description}
      </p>

      <div className="flex justify-between text-xs text-gray-400">
        <span className={priorityColor}>
          {ticket.priority} Priority
        </span>

        <span>{ticket.createdAt}</span>
      </div>
    </div>
  );
};

export default TicketCard;