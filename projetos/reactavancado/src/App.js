import React, { useEffect, useState } from "react";
import "./style.css"

//https://sujeitoprogramador.com/rn-api/?api=posts


function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      });
    }
    loadApi();
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>  
      </header>  

      {nutri.map((item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <p className="categoria">{item.categoria}</p>
            <img src={item.capa} className="cover"></img>
            <p className="text">{item.subtitulo}</p><hr></hr>
            <button className="botao">Acessar</button>
          </article>
        )
      })}
    </div>
  );
}

export default App;
