import React from "react";
import { Dropdown, Layout, Menu, Space, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { DivMenu } from "./styles";
import { useContexto } from "../context/context";

const { Header } = Layout;

export default function NavBar() {
  const { concurso, setConcurso, nomeSorteio, setNomeSorteio } = useContexto();

  const nomeloteria = [
    {
      sorteio: "megasena",
      nome: "Mega Sena",
    },
    {
      sorteio: "quina",
      nome: "Quina",
    },
    {
      sorteio: "lotofacil",
      nome: "Lotofácil",
    },
    {
      sorteio: "lotomania",
      nome: "Lotomania",
    },
    {
      sorteio: "timemania",
      nome: "Time Mania",
    },{
      sorteio: "duplasena",
      nome: "Dupla Sena",
    },
{
      sorteio: "diadesorte",
      nome: "Dia de Sorte",
    },{
      sorteio: "federal",
      nome: "Federal",
      },
    {
      sorteio: "loteca",
      nome: "Loteca",
    },{
      sorteio: "supersete",
      nome: "Super Sete",
      },
    {
      sorteio: "maismilionaria",
      nome: "Milionária",
    },
  ];

  const items = [];

  for (let index = 0; index < nomeloteria.length; index++) {
    const elemento = nomeloteria[index];
    items.push({
      key: elemento.sorteio,
      label: (
        <a
          onClick={() => {
            setNomeSorteio(elemento.sorteio);
          }}
        >
          {elemento.nome}
        </a>
      ),
    });
  }

  const menuSorteio = <Menu items={items} />;

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
