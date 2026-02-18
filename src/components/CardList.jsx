import React, { useEffect, useState } from "react";
import { Card } from "./Card";


const CardList = ({title}) => {
    
    const [ charactersList, setCharactersList ] = useState([])

    useEffect (() => {
        fetch('https://www.swapi.tech/api/people')
        .then((resp) => {
            if (!resp.ok) {throw new Error('API not working')}
            return resp.json()
        })
        .then ((data) => {
            console.log(data.results)
            setCharactersList(data.results)
        })
    }, [])

    return (
        <>

            <h2 className='text-start text-danger'>{title}</h2>

            <ul className="d-flex flex-row flex-nowrap overflow-auto py-2 gap-2">
                {charactersList.map((character) => {
                    return (
                        <Card name={character.name} key={character.uid}/>
                    )
                })}
            </ul>
        </>
    )
}

export default CardList