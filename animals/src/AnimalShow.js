import Bird from './svg/bird.svg';
import Cat from './svg/cat.svg';
import Cow from './svg/cow.svg';
import Dog from './svg/dog.svg';
import Gator from './svg/gator.svg';
import Horse from './svg/horse.svg';
import heart from './svg/heart.svg'
import {useState} from 'react';
import React from 'react';
import './AnimalShow.css'
const keyMap={
    bird:Bird,
    cat:Cat,
    cow:Cow,
    dog:Dog,
    gator:Gator,
    horse:Horse,
}
export default function AnimalShow({type}){
    const [click,setClick]= useState(0);

    const handleClick=()=>{
       setClick(click + 1);
    }
    return(
        <div className="animal-show" onClick={handleClick}>
            <img className='animal' alt="animal" src={keyMap[type]}/>
            <img 
            className='heart'
            alt="heart" 
            src={heart} 
            style={{width: 10+10*click + 'px'}}
            />
        </div>
    )
}