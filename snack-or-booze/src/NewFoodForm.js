import React, {useState} from "react";

function NewFoodForm({ addFood }) {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({...formData});
  }

  // let food = items.find(food => food.id === id);
  // if (!food) return <Redirect to={cantFind} />;

  return (
    <form onSubmit={handleSubmit}>
      <p>Choose food type</p>
      <div id="dropdown">
      <select 
      name="type"
      onChange={handleChange}>
        <option value="snacks">Snacks</option>
        <option value="drinks">Drinks</option>
      </select>
      </div>

      <div id="input">
      <input
      name="name"
      placeholder= "food name here"
      onChange= {handleChange} /></div>
      <button>Add food</button>
    </form>
  );
}

export default NewFoodForm;
