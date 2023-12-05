import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { filteredCards, orderCards } from "../../redux/actions";

export default function Favorites({ onClose }) {
    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch()
    const handleOrder = event => {
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = event => {
        dispatch(filteredCards(event.target.value))
    }
    return (

        <div>

            <div>
                <select name="order" onChange={handleOrder} >
                    <option value="A">ASCENDENTE</option>
                    <option value="D">DESCENDENTE</option>
                </select>
                <select name="filter" onChange={handleFilter} >
                    <option value="All">ALL</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                    <option value="Genderless">GENDERLESS</option>
                    <option value="unknow">UNKNOW</option>
                </select>
            </div>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
            }}>
                {
                    myFavorites.map(char => (
                        <Card
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            origin={char.origin}
                            image={char.image}
                            onClose={onClose} />
                    ))
                }
            </div>
        </div>
    )
}