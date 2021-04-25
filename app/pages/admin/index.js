import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../layouts/page/MainNav/MainNav";
import { Container, ListGroup, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import ProfessorCourses from "../../components/ProfessorCourses";
/**
 * * If user is not signed in, return the login page.
 * * If user IS signed in, return the admin page.
 */
export default function admin() {
  const [session, loading] = useSession();
  const [courses, setCourses] = useState();
  const fetcher = (url) => axios.get(url).then((res) => setCourses(res.data));

  if (session && !courses) {
    fetcher(`/api/courses/${session.user.name}`);
  }

  if (courses) console.log(courses);

  return (
    <>
      {!session && <Login />}
      {courses && (
        <>
          <Head>{session.user.name}</Head>
          <MainNav />
          <Container className="pt-5" fluid>
            <h1>Welcome, {session.user.name}</h1>
            <h3>Your classes</h3>
            <ProfessorCourses courses={courses} />
          </Container>
        </>
      )}
    </>
  );
}
