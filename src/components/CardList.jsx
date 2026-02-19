import React, { useEffect, useState } from "react";
import { Card } from "./Card";


const CardList = ({title}) => {

    const entitiesName = (name) => {
        switch (name) {
            case 'Characters':
                
                return 'people'
        
            case 'Locations':
                
                return 'planets'

            case 'Vehicles':
                
                return 'starships'
        
            default:
                break;
        }
    }
    
    const entities = entitiesName(title) 

    const [ entitiesList, setEntitiesList ] = useState([])

    function callSecondApi() {
        fetch('https://www.swapi.tech/api/' + entities)
        .then((resp) => {
            if (!resp.ok) {throw new Error('API not working')}
            return resp.json()
        })
        .then ((data) => {
            console.log(data.results)
            setEntitiesList(data.results)
        })
        .catch((error) => {
            console.error(error.message)
        })
    }

    useEffect (() => {
        fetch('https://swapi.dev/api/' + entities)
        .then((resp) => {
            if (!resp.ok) {throw new Error('API not working')}
            return resp.json()
        })
        .then ((data) => {
            console.log(data.results)
            setEntitiesList(data.results)
        })
        .catch((error) => {
            console.error(error.message)
        })
    }, [])

    return (
        <>

            <h2 className='text-start text-danger'>{title}</h2>

            <ul className="d-flex flex-row flex-nowrap overflow-auto py-2 gap-2">
                {entitiesList.map((entity) => {
                    return (
                        <Card info={entity} name={entity.name} entity={entities} id={entity.id} key={entity.url.replace()}/>
                    )
                })}
            </ul>
        </>
    )
}

export default CardList