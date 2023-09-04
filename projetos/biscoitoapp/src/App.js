import React, {Component} from "react";
import './estilo.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: 'Sua frase aparecerá aqui'
    };
    this.frases=['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(e){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.frase = this.frases[numeroAleatorio];
    this.setState({frase: state.frase});
  }

  render(){
    return(
      <div className="container">
        <h1 className="title">Biscoito da sorte!</h1>
        <img src={require("./assets/biscoito.png")} className="imagem"></img>
        <Botao nome="Quebrar biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="texto-frase">{this.state.frase}</h3>
      </div>
    );
  }
}

class Botao extends Component{

  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
