import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import ptBR from "antd/lib/locale/pt_BR";
import HomePage from './pages/HomePage';
import { ConfigProvider } from "antd";
import { useRoutes } from "react-router-dom";

function App() {
   const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/:id", element: <HomePage /> },
  ]);

  return (
    <div className="App">

        <ConfigProvider locale={ptBR}>{routes}</ConfigProvider>

    </div>
  );
}

export default App;
