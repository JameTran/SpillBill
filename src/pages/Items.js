import Header from "../components/Header";
import Items from "../components/Items"
import { useState } from "react";


const App = () => {
  const [items, setItems] = useState(
    [{
        id:3,
        text: "Large Fries",
        participants: "Logan · Syed · Jame",
        price: 10
    },
    {
        id:4,
        text: "Double Cheeseburger",
        participants: "Ayman · Harsh",
        price: 14
    },
  ])

  const deleteTask = (id) => { 
    setItems(items.filter((item) => item.id !== id))
  }

  const eventPage = (id) => {
    console.log("Path to events's page", id)
  }

  return (
    <div className="container">
      <Header 
        title = {"Details"}
      />
      {items.length > 0 ? (<Items items = {items} onDelete = {deleteTask} onClick = {eventPage} />) : "No Events"}
    </div>
  );
}

export default App;