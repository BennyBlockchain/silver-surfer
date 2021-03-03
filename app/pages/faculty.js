import {useRouter} from "next/router"; 

const Faculty_Member_Name = "faculty/[name]"; 
const faculty = [
    {
        name: "Cindric",
        title: "Professor Blase Cindric"
    },
    {
        name: "Huibregtse",
        title: "Professor Sarah Huibregtse"
    }, 
    {
        name: "Kirchmeyer",
        title: "Professor John Kirchmeyer"
    }, 
    {
        name: "Klayder",
        title: "Professor James Klayder"
    },
    {
        name: "Smith",
        title: "Professor Ken Smith"
    },
    {
        name: "Weber", 
        title: "Professor Ken Weber"
    }

    
];

export default function FacultyPage() { 
    const router = useRouter(); 

    const navigate = (name) => 
        router.push({
            pathname: Faculty_Member_Name,
            query: {name}
        }); 
    
    return (
        <div>
            <h1>Faculty Page</h1>

            {faculty.map((faculty) => (
                <div key={`faculty-${faculty.name}`}>
                    <button onClick={() => navigate(faculty.name)}>{faculty.title}</button>
            </div>
            ))}
        </div>
    )
}


