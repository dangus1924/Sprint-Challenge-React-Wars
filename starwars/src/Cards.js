import React from 'react';
import Character from './Character'

const Cards = (props) => {
    
    return(
        
        <div>            
            <Character height={props.height} name={props.name} 
            birth_year={props.birth_year} eye_color={props.eye_color} gender={props.gender} 
            hair_color={props.hair_color} skin_color={props.skin_color} />
               
        </div>
    )
}

export default Cards