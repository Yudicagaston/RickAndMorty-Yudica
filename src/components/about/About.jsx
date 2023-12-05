import styles from "./About.module.css"
import React from "react";
import gastonFoto from "./gaston foto.jpeg"
export default function About() {
    return (
        <div className={styles.container}>
            <h1>ABOUT ME</h1>
            <h1>Yudica Gastón</h1>
            <img src={gastonFoto} alt="Imagen de Gastón" />
            <h3>Status: Alive</h3>
            <h3>Specie: Human</h3>
            <h3>Gender: Male</h3>
            <h3>Origin: Earth(C-137-Argentina)</h3>
            <h3>Location: Earth(C-137-Argentina)</h3>
            <p style={
                {
                    background: "white"
                }
            }>visita mi <a
                href="https://github.com/Yudicagaston"
                target="_blank">Github</a></p>
        </div>
    )
}