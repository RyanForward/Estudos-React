import React, {Component} from "react";
import "./estilo.css";


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tempo: 0,
      texto_inicio: 'Iniciar',
      historico: ''
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);

  }

  start(e){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.state.texto_inicio = 'Continuar'
      this.setState(this.state)
    }else{
      this.state.texto_inicio = 'Parar'
      this.timer = setInterval(() => {
        let state = this.state;
        state.tempo += 0.01;
        this.setState(state);
      }, 10);
    }

  }

  clean(){
    let state = this.state;
    state.texto_inicio = 'Iniciar'
    if (state.tempo != 0){
      state.historico += String(state.tempo.toFixed(2)) + "\n";
    }
    state.tempo=0;
    clearInterval(this.timer);
    this.timer = null;
    this.setState(state);
  }

  render(){
    return(
      <div className="main-conteiner">
        <h1 className="main-title">Cronômetro</h1>
        <div className="conteiner-mostrador">
          <img src={require("./assets/cronometro.png")} className="imagem"></img>
          <h2 className="display">{this.state.tempo.toFixed(2)}</h2>
        </div>
        <div className="conteiner-controle">
          <button className="btn-controle" onClick={this.start}>{this.state.texto_inicio}</button>
          <button className="btn-controle" onClick={this.clean}>Limpar</button>
        </div>
        <div className="historico-conteiner">
            <h2>Últimos tempos</h2>
            <pre>
            <h3 className="tempos">{this.state.historico + "\n"}</h3>
            </pre>
        </div>
      </div>
    );
  }
}

export default App;