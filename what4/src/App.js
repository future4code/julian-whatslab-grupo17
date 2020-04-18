import React from 'react';
import styled from 'styled-components';
import OwnMsgTemplate from './Components/OwnMsgTemplate';
import OtherMsgTemplate from './Components/OtherMsgTemplate';

//Styles
const AppContainer = styled.div`
  border: 1px solid black;
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex
  flex-direction: column-reverse;
  align-items: center;
`
const MainContainer = styled.div`
  background-color: #e5dfd5;
  border: 1px solid black;
  border-radius: 8px;
  overflow: auto;
  max-width: 100%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const FormContainer = styled.div`
  position: static;
  width: 100%;
  display: flex;
  justify-content: center;
`
const InputRemetente = styled.input`
  width: 15%;
`
const InputConteudo = styled.input`
  width: 75%;
`
//Functions
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
    console.log('passou no conteudo')
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
    console.log('passou no onclick')
    console.log(this.state.listaDeMensagens)
  }
  render(){
     const listaDeMensagensNaTela = this.state.listaDeMensagens.map(mensagem => {
      console.log('formou a msg')
      console.log(mensagem)
      if(mensagem.usuario.toLowerCase() !== 'eu'){
        return (
          <OtherMsgTemplate 
            remetente={mensagem.usuario}
            conteudo={mensagem.conteudo}
          />
        )
      }else if(mensagem.usuario.toLowerCase() === 'eu'){
        return (
          <OwnMsgTemplate 
            remetente={mensagem.usuario}
            conteudo={mensagem.conteudo}
          />
        )
      }
    });

    return (
      <AppContainer>
        <MainContainer>
          {listaDeMensagensNaTela}
        </MainContainer>
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
