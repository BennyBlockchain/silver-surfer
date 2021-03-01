import { Modal, Button, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";


export default function Info() { 
    return (
    
        <p>Info Pages</p>
   
    );
}

export async function getStaticPaths() { 
    return { 
        paths: [
            '/DocumentInfo/ComputerScienceMajor.js', 
            { params: {slug: 'ComputerScienceMajor'}}
        ],
        fallback: true, 
    }
}

export async function getStaticProps({params}) { 
    
}