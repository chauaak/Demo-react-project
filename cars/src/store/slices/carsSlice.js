import { createSlice, nanoid} from '@reduxjs/toolkit';

const carsSlice= createSlice({
    name:'cars',
    initialState:{
        searchCar: '',
        carList: [],
    },

    reducers:{
        changeSearch(state, action){
            state.searchCar= action.payload;
        },
        addCar(state, action){
            state.carList.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        
        removeCar(state,action){
            const updated= state.carList.filter((car)=>{
                return car.id !== action.payload;
            })
            state.carList= updated;
        },
    },
    
});


export const {changeSearch, addCar, removeCar}= carsSlice.actions;
export const carsReducer= carsSlice.reducer;