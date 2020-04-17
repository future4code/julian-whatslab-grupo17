import React from 'react';
import Form from './Components/Form';
import Main from './Components/Main';
import styled from 'styled-components';

const What4App = styled.div ` 
  margin: 0;
  width: 100vw;
  height: 100vh;

`

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

      <What4App>
         <Main>
        
        </Main> 
        <input value={this.state.valorInputRemetente} onChange={this.onChangeInputRemetente} placeholder={'Usuário'} />
        <input value={this.state.valorInputConteudo} onChange={this.onChangeInputConteudo} placeholder={'Mensagem'} />
        <button onClick={this.adicionaMensagem} >Enviar</button>
      </What4App>
    );
  }
}

export default App;
