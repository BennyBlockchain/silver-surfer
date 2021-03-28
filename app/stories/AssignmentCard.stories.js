import React from "react";
import AssignmentCard from "../components/AssignmentCard/index.jsx"; //import component
//import images:
import scream from "../assignment_images/suffering.png"
import kermit from "../assignment_images/kermitNo.png"

export default {
    title: "Assignment Card",
    component: AssignmentCard,
  };

  // template for passing props to storybook components
  const AssignmentCardStory = (props) => <AssignmentCard {...props} />;

  // Test:
  export const Scream = AssignmentCardStory.bind({});
  Scream.args = {
    imageName: scream,
    title: "Suffering",
    dueDate: "March 31st, 2021",
    desc: "Life is pain.",
    //link: "https://youtu.be/XqXckRwf6Ec",
    linkTitle: "Test Link Here",
  };

  // Test 2:
  export const Kermit = AssignmentCardStory.bind({});
  Kermit.args = {
    imageName: kermit,
    title: "Anger",
    dueDate: "March 31st, 2021",
    desc: "My sister ate my cheetos.",
    //link: "https://youtu.be/XqXckRwf6Ec",
    linkTitle: "Test Link Here",
  };
