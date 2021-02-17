import Head from "next/head";
import { Modal, Button, Row } from "react-bootstrap";
import Main from "../layouts/Main/Main";

import MainNav from "../components/page/MainNav/MainNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Silver Surfer</title>
      </Head>
      <Main />
    </>
  );
}
