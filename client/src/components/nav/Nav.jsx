import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

export default function Nav(props) {
    return (
        <div className={styles.container} >
            <NavLink to="/home">
                <button >HOME</button>
            </NavLink>
            <NavLink to="/favorites">
                <button >FAVORITES</button>
            </NavLink>
            <NavLink to="/about">
                <button >ABOUT</button>
            </NavLink>
            <NavLink>
                <button onClick={props.logout}>LOGOUT</button>
            </NavLink>
            <hr />
            <SearchBar onSearch={props.onSearch} />

        </div>
    )
}