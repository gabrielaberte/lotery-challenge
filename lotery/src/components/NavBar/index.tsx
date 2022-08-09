import React from "react";
import { Dropdown, Layout, Menu, Space, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { DivMenu } from "./styles";

const { Header } = Layout;

export default function NavBar() {

  const menuSorteio = (
    <Menu
      items={[
        {
          key: "1",
          label: <a onClick={() => {}}>Mega Sena</a>,
        },
      ]}
    />
  );


  const menuPerfil = (
    <Menu
      items={[
        {
          key: "1",
          icon: <LoginOutlined />,
          label: <a onClick={() => {}}>Perfil</a>,
        },
      ]}
    />
  );


  return (
    <>
      <Layout>
        <Header>
          <DivMenu>
            <div>
              <Dropdown overlay={menuSorteio}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Sorteios</Space>
                </a>
              </Dropdown>
            </div>
            <div>
              <Dropdown overlay={menuPerfil}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <LoginOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </DivMenu>
        </Header>
      </Layout>
    </>
  );
}
