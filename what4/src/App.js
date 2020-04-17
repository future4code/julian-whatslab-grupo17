import React from 'react';
import './App.css';
import Main from './components/Main';
import styled from 'styled-components';

const AppContainer = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const InputRemetente = styled.input`
  width: 15%;
`

const InputConteudo = styled.input`
  width: 70%;
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

  onKeyDownEnter = (event) => {
    if (event.key === 'Enter'){
      this.adicionaMensagem()
    }
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
    // const listaDeMensagensNaTela = this.state.listaDeMensagens.map(mensagem => {
    //   return (
    //     <Main 
    //       remetente={mensagem.remetente}
    //       conteudo={mensagem.conteudo}
    //     />
    //   )
    // });

    return (
      <AppContainer>
        {/* <MainContainer>
          {listaDeMensagensNaTela}
        </MainContainer> */}
        <FormContainer>
          <InputRemetente value={this.state.valorInputRemetente} onChange={this.onChangeInputRemetente} placeholder={'Usuário'} />
          <InputConteudo value={this.state.valorInputConteudo} onChange={this.onChangeInputConteudo} onKeyDown={this.onKeyDownEnter} placeholder={'Mensagem'} />
          <button onClick={this.adicionaMensagem} >Enviar</button>
        </FormContainer>
      </AppContainer>
    );
  }
}

export default App;
