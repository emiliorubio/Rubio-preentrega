import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovider";
import { Login } from "../../screens/Login";
import firebaseApp from "../../Firebase/Credenciales";


import { getAuth, signOut } from "firebase/auth";


export const Header = () => {
    const value = useContext(Datacontext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;
    const [openDropdown, setOpenDropdown]= useState(false)
    const [openProfile, setOpenProfile]= useState(false)
    const [anyUser, setAnyUser] = useState({})
    const auth = getAuth(firebaseApp);

  useEffect(() => {
    setTimeout(()=> {
      const currentUser =  localStorage.getItem('user')
      setAnyUser(JSON.parse(currentUser))
    })
  }, []);
  
  const toogleMenu = () => {
    setMenu(!menu);
  };  

  const logout =()=> {
    signOut(auth).then(resp => {
      console.log(resp)
      localStorage.clear()
      window.location.reload()
    })
  }

  return (
    <header>
      {openProfile && <Login openModal={setOpenProfile} />}
      <Link to="/">
        <div className="logo">
          <span>A | P</span>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="productos">PRODUCTOS</Link>
        </li>
        <li>
          <span
            onClick={() => setOpenDropdown(!openDropdown)}
            style={{
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
            }}
          >
            BLOG <box-icon name="chevron-down" color="#f7efef"></box-icon>
          </span>
          {openDropdown && (
            <div className="box" style={{ opacity: openDropdown ? 1 : 0 }}>
              <ul>
                <li>
                  <Link to="Duelo">Duelo</Link>
                </li>
                <li>
                  <Link to="Problemas">Problemas</Link>
                </li>
                <li>
                  <Link to="Divorcio">Divorcio</Link>
                </li>
                {/* <li>
                  <Link to="Bullying">Bullying</Link>
                </li>
                <li>
                  <Link to="Confundido">Confundido</Link>
                </li> */}
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link to="Podcast">PODCAST</Link>
        </li>
        <li>
          <Link to="Contacto">CONTACTO</Link>
        </li>
      </ul>

      <div className="profile">
        <span
          
          style={{
            color: "white",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
          }}
        >
          {
            anyUser ? <span>{anyUser.email}</span> : <div onClick={() => setOpenProfile(!openProfile)}><box-icon name="user-circle" color="#fffefe"></box-icon></div>
          }
          {anyUser && <div onClick={() => logout()}><box-icon name="exit" color="#fffefe"></box-icon></div>}
          
        </span>
      </div>

      <div className="cart" onClick={toogleMenu}>
        <box-icon
          name="cart"
          flip="horizontal"
          animation="tada"
          color="#f7f9f2"
        ></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};
