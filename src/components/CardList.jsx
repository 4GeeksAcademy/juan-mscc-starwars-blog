import React, { useEffect, useState } from "react";
import { Card } from "./Card";


const CardList = ({title}) => {

    const entities = (title == 'Characters' ? ('people') : ('planets'))
    
    const [ entitiesList, setEntitiesList ] = useState([])



    useEffect (() => {
        fetch('https://www.swapi.tech/api/' + entities)
        .then((resp) => {
            if (!resp.ok) {throw new Error('API not working')}
            return resp.json()
        })
        .then ((data) => {
            console.log(data.results)
            setEntitiesList(data.results)
        })
    }, [])

    return (
        <>

            <h2 className='text-start text-danger'>{title}</h2>

            <ul className="d-flex flex-row flex-nowrap overflow-auto py-2 gap-2">
                {entitiesList.map((entitie) => {
                    return (
                        <Card name={entitie.name} entitie={entities} id={entitie.id} key={entitie.uid}/>
                    )
                })}
            </ul>
        </>
    )
}

export default CardList