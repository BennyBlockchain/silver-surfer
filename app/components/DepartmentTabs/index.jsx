import {Tab, Tabs} from "react-bootstrap";


const DepartmentTabs = ({title1, title2, content1, content2}) => {
  return (
    <Tabs defaultActiveKey="home" transition={false} id="tab-example">
      <Tab eventKey="tab1" title={title1}>
        {content1}
      </Tab>
      <Tab eventKey="tab2" title={title2}>
        {content2}
      </Tab>
    </Tabs>
  );
};

export default DepartmentTabs;
