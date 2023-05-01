import { useSelector } from "react-redux";

function CarValue(){
 
  const carCost= useSelector(({cars: {searchCar, carList}})=>{
    return carList.filter((car)=> car.name.toLowerCase().includes(searchCar.toLowerCase())).reduce((accumulator,car)=>accumulator + car.cost,0);
  });

    return <div className="car-value">Total Value: ${carCost}</div>;
};

export default CarValue;