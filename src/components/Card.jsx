import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Card({id, title, fields}) {
    

    const {store, dispatch} = useGlobalReducer()

    const [favIcon, setFavIcon] = useState('regular')

    function manageFav() {
        if(favIcon == 'regular'){
            setFavIcon('solid')
            dispatch({type: 'add_favourite'})
        }
        /* dispatch({type: 'add_favourite'})
        console.log(favIcon)
        setFavIcon((prev) => prev == 'regular' ? 'solid' : 'regular') */
    }

    return (
        <div className="card" style={{minWidth: "18rem"}}>
            <img src="https://placehold.co/400" className="card-img-top" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{title}</h5>
                
                {fields.map((field) => {
                    return (
                   <p key={field.label} className='card-text'>
                        {field.label} = {field.value}
                   </p> 
                   )
                })}

                {/*<p className="card-text">Gender: {info.gender}</p>
                <p className="card-text">Eye color: {info.eye_color}</p>
                <p className="card-text">Hair color: {info.hair_color}</p>*/}

                <div className='d-flex justify-content-between'>
                    <Link to='/' className="btn btn-primary">Go somewhere</Link>
                    <button 
                        className="btn btn-outline-warning" 
                        onClick={manageFav}>

                            <i className={`fa-${favIcon} fa-heart`}></i>

                    </button>
                </div>
            </div>
        </div>
    )
}