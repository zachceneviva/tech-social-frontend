import styles from "./Navbar.module.scss";
import { Navbar, Nav, Container, NavDropdown, Button} from "react-bootstrap"
import { FaConnectdevelop } from "react-icons/fa"

export default function Navigation() {

    return (
        <Navbar className={styles.navBar} collapseOnSelect expand="lg" variant="dark" fixed="top">
            <Container className={styles.container}>
                <Navbar.Brand className="mb-1" href="/"><span id={styles.logo}><FaConnectdevelop /></span>Techonnect</Navbar.Brand>
                <Navbar.Toggle className={styles.navBarCollapse} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.navBarCollapse} id="responsive-navbar-nav">
                    <Nav className={styles.navLinks}>
                        <Navbar.Text><a href="/">Home</a></Navbar.Text>
                        <Navbar.Text><a href="#">Explore</a></Navbar.Text>
                        <Navbar.Text><a href="/groups">Groups</a></Navbar.Text>
                        <Navbar.Text><a href="/meetups">Meetups</a></Navbar.Text>
                        <Navbar.Text><a href="#">Messages</a></Navbar.Text>
                        <Button className={styles.signUp}>Sign Up</Button>
                        <Button className={styles.signIn}>Login</Button>
                        {/* <img className={styles.navUserImage} src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                        <NavDropdown
                            title="Zach Ceneviva"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="/profile">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
