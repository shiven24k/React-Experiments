import React,{useState} from "react";

function ObjInState(){
  
    const[car,setCar] = useState({year:2025,
                                  make:"Ford",
                                  model:"mustang"}) 
    const [ foods,setFoods] = useState(["Apple","Banana","Orange"]);
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");

    function handleYearChange(event){
        setCar(c=>({...c, year: event.target.value}))
    }
    function handleMakeChange(event){
        setCar(c=>({...c, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c=>({...c, model: event.target.value}))
    }
    
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f,newFood]);
    }
    function handleRemoveFood(index){
        
        setFoods(foods.filter((_, i)=>i!==index)) //the current element (represented by _ since it's not used) and the current index (i).
        //The filter method creates a new array excluding the item at index 1.
    }

    function handleAddCar(){
        const newCar = {year:carYear,
                        make: carMake,
                        model: carModel
        }
        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("")
        setCarModel("")
    }
    function handleRemoveCar(index){
       setCars(cars.filter((_,i)=>i!==index));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);

    }
    function handleMakeChange(event){
        setCarMake(event.target.value);

    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }
    return(<>
        <div>
        <p>Your facourite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/>
        <input type="text" value={car.make} onChange={handleMakeChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
        {/* list */}
        <div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food,index)=>
            <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
        </div>
        <div>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car, index)=>
                  <li key={index} onClick={()=>handleRemoveCar(index)}>
                      {car.year}{car.make}{car.model}
                  </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange}/><br/>
            <input type="text" value={carModel} onChange={handleModelChange}/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    </>)

}
export default ObjInState;