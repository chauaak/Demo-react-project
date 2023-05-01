import {useSelector, useDispatch} from 'react-redux';
import {removeCar} from '../store';


function CarList(){
    let dispatch= useDispatch();

    const {cars, name}= useSelector(({ form, cars:{searchCar, carList}})=>{
        const filteredCars= carList.filter((car) => car.name.toLowerCase().includes(searchCar.toLowerCase())
        );
        return{
            cars: filteredCars,
            name: form.name
        };
        });

    const handleButton=(car)=>{
     dispatch(removeCar(car.id));
    };

     
    const renderedCars= cars.map((car) => {
        const bold= name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
        <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>{car.name}- ${car.cost} </p>
        <button className='button is-danger' onClick={()=>handleButton(car)}>Delete</button>

        </div>
        );
    });

    return <div className='car-list'>{renderedCars}
    <hr />
    </div>

};

export default CarList;