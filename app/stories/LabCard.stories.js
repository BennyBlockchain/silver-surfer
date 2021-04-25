import React from "react";
import LabCard from "../components/LabCard/index.jsx"; //import component

export default {
    title: "Lab Card",
    component: LabCard,
  };

  // template for passing props to storybook components
  const LabCardStory = (props) => <LabCard {...props} />;

  // Test 1:
  export const Test1 = LabCardStory.bind({});
  Test1.args = {
    title: "Lab Test 1",
    dueMonth: "March",
    dueDate: "31st",
    dueTime: "3:40",
    dayOrNight: "PM",
    desc: "Read the current students page and answer 5 questions.",
    link: "https://www.mountunion.edu/current-students",
    linkTitle: "Link",
  };

  // Test 2:
  export const Test2 = LabCardStory.bind({});
  Test2.args = {
    title: "Lab Test 2",
    dueMonth: "March",
    dueDate: "31st",
    dueTime: "3:40",
    dayOrNight: "PM",
    desc: "Read the current students page and answer 5 questions.",
    link: "https://www.mountunion.edu/current-students",
    linkTitle: "Link",
  };
