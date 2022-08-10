import React, { useEffect, useState } from "react";
import getLoteria from "../../services/get-lotery";
import { useContexto } from "../context/context";
import Slider from "react-slick";
import { DivContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { nomeloteria } from "../utils/concursos";
import "./index.css";

interface Geral {
  sorteio: string;
  nome: string;
  image: string;
  descricao: string;
}
;

export default function Search(): JSX.Element {
  const {
    concurso,
    setConcurso,
    nomeSorteio,
    setNomeSorteio,
    resultado,
    setResultado,
  } = useContexto();
  let navigate = useNavigate();

  useEffect(() => {
    getLoteria(nomeSorteio, concurso).then((resultado) => {
      console.log(resultado.data);
      setResultado(resultado.data);
    });
  }, [nomeSorteio, concurso]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const concursoId = window.location.pathname.replace("/", "");

  function SamplePrevArrow(e: Geral) {
    if (e?.sorteio != concursoId) {
      return (
        <>
          <DivContainer key={e.nome}>
            <img src={e.image}></img>
            <a key={e.nome} onClick={() => {}}>
              <h3 style={{ marginTop: "10px" }}>{e.nome}</h3>
                      <span>Descricao: {e.descricao}</span>
            </a>
          </DivContainer>
        </>
      );
    } else 
      return (
          <></>
      )
  }

  return (
    <>
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <Slider {...settings}>
          {nomeloteria &&
            nomeloteria?.map((e: any) => (
                <SamplePrevArrow sorteio={e.sorteio} nome={e.nome} image={e.image} descricao={e.descricao}  />
            ))}
        </Slider>
      </div>
    </>
  );
}
