import React from "react";
import AssignmentCard from "../components/AssignmentCard/index.jsx"; //import component
//import images:
import test1 from "../assignment_images/test1.jpeg"
import test2 from "../assignment_images/test2.jpeg"

export default {
    title: "Assignment Card",
    component: AssignmentCard,
  };

  // template for passing props to storybook components
  const AssignmentCardStory = (props) => <AssignmentCard {...props} />;

  // Test 1:
  export const Test1 = AssignmentCardStory.bind({});
  Test1.args = {
    imageName: test1,
    title: "Test 1",
    dueMonth: "March",
    dueDate: "31st",
    dueTime: "3:40",
    dayOrNight: "PM",
    desc: "Link to current students page.",
    link: "https://www.mountunion.edu/current-students",
    linkTitle: "Current UMU Students",
  };

  // Test 2:
  export const Test2 = AssignmentCardStory.bind({});
  Test2.args = {
    imageName: test2,
    title: "Test 2",
    dueMonth: "March",
    dueDate: "31st",
    dueTime: "3:40",
    dayOrNight: "PM",
    desc: "Link to library page.",
    link: "https://www.mountunion.edu/current-students",
    linkTitle: "UMU Library",
  };
