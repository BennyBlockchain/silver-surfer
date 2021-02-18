import Link from "next/link";
import Image from "next/image";
import styles from "./MainNav.module.scss";
import { Navbar, Nav } from "react-bootstrap/";
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
            silver surfer
          </Navbar.Brand>
        </Link>

        <Nav className="d-flex">
          <Nav.Link className={styles.link}>Ben</Nav.Link>

          <Nav.Link className={styles.link}>Ben</Nav.Link>

          <Nav.Link className={styles.link}>Ben</Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className={`border-bottom d-flex d-lg-none ${styles.navMobileTop}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand className={`${styles.brand}`}>Schroth</Navbar.Brand>
        </Link>

        <Navbar.Collapse id="styng-nav" className="justify-content-end">
          <Nav className="d-flex">
            <Link href="/messages" passHref>
              <Nav.Link className={styles.link}>Silver</Nav.Link>
            </Link>
            <Link href="/notifications" passHref>
              <Nav.Link className={styles.link}>Surfer</Nav.Link>
            </Link>

            <Nav.Link className={`p-0 ${styles.profile}`}>
              <Image
                height={32}
                width={32}
                src={BBC}
                className="rounded-circle"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="bottom"
        className={`border-top p-0 d-flex d-lg-none justify-content-between align-items-center ${styles.navMobileBottom}`}
      >
        <Link href="/#" passHref active>
          <a className={styles.bottomnav}>nav</a>
        </Link>
        <Link href="/#" passHref>
          <a className={styles.bottomnav}>navabr</a>
        </Link>

        <Link href="/#" passHref>
          <a className={styles.bottomnav}>cs</a>
        </Link>
        <Link href="/#" passHref>
          <a className={styles.bottomnav}>mount</a>
        </Link>
      </Navbar>
    </>
  );
};

export default MainNav;
