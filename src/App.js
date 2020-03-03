import React from "react";
import { Layout, Row, Col } from "antd";
import SlideLayout from "./components/slide";
import Videolayout from "./components/video";
import "antd/dist/antd.css";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <Row>
          <Col lg={12} xs={24}>
            <Videolayout />
          </Col>
          <Col lg={12} xs={24}>
            <SlideLayout />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
