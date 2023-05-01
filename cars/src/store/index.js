import { configureStore } from "@reduxjs/toolkit";
import {changeSearch, addCar, removeCar,carsReducer} from './slices/carsSlice';
import {changeName, changeCost, formReducer} from './slices/formSlice';

const store= configureStore({
    reducer:{
        cars: carsReducer,
        form: formReducer,
    },
});
export {changeSearch, addCar, removeCar,changeName, changeCost, store};