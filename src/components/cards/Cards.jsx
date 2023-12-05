import Card from "../card/Card";

export default function Cards({ characters, onClose }) {
    const cardsContainer = {

        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    }
    return (
        <div style={cardsContainer}>
            {
                !characters.length ? <h2 style={
                    {
                        color: "white",
                        background: "black",
                        borderRadius: "15px",
                        padding: "10px",
                        opacity: "80%"
                    }
                }>Ingrese un ID</h2> :
                    characters.map(char => (
                        <Card
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            origin={char.origin.name}
                            image={char.image}
                            onClose={onClose} />
                    ))
            }
        </div>
    )
}