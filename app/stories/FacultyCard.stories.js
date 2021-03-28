import React from "react";
import FacultyCard from "../components/FacultyCard/index.jsx"; //import component
//import images:
import cindric from "../professor_images/cindricbb.jpg"
import kirchmeyer from "../professor_images/kirchmjf.jpg"
import huibregtse from "../professor_images/huibresa.jpg"
import weber from "../professor_images/weberk.jpg"
import klayder from "../professor_images/klaydejr.jpg"
import smith from "../professor_images/default.png"

export default {
    title: "Faculty Card",
    component: FacultyCard,
  };
  
  // template for passing props to storybook components
  const FacultyCardStory = (props) => <FacultyCard {...props} />;
  
  // Blase Cindric:
  export const Cindric = FacultyCardStory.bind({});
  Cindric.args = {
    imageName: cindric,
    name: "Blase Cindric",
    title: "Associate Professor | Department Chair",
    office: "KHIC 048",
    phone: "(330) 829-6649",
    email: "cindricbb@mountunion.edu",
  };
  
  // John Kirchmeyer
  export const Kirchmeyer = FacultyCardStory.bind({});
  Kirchmeyer.args = {
    imageName: kirchmeyer,
    name: "John Kirchmeyer",
    title: "Lecturer | Professor Emeritus",
    office: "KHIC 049",
    phone: "(330) 823-2855",
    email: "kirchmjf@mountunion.edu",
  };

  // Sarah Huibregtse:
  export const Huibregtse = FacultyCardStory.bind({});
  Huibregtse.args = {
    imageName: huibregtse,
    name: "Sarah Huibregtse",
    title: "Assistant Professor",
    office: "KHIC 040",
    phone: "(330) 829-6510",
    email: "huibresa@mountunion.edu",
  };

  // James Klayder:
  export const Klayder = FacultyCardStory.bind({});
  Klayder.args = {
    imageName: klayder,
    name: "James Klayder",
    title: "Professor Emeritus",
    office: "KHIC 039",
    phone: "contact via email",
    email: "klaydejr@mountunion.edu",
  };

  // Ken Smith: 
  export const Smith = FacultyCardStory.bind({});
  Smith.args = {
    imageName: smith,
    name: "Ken Smith",
    title: "Lecturer",
    office: "KHIC",
    phone: "contact via email",
    email: "smithken@mountunion.edu",
  };

  // Ken Weber:
  export const Weber = FacultyCardStory.bind({});
  Weber.args = {
    imageName: weber,
    name: "Ken Weber",
    title: "Professor Emeritus",
    office: "KHIC 041",
    phone: "contact via email",
    email: "weberk@mountunion.edu",
  };