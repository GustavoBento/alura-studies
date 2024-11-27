import './style.scss'

export default function Lista () {
      const tarefas = [
            {
                  descricao: "JavaScript",
                  tempo: "01:30:00",
            },
            {
                  descricao: "React",
                  tempo: "03:00:00",
            },
            {
                  descricao: "TypeScript",
                  tempo: "02:00:00",
            },
      ]
      return (
            <aside className='listaTarefas'>
                  <h2>Estudos do dia</h2>
                  <ul>
                        {tarefas.map((tarefa, index) =>  (
                              <li key={index}>
                                    <h3> {tarefa.descricao} </h3>
                                    <span> {tarefa.tempo} </span>
                              </li>
                        ))}
                  </ul>
            </aside>
      )
}