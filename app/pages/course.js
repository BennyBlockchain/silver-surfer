import { faHome } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router"; 

const Course_Page_ID = "course/[ID]"; 
const course = [
    {
        id: 120,
        title: "CSC 120"
    }, 
    {
        id: 220, 
        title: "CSC 220"
    }
];

export default function Home() { 
    const router = useRouter(); 

    const navigate = (ID) => 
        router.push({
            pathname: Course_Page_ID,
            query: {ID}
        }); 
    
    return (
        <div>
            <h1>Course Page</h1>

            {course.map((course) => (
                <div key={`course-${course.id}`}>
                    <button onClick={() => navigate(course.id)}>{course.title}</button>
            </div>
            ))}
        </div>
    )
}


