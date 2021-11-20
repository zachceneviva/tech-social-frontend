import styles from "./Navbar.module.scss";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap"

export default function Navigation() {
    return (
        <Navbar className={styles.navBar} collapseOnSelect expand="lg" variant="dark">
            <Container className={styles.container}>
                <Navbar.Brand className="mb-1" href="#">Tech Social</Navbar.Brand>
                <Navbar.Toggle className={styles.navBarCollapse} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={styles.navBarCollapse} id="responsive-navbar-nav">
                    <Nav className={styles.navLinks}>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Explore</Nav.Link>
                        <Nav.Link href="#">Groups</Nav.Link>
                        <Nav.Link href="#">Meetups</Nav.Link>
                        <Nav.Link href="#">Message</Nav.Link>
                        <img className={styles.navUserImage} src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                        <NavDropdown
                            title="Zach Ceneviva"
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="#">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
