import React, {useState} from "react";

function NewFoodForm({ addFood }) {

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name] : value
    }))
    console.log({name, value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({...formData, id: formData.name});
    setFormData({});
    // reset empties input field
    e.target.reset();
  }

  // let food = items.find(food => food.id === id);
  // if (!food) return <Redirect to={cantFind} />;

  return (
    <form onSubmit={handleSubmit}>
      <div id="dropdown">
      <select 
      name="type"
      onChange={handleChange}>
        <option value="snacks" >Snacks</option>
        <option value="drinks" selected>Drinks</option>
      </select>
      </div>

      <div id="foodname">
      <input
      name="name"
      placeholder= "food name here"
      onChange= {handleChange} /></div>

      <div id="description">
      <input
      name="description"
      placeholder= "description"
      onChange= {handleChange} /></div>

      <div id="recipe">
      <input
      name="recipe"
      placeholder= "recipe here"
      onChange= {handleChange} /></div>

      <div id="serve">
      <input
      name="serve"
      placeholder= "serve info"
      onChange= {handleChange} /></div>


      <button>Add food</button>
    </form>
  );
}

export default NewFoodForm;
