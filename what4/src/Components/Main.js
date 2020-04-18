import React from 'react';
import styled from 'styled-components';


const MsgTemplate = styled.main `
    margin-bottom: 25px;
    max-width: 100%;
    max-height: auto;
    display: flex;
    flex-direction: column; 
`;
const UserName = styled.h4 `
    margin: 0;
    display: flex;
    align-self: flex-end;
    max-height: auto;
`
const UserMsg = styled.p `
    margin: 0;
    max-height: auto;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-items: center;
` 

class App extends React.Component {
    state = {
     
    }

    render(){
        console.log('passou na main')
        return(
        <MsgTemplate>
            <UserName>{this.props.remetente}</UserName>
            <UserMsg>{this.props.conteudo}</UserMsg>
        </MsgTemplate>
        )
    }
}

export default App
