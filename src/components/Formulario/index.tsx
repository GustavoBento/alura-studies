import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types/tarefas";
import { v4 as uuidv4 } from "uuid";

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    descricao: "",
    tempo: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas((tarefasAntiga) => [
      ...tarefasAntiga,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({
      descricao: "",
      tempo: "00:00",
    });
  }

  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.descricao}
            onChange={(evento) =>
              this.setState({ ...this.state, descricao: evento.target.value })
            }
            placeholder="O que você deseja estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}

export default Formulario;
