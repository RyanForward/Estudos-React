import React, {useState, useEffect, useMemo, useCallback} from "react";

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  const [input, setInput] = useState('');

  //useEffect para setar itens
  useEffect(() => {
    localStorage.setItem('Tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [tarefas, input]);

  //toda vez que alterar a state tarefas, chama essa função e evita que fique recarregando o return toda vez
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <strong> Você tem {totalTarefas} tarefas</strong> <br/>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
