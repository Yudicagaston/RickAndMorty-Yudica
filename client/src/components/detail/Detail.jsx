import styles from "./Detail.module.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail(props) {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        //axios(`https://rickandmortyapi.com/api/character/${id}`)
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(
                ({ data }) => {
                    if (data.name) {
                        setCharacter(data);
                    } else {
                        window.alert('No hay personajes con ese ID');
                    }
                }
            );
        return setCharacter({});
    }, [id]);


    return (
        <div className={styles.container}
        >
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Status: {character.status}</h3>
            <h3>Specie: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Location: {character.location?.name}</h3>
        </div>
    )
}