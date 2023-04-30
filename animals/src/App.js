import {useState} from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal(){
const animals= ["dog","cat","cow","bird","gator","horse"];
return animals[Math.floor(Math.random()* animals.length)];
}


function App() {
  const [animals, setAnimals]= useState([]); 
  const handleClick=()=>{
    setAnimals([...animals,getRandomAnimal()]);
  }
  const mapList=animals.map((item,index)=>{
    return <div key={index}><AnimalShow type={item}/></div>
  });
  
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animals</button>
      <div className="animal-list">{mapList}</div>
      
    </div>
  );
}

export default App;
