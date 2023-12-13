import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import NotFound from "./components/notfound/NotFound";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";
function App() {

  const [characters, setCharacters] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  // const EMAIL = 'gastonyudica1@gmail.com';
  // const PASSWORD = '1234567';
  const dispatch = useDispatch()
  function logout() {
    setAccess(false)
  }
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      if (access) {
        setAccess(access);
        navigate('/home');
      } else { alert("CREDENCIALES INCORRECTAS!!") }

    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(() => {
    !access && navigate('/');
    //!access && navigate('/home');
  }, [access]);

  async function onSearch(id) {
    try {
      const characterId = characters.filter(char => char.id === Number(id))
      if (characterId.length) { return alert(`El personaje ${characterId[0].name} ya existe`) }
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
        setCharacters([...characters, data])
        navigate("/home")
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      window.alert('¡No hay personajes con este ID!')
    }
  }
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== Number(id)))
    dispatch(removeFav(id))
  }
  return (
    <div className="App">
      {
        location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />
      }
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <hr />

    </div>
  )
}

export default App
