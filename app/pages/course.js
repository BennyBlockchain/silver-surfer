import {useRouter} from "next/router"; 
import Main from "../layouts/Main/Main";
import Head from "next/head";


const Course_Page_ID = "course/[ID]"; 
const course = [
    {
        id: 120,
        title: "CSC 120"
    }, 
    {
        id: 220, 
        title: "CSC 220"
    },
    {
        id: 310, 
        title: "CSC 310"
    },
    {
        id: 320, 
        title: "CSC 320"
    },
    {
        id: 399, 
        title: "CSC 399"
    },
    {
        id: 492, 
        title: "CSC 492"
    },
    {
        id: 360, 
        title: "CSC 360"
    }
];

export default function CoursePage() { 
    const router = useRouter(); 

    const navigate = (ID) => 
        router.push({
            pathname: Course_Page_ID,
            query: {ID}
        }); 
    
    return (
        <div>
            <Head>
            <h1>Course Page</h1>
            </Head>

        
            {course.map((course) => (
                <div key={`course-${course.id}`}>
                    <button 
                    onClick={() => navigate(course.id)}>{course.title}
                    </button>
                
            </div>
            ))}
        
           
        </div>
       
       
    )
}


