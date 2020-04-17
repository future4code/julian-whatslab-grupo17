import React from 'react';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    listaDeMensagens: [],
    valorInputRemetente: '',
    valorinputConteudo: ''
  }

  onChangeInputRemetente = (event) => {
    this.setState({valorInputRemetente: event.target.value})
  }

  onChangeInputConteudo = (event) => {
    this.setState({valorInputConteudo: event.target.value})
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputRemetente,
      conteudo: this.state.valorInputConteudo
    }

    const novasMensagens = this.state.listaDeMensagens;
    novasMensagens.push(novaMensagem);

    this.setState({listaDeMensagens: novasMensagens, valorInputConteudo: ''});
  }

  render(){

    return (
      <div className="App">
        <input value={this.state.valorInputRemetente} onChange={this.onChangeInputRemetente} placeholder={'Usuário'} />
        <input value={this.state.valorInputConteudo} onChange={this.onChangeInputConteudo} placeholder={'Mensagem'} />
        <button onClick={this.adicionaMensagem} >Enviar</button>
      </div>
    );
  }
}

export default App;
