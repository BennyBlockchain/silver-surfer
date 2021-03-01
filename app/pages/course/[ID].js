import { Modal, Button, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";


export default function ID() { 
    return (
    
        <p>ID page</p>
   
    );
}

export async function getStaticPaths() { 
    return { 
        paths: [
            '/course/csc120.js', 
            { params: {slug: 'csc120'}}
        ],
        fallback: true, 
    }
}

export async function getStaticProps({params}) { 
    
}