import { Outlet } from "react-router-dom";
import { Layout as LayoutAntd } from "antd";

import CustomTable from "./CustomTable";
import Draggable from "./Draggable";
import { useRef } from "react";

const { Content, Sider } = LayoutAntd;

const Layout = () => {
  const resizableRef = useRef(null);

  return (
    <LayoutAntd>
      <Sider
        ref={resizableRef}
        id="Resizable"
        width="30%"
        style={{ background: "#fff" }}
      >
        <CustomTable />
        <Draggable resizableRef={resizableRef} />
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Outlet />
      </Content>
    </LayoutAntd>
  );
};

export default Layout;
