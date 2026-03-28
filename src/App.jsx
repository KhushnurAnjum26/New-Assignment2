import { useState } from "react";
import ticketsData from "./data/tickets.js";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import TicketCard from "./components/TicketCard.jsx";
import TaskStatus from "./components/TaskStatus.jsx";
import ResolvedList from "./components/ResolvedList.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast.success("Ticket added to In Progress");
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.info("Ticket marked as Resolved");
  };

  return (
    <>
      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

     <div className="max-w-7xl mx-auto px-6 mt-10 grid md:grid-cols-3 gap-8">
  
  
  <div className="md:col-span-2">
    <h2 className="font-semibold text-gray-700 mb-4">
      Customer Tickets
    </h2>

    <div className="grid md:grid-cols-2 gap-4">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onClick={() => handleAddToProgress(ticket)}
        />
      ))}
    </div>
  </div>

 
  <div>
    <TaskStatus
      inProgress={inProgress}
      onComplete={handleComplete}
    />
    <ResolvedList resolved={resolved} />
  </div>
</div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;