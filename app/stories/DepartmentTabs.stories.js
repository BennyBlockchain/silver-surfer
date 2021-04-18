import React from "react";
import DepartmentTabs from "../components/DepartmentTabs/index.jsx"; //import component

export default{
  title: "Department Tabs",
  component: DepartmentTabs,
};

const DeptTabsStory = (props) => <DepartmentTabs {...props} />;

// Test 1:
export const Test1 = DeptTabsStory.bind({});
Test1.args = {
  title1: "CS",
  content1: "TODO for CS Major",
  title2: "MPSD",
  content2: "TODO for MPSD Major",
};

// Test 2:
export const Test2 = DeptTabsStory.bind({});
Test2.args = {
  title1: "CS",
  content1: "TODO for CS Minor",
  title2: "MPSD",
  content2: "TODO for MPSD Minor",
};
