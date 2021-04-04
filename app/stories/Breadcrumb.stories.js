import React from "react";
import Breadcrumbs from "../components/Breadcrumb/breadcrumb.jsx"; //import component

export default {
    title: "Breadcrumb",
    component: Breadcrumbs,
  };
  
  // template for passing props to storybook components
  const BreadcrumbStory = (props) => <Breadcrumbs {...props} />;
  
  export const test = BreadcrumbStory.bind({});
  test.args = {
    
  };
  