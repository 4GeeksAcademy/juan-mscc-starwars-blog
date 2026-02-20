import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state



export const VehiclesDetails = (props) => {

    const { id } = useParams()

    const [ info, setInfo ] = useState({})

    useEffect(() => {
        fetch('https://www.swapi.tech/api/starships/' + id)
        .then((resp) => {
            if (!resp.ok) {throw new Error ('Error when fetching the API')}
            return(resp.json())
        })
         .then((data) => {
            console.log(data.result.properties)
            setInfo ({
                name: data.result.properties.name,
                cargo_capacity: data.result.properties.cargo_capacity,
                length: data.result.properties.length,
                cost_in_credits: data.result.properties.cost_in_credits
            })
            console.log(info)
        })
    }, [])

    return (
        
            <div className="container w-75 justify-content-center">
                <div className="row ">
                    <div className="col">
                        <img src="https://placehold.co/700x400" alt="" />
                    </div>
                    <div className="col">
                        <h1>{info.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, est repudiandae blanditiis, libero obcaecati vel nemo ipsam labore itaque, illum dolor molestias! Culpa asperiores laudantium quos aspernatur dignissimos possimus vero?</p>
                    </div>

                </div>

                

                <div className="row border-top border-danger mt-3">
                    <div className="col">
                        <h3>Cargo Capacity</h3>
                        <p>{info.cargo_capacity}</p>
                    </div>
                    <div className="col">
                        <h3>Length</h3>
                        <p>{info.length}</p>
                    </div>
                    <div className="col">
                        <h3>Cost in credits</h3>
                        <p>{info.cost_in_credits}</p>
                    </div>

                </div>
            </div>
        
    )
}
