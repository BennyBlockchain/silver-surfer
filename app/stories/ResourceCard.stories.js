import React from "react";
import ResourceCard from "../components/ResourceCard/index.jsx"; //import component

export default {
    title: "Resource Card",
    component: ResourceCard,
  };

  // template for passing props to storybook components
  const ResourceCardStory = (props) => <ResourceCard {...props} />;

  // Test 1:
  export const Test1 = ResourceCardStory.bind({});
  Test1.args = {
    title: "ACM website",
    content: "Association for Computing Machinery",
    link: "http://www.acm.org/",
    linkTitle: "ACM website",
    datePosted: "2/10",
  };

  // Test 2:
  export const Test2 = ResourceCardStory.bind({});
  Test2.args = {
    title: "IEEE Computer Society Website",
    content: "Institute of Electrical and Electronics Engineers Computer Society",
    link: "http://www.computer.org/",
    linkTitle: "IEEE Computer Society Website",
    datePosted: "2/10",
  };
