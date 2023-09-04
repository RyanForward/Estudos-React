//Aula sobre propriedades, componentes e classes de componentes 
// import React, {Component} from 'react';

// class Equipe extends Component{
//   render(){
//     return(
//       <div>
//         <Sobre nome = {this.props.nome} idade = {this.props.idade} cargo = {this.props.cargo} />
//       </div>
//     );
//   }
// }

// class Sobre extends Component{
//   render(){
//     return(
//       <div>
//         <h2>Olá sou {this.props.nome}</h2>
//         <h3>Tenho {this.props.idade} anos</h3>
//         <h3>Sou {this.props.cargo}</h3>
//       </div>
//     );
//   }
// }

// function App(){
//   return(
//     <div>
//       <h1>Incontra il nostro team!</h1>
//       <Equipe nome="Matheus" idade="20" cargo="Dev"/>
//     </div>
//   ) 
// }

// export default App;

//Aula sobre states
// import React, {Component} from "react";

// class App extends Component{
  
//   constructor(props){
//     super(props);
//     this.state = {
//       nome: "Ryan",
//       contador: 0,
//       name_list: ["Ryan", "Lucas", "Matheus", "Eloise"]
//     };

//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//     this.adicionar= this.adicionar.bind(this);
//   }
  
//   aumentar(){
//     console.log("Aumentou");
//     let state = this.state;
//     state.contador += 1;
//     state.nome = state.name_list[state.contador];
//     this.setState({contador: state.contador});   //Aqui eu to atualizando somente o atributo contador do estado
//   }

//   diminuir(){
//     console.log("Diminuiu");
//     let state = this.state;
//     state.contador -= 1;
//     state.nome = state.name_list[state.contador];
//     if (state.contador<0) {
//       alert('Não pode ser negativo')
//       state.contador = 0;
//     }
//     this.setState({state});  //Aqui eu to atualizando o estado todo, com as novas mudanças
//   }

//   adicionar(){
//     var new_name = prompt("Digite o nome que será adicionado: ");
//     this.state.name_list.push(new_name);
//     var qtd_nomes = this.state.name_list.length;
//     alert("Nome adicionado com sucesso! Ele está na posição: ");
//   }

//   render(){
//     return(
//       <div>
//         <h1>Contador</h1>
//         <h2>{this.state.nome}</h2>
//         <h3>
//         <button onClick={this.diminuir}>-</button>
//           {this.state.contador}
//         <button onClick={this.aumentar}>+</button>
//         <button onClick={this.adicionar}>Adicionar</button>
//         </h3>
//         </div>
//     );
//   }
// }

// export default App;


//Aula sobre ciclo de vida de componentes
// import React, {Component} from "react";

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       hora: '00:00:00'
//      };
//   }

//   componentDidMount(){
//     setInterval(() =>  {
//       this.setState({hora: new Date().toLocaleTimeString()});
//     }, 1000);
//   }

//   componentDidUpdate(){
//     console.log('Atualizou');
//   }

//   render(){
//     return(
//       <div>
//         <h1>Meu projeto {this.state.hora}</h1>
//       </div>
//     );
//   }

// }

// export default App; 

//Aula sobre eventos (Para rodar, também descomentar o index.js no caminho Components/Membro/index.js)

// import React, {Component} from "react";
// import Membro from "./Components/Membro";

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Membro nome="Visitante"/>
//       </div>
//     )
//   }
// }

// export default App; 


//Aula sobre rederização condicional (Jeito 1)

// import React, {Component} from "react";

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       status: 2 
//     };
//   }
  
//   render(){
//     return(
//       <div>
        
//           {this.state.status === 1 &&
//           <h1>Bem-vindo ao sistema</h1>
//         }
//           <div>
//             <h1>Curso React JS</h1>
//           </div>

//       </div>
//     );
//   }
// }

// export default App;

//Aula renderização condicional (Condição está em "./Components/Feed")

// import React, {Component} from "react";
// import Feed from "./Components/Feed";

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       feed: [
//         {id: 1, username: 'Ryan', curtidas: 10, comentarios:2},
//         {id: 2, username: 'Lucas', curtidas: 140, comentarios:20},
//         {id: 3, username: 'Ana', curtidas: 1, comentarios:10},
//       ]
//     };
//   }
  

//   render(){
//     return(
//       <div>

//         {this.state.feed.map((item)=>{
//           return(
//             <Feed key={item.id} username={item.username}
//             curtidas={item.curtidas} comentarios={item.comentarios}/>

//           );
//         })}

//       </div>
//     );
//   }
// }

// export default App;

//Aula manipulando formulários

// import React, {Component} from "react";

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       email: 'teste@teste.com',
//       senha: '123456'
//     }
//     this.trocaEmail = this.trocaEmail.bind(this);
//     this.trocaSenha = this.trocaSenha.bind(this);
//   }

//   trocaEmail(e){
//     let valorDigitado = e.target.value;
//     this.setState({email: valorDigitado});
//   }

//   trocaSenha(e){
//     let valorDigitado = e.target.value;
//     this.setState({senha: valorDigitado});
//   }

//   render(){
//     return(
//       <div>
//         <h2>Login</h2>
//         Email:
//         <input type="email" name="email" value={this.state.email}
//             onChange={this.trocaEmail}></input>
//         <br></br>Senha:
//         <input type="password" name="senha" value={this.state.senha}
//             onChange={this.trocaSenha}></input>
//       </div>
//     );
//   }
// }

// export default App;

//Aplicando mais formulários

// import { eventWrapper } from "@testing-library/user-event/dist/utils";
// import React, {Component} from "react";

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       nome: '',
//       sobrenome: '',
//       email: '',
//       senha: '',
//       error: ''
//     };

//     this.enviaForm = this.enviaForm.bind(this);
//   }

//   enviaForm(event){
//     const {nome, sobrenome, email, senha} = this.state;
//     if(nome != '' && sobrenome != '' && email != '' && senha != ''){
//       alert(`Nome: ${nome} \n Sobrenome: ${sobrenome} \n Email: ${email} \n Senha: ${senha}`);
//     }else{
//       this.setState({error: 'Parece que está faltando algo!'});
//       event.preventDefault();
//     }
//   }

//   render(){
//     return(
//       <div>
//           <h1>Novo usuário</h1>
//           {this.state.error && <p>{this.state.error}</p>}
//           <form onSubmit={this.enviaForm}>
//             <h3>Nome</h3>
//             <input type="text" value={this.state.nome}
//               onChange={(e) => this.setState({nome: e.target.value})}></input>
//             <h3>Sobrenome</h3>
//             <input type="text" value={this.state.sobrenome}
//               onChange={(e) => this.setState({sobrenome: e.target.value})}></input>
//             <h3>Email</h3>
//             <input type="email" value={this.state.email}
//               onChange={(e) => this.setState({email: e.target.value})}></input>
//             <h3>Senha</h3>
//             <input type="password" value={this.state.senha}
//               onChange={(e) => this.setState({senha: e.target.value})}></input><br/><br/>
//             <button type="submit">Enviar</button>
//           </form>
//       </div>
//     );
//   }
// }

// export default App;

import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    }

    this.sum = this.sum.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);
    this.cleaner= this.cleaner.bind(this);
  }

  sum(){
    alert("Somando...");
    let resultado = Number(this.state.num1) + Number(this.state.num2);
    this.setState({result: resultado});
  }

  sub(){
    alert("Subtraindo...");
    let resultado = Number(this.state.num1) - Number(this.state.num2);
    this.setState({result: resultado});
  }

  mul(){
    alert("Multiplicando...");
    let resultado = Number(this.state.num1) * Number(this.state.num2);
    this.setState({result: resultado});
  }

  div(){
    if(Number(this.state.num2) === 0){
      alert("O segundo número não pode ser zero! Preencha-o novamente");
    }else{
      alert("Dividindo...");
      let resultado = Number(this.state.num1) / Number(this.state.num2);
      this.setState({result: resultado}) ;
    }
  }

  cleaner(){
    alert("Limpando");
    this.setState({num1: ""});
    this.setState({num2: ""});
    this.setState({result: ""});
  }

  render(){
    return(
      <div>
        <h1>Calculadora</h1>
        <h3>Primeiro número</h3>
        <input type="number" id="numb1" value={this.state.num1}
        onChange={(e) => this.setState({num1: e.target.value})}></input> <br/><br/>
        <h3>Segundo número</h3>
        <input type="number" id="numb2" value={this.state.num2}
        onChange={(e) => this.setState({num2: e.target.value})}></input> <br/><br/>
        <button onClick={this.sum}>+</button> <nbsp/> <nbsp/>
        <button onClick={this.sub}>-</button> <nbsp/> <nbsp/>
        <button onClick={this.mul}>x</button> <nbsp/> <nbsp/>
        <button onClick={this.div}>%</button> <nbsp/> <nbsp/>
        <button onClick={this.cleaner}>Limpar</button> <nbsp/> <nbsp/>

        <h2>Resultado:</h2>
      <input type="text" disabled='true' value={this.state.result}></input>

        </div>
    );
  }
}

export default App;