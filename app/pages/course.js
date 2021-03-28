import {useRouter} from "next/router"; 
import Main from "../layouts/Main/Main";
import Head from "next/head";
import Link from "next/link";
import useCourses from "../../hooks/useCourses"; 



export default function CoursePage() { 

    const courses = useCourses(); 
    
    return (
        <div>
            <Head>
            <h1>Course Page</h1>
            </Head>

        
            {courses.map((course) => (
                <Link
                    href={'course/${course.course_number}'}
                    key={`key-${course._id}`}
                    passHref
                >
                    <Button key={course._id} className="rounded-circle my-2 p-4 bg-info">
                    {course.course_number}
                    </Button>
                </Link>
            ))}
        
           
        </div>
       
       
    )
}


