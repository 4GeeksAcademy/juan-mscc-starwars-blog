import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Card({id, title, entity, endpoint, fields}) {
    

    const {store, dispatch} = useGlobalReducer()

    const isFavourite = store.favourites.some(fav => fav.name == title)

    function manageFav() {
        if(!isFavourite){
            
            dispatch({type: 'add_favourite', payload: {id, name: title, endpoint}})

        } else {
            
            dispatch({type: 'remove_favourite', payload: {id, name:title}})
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
                    <Link to={'/' + endpoint + '/' + id} className="btn btn-primary">Details</Link>
                    <button 
                        className="btn btn-outline-warning" 
                        onClick={manageFav}>

                            <i className={`fa-${isFavourite ? 'solid' : 'regular'} fa-heart`}></i>

                    </button>
                </div>
            </div>
        </div>
    )
}