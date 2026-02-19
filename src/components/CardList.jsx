import React, { useEffect, useState } from "react";
import { Card } from "./Card";


const CardList = ({title, endpoint, fields}) => {
 

    const [ entitiesList, setEntitiesList ] = useState([])

    /* function callSecondApi() {
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
    } */

    useEffect (() => {
        fetch('https://swapi.dev/api/' + endpoint)
        .then((resp) => {
            if (!resp.ok) {throw new Error('API not working')}
            return resp.json()
        })
        .then ((data) => {
            const formatted = data.results.map((item) => ({
                id: item.url.split("/").filter(Boolean).pop(),
                name: item.name,
                field: fields.map((field) => ({
                    label: field.label,
                    value: item[field.key]
                }))
            }))
            setEntitiesList(formatted)
        })
        .catch((error) => {
            console.error(error.message)
        })
    }, [endpoint, fields])

    return (
        <>

            <h2 className='text-start text-danger'>{title}</h2>

            <ul className="d-flex flex-row flex-nowrap overflow-auto py-2 gap-2">
                {entitiesList.map((entity) => {
                    return (
                        <Card 
                            key={entity.id}
                            id={entity.id}
                            title={entity.name}
                            fields={entity.field}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default CardList