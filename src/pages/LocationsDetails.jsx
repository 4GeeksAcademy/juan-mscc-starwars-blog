import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state



export const LocationsDetails = (props) => {

    const { id } = useParams()

    const [ info, setInfo ] = useState({})

    useEffect(() => {
        fetch('https://www.swapi.tech/api/planets/' + id)
        .then((resp) => {
            if (!resp.ok) {throw new Error ('Error when fetching the API')}
            return(resp.json())
        })
         .then((data) => {
            console.log(data.result.properties)
            setInfo ({
                name: data.result.properties.name,
                climate: data.result.properties.climate,
                population: data.result.properties.population,
                rotation_period: data.result.properties.rotation_period
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
                        <h3>Climate</h3>
                        <p>{info.climate}</p>
                    </div>
                    <div className="col">
                        <h3>Population</h3>
                        <p>{info.population}</p>
                    </div>
                    <div className="col">
                        <h3>Rotation period</h3>
                        <p>{info.rotation_period}</p>
                    </div>

                </div>
            </div>
        
    )
}
