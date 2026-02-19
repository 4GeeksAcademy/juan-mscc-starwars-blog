import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state



export const CharacterDetails = (props) => {

    const { id } = useParams()

    const [ info, setInfo ] = useState({})

    useEffect(() => {
        fetch('https://www.swapi.tech/api/people/' + id)
        .then((resp) => {
            if (!resp.ok) {throw new Error ('Error when fetching the API')}
            return(resp.json())
        })
         .then((data) => {
            console.log(data.result.properties)
            setInfo ({
                name: data.result.properties.name,
                birth_year: data.result.properties.birth_year,
                height: data.result.properties.height,
                skin_color: data.result.properties.skin_color
            })
            console.log(info)
        })
    }, [])

    return (
        
            <div className="cointainer">
                <div className="row">
                    <div className="col">
                        <img src="https://placehold.co/400x200" alt="" />
                    </div>
                    <div className="col">
                        <h1>{info.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, est repudiandae blanditiis, libero obcaecati vel nemo ipsam labore itaque, illum dolor molestias! Culpa asperiores laudantium quos aspernatur dignissimos possimus vero?</p>
                    </div>

                </div>

                

                <div className="row">
                    <div className="col">
                        <h3>Birth Year</h3>
                        <p>{info.birth_year}</p>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>

                </div>
            </div>
        
    )
}
