import Link from "next/link";
import Image from "next/image";
import styles from "./MainNav.module.scss";
import { Navbar, Nav} from "react-bootstrap/";
import BBC from "../../../public/images/avatar.png";


const MainNav = () => {
  return (
    <>
      <Navbar
        variant="dark"
        bg="dark"
        fixed="top"
        className={`border-bottom d-none d-lg-flex justify-content-between ${styles.nav}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand className={`d-flex ${styles.brand}`}>
            Silver Surfer
          </Navbar.Brand>
        </Link>
        <Nav className="d-flex">
          <Nav.Link href="/majors" className={styles.link}>Majors</Nav.Link>

          <Nav.Link href="/minors" className={styles.link}>Minors</Nav.Link>

          <Nav.Link href="/faculty" className={styles.link}>Faculty</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        variant="dark"
        bg="dark"
        fixed="top"
        className={`border-bottom d-flex d-lg-none ${styles.navMobileTop}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand className={`${styles.brand}`}>Silver Surfer</Navbar.Brand>
        </Link>

        <Navbar.Collapse id="styng-nav" className="justify-content-end">
          <Nav className="d-flex">
            <Link href="/majors" passHref>
              <Nav.Link className={styles.link}>Majors</Nav.Link>
            </Link>
            <Link href="/minors" passHref>
              <Nav.Link className={styles.link}>Minors</Nav.Link>
            </Link>
            <Link href="/faculty" passHref>
              <Nav.Link className={styles.link}>Faculty</Nav.Link>
            </Link>

            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </>
  );
};

export default MainNav;
