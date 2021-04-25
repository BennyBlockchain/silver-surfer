import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../layouts/page/MainNav/MainNav";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/client";
import axios from "axios";
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
  console.log(session);
  return (
    <>
      {!session && (courses || !courses) && <Login />}
      {courses && session && (
        <>
          <Head>{session.user.name}</Head>
          <MainNav />
          <Container className="pt-5" fluid>
            <div className="d-flex justify-content-between py-3">
              <h1 className="d-inline m-0">Welcome, {session.user.name}</h1>
              <div>
                <Link href="/admin/create">
                  <Button variant="secondary mx-2" className="d-inline">
                    New Course
                  </Button>
                </Link>
                <Button className="d-inline" onClick={() => signOut()}>
                  Logout
                </Button>
              </div>
            </div>
            <h3>Your classes</h3>
            <ProfessorCourses courses={courses} />
          </Container>
        </>
      )}
    </>
  );
}
