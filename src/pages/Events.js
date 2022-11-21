import Header from "../components/Header";
import Tasks from "../components/Tasks"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './Events.css'


const App = () => {
  const [tasks, setTasks] = useState(
    [{
        id:3,
        text: "Escape Room",
        day: "Feb 3rd,2022",
        price: 50
    },
    {
        id:4,
        text: "Nusr-et Steakhouse",
        day: "Feb 23rd,2022",
        price: 1150
    },
  ])

  const deleteTask = (id) => { 
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const navigate = useNavigate();
  function eventPage(id) {
    console.log("Path to events's page", id)
    navigate("/events/eventdetails")
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onClick = {eventPage} />) : "No Events"}
    </div>
  );
}

export default App;