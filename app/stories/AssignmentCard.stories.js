import React from "react";
import AssignmentCard from "../components/AssignmentCard/index.jsx"; //import component

export default {
    title: "Assignment Card",
    component: AssignmentCard,
  };

  // template for passing props to storybook components
  const AssignmentCardStory = (props) => <AssignmentCard {...props} />;

  // Test 1:
  export const Test1 = AssignmentCardStory.bind({});
  Test1.args = {

    title: "Assignment Test 1",

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

    title: "Assignment Test 2",

    dueMonth: "March",
    dueDate: "31st",
    dueTime: "3:40",
    dayOrNight: "PM",
    desc: "Link to library page.",

    link: "https://www.mountunion.edu/library",

    linkTitle: "UMU Library",
  };
