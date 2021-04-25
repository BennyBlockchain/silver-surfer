import { Container } from "react-bootstrap";
import MainNav from "../../layouts/page/MainNav/MainNav";
import Login from "../../components/Login";

const login = () => {
  return (
    <>
      <MainNav />
      <Container fluid className="pt-5">
        <Login />
      </Container>
    </>
  );
};

export default login;
