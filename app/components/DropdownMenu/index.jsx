import {Dropdown} from "react-bootstrap";

export default ({title}) => { //ask how to pass it a list to populate the dropdown from the list
    return(
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Temp</Dropdown.Item>
            <Dropdown.Item href="#/action-2">item</Dropdown.Item>
            <Dropdown.Item href="#/action-3">stuff</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    );
    
}