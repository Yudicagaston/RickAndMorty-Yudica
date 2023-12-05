import styles from "./Card.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {

    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false)
    const myFavorites = useSelector(state => state.myFavorites);
    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                setIsFav(true)
            }
        })
    }, [myFavorites])

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false);
            dispatch(removeFav(props.id))
        }
        else {
            setIsFav(true);
            dispatch(addFav(props))
        }
    }

    return (
        <div className={styles.container}
        >
            {isFav ? (<button onClick={handleFavorite}>❤️</button>) : <button onClick={handleFavorite}>🖤</button>}
            <button onClick={() => props.onClose(props.id)}>X</button>

            <Link to={`/detail/${props.id}`} >
                <h2>{props.name}</h2>
            </Link>
            <h4>Id: {props.id}</h4>
            <h4>Status: {props.status}</h4>
            <h4>Specie: {props.species}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Origin: {props.origin}</h4>
            <img src={props.image} alt={props.name}

            />
        </div>
    )
}