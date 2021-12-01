import React, {useEffect} from "react";
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

    useEffect(() => {
        if(localStorage.getItem("uid")) {
            axios.get("http://localhost:4000/api/v1/techonnect/users/profile", {
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
        navigate('/login')
    }

    return (
        <Navbar className={styles.navBar} collapseOnSelect expand="lg" variant="dark" fixed="top">
            <Container className={styles.container}>
                <Navbar.Brand className="mb-1" href="/"><span id={styles.logo}><FaConnectdevelop /></span>Techonnect</Navbar.Brand>
                <Navbar.Toggle className={styles.navBarCollapse} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.navBarCollapse} id="responsive-navbar-nav">
            {loggedIn ?
                    <Nav className={styles.navLinks}>
                        <Navbar.Text><Link to="/">Home</Link></Navbar.Text>
                        <Navbar.Text><Link to="#">Explore</Link></Navbar.Text>
                        <Navbar.Text><Link to="/groups">Groups</Link></Navbar.Text>
                        <Navbar.Text><Link to="/meetups">Meetups</Link></Navbar.Text>
                        <Navbar.Text><Link to="#">Messages</Link></Navbar.Text>
                        <img className={styles.navUserImage} src={user.avatar} alt="user" />
                        <NavDropdown
                            title={`${user.firstName} ${user.lastName}`}
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href={`/profile/${user._id}`}>
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
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
