import React, {useEffect, useState} from "react";
import styles from "./Navbar.module.scss";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { FaConnectdevelop } from "react-icons/fa"
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atom";
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selector";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Navigation() {
    const [user, setUser] = useRecoilState(userState)
    const loggedIn = useRecoilValue(loggedInState)
    const navigate = useNavigate()
    const [close, setClosed] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("uid")) {
            axios.get("https://whispering-castle-56104.herokuapp.com/api/v1/techonnect/users/profile", {
            headers: {authorization: `Bearer ${localStorage.uid}`},
        })
        .then(res => res.data)
        .then((res) => {
            setUser(res.user)
            })
        }
    },[])

    const logout = () => {
        setUser(null);
        localStorage.clear();
        navigate('/')
    }

    return (
        <Navbar className={styles.navBar} collapseOnSelect expand="lg" variant="dark" fixed="top" expanded={close}>
            <Container className={styles.container}>
                <Navbar.Brand className="mb-1" href={user ? "/home" : "/"}><span id={styles.logo}><FaConnectdevelop /></span>Techonnect</Navbar.Brand>
                <Navbar.Toggle className={styles.navBarCollapse} aria-controls="responsive-navbar-nav" onClick={() => setClosed(close ? false : "expanded")}/>
                <Navbar.Collapse className={styles.navBarCollapse} id="responsive-navbar-nav">
            {loggedIn ?
                    <Nav className={styles.navLinks}>
                        <Navbar.Text><Link onClick={() => setClosed(false)} to="/home">Home</Link></Navbar.Text>
                        <Navbar.Text><Link onClick={() => setClosed(false)} to="#">Explore</Link></Navbar.Text>
                        <Navbar.Text><Link onClick={() => setClosed(false)} to="/groups">Groups</Link></Navbar.Text>
                        <Navbar.Text><Link onClick={() => setClosed(false)} to="/meetups">Meetups</Link></Navbar.Text>
                        <Navbar.Text><Link onClick={() => setClosed(false)} to="/messages">Messages</Link></Navbar.Text>
                        <img className={styles.navUserImage} src={user.avatar} alt="user" />
                        <NavDropdown
                            title={`${user.firstName} ${user.lastName}`}
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href={`/profile/${user._id}`}>
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href={`/profile/${user._id}/edit`}>
                                Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
