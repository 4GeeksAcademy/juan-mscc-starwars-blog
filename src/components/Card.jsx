import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Card({name, entitie, id}) {
    

    const {store, dispatch} = useGlobalReducer()

    const [favIcon, setFavIcon] = useState('regular')

    function manageFavIcon() {
        dispatch({type: 'add_favourite', payload: {name: name, entitie: entitie, id: id}})
        console.log(favIcon)
        setFavIcon((prev) => prev == 'regular' ? 'solid' : 'regular')
    }

    return (
        <div className="card" style={{minWidth: "18rem"}}>
            <img src="https://placehold.co/400" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <div className='d-flex justify-content-between'>
                    <Link to='/' className="btn btn-primary">Go somewhere</Link>
                    <button 
                        className="btn btn-outline-warning" 
                        onClick={manageFavIcon}>

                            <i className={`fa-${favIcon} fa-heart`}></i>

                    </button>
                </div>
            </div>
        </div>
    )
}