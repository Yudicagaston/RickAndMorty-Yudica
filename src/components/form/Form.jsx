import styles from "./Form.module.css"
import { useState } from "react"
import validation from "../../utils/validation";

const imgPortal = "https://i.ytimg.com/vi/5ysyBLkpHVc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDQgZSgPMA8=&rs=AOn4CLCLb-8g1ayMvrY015iANOBlJFEilQ"
export default function Form(props) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "Ingrese su email",
        password: "Ingrese su password",
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData, [name]: value
        })
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData)
    }
    return (
        <div className={styles.container}
        >
            <img src={imgPortal} style={{ width: "500px" }} alt="" />
            <form onSubmit={handleSubmit}>
                <label>EMAIL: </label>
                <input type="text" key="email" name="email" value={userData.email} placeholder="Ingresar email..." onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.email && errors.email}</p>
                <br />
                <label>PASSWORD: </label>
                <input type="password" key="password" name="password" value={userData.password} placeholder="Ingresar password..." onChange={handleChange} />
                <p style={{ color: "red" }}>{errors.password && errors.password}</p>
                <hr />
                <button type="submit" disabled={errors.email || errors.password}> INGRESAR </button>

            </form>
        </div>
    )
}