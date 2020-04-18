import React from 'react';
import styled from 'styled-components';
import ExibeMensagem from './ExibeMensagem';

const MsgTemplate = styled.main `
    border-radius: 5px;
    background-color: #cfffc7;
    margin: 25px 25px 5px 0px;
    min-width: 30%;
    max-height: auto;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
`;
const UserName = styled.h4 `
    margin: 0;
    display: flex;
    align-self: flex-end;
    max-height: auto;
`;
const UserMsg = styled.p `
    margin: 0;
    max-height: auto;
    display: flex;
    align-self: flex-start;
    align-items: center;
    justify-items: center;
`; 

class OwnMsgTemplate extends React.Component {
    state = {
     
    }

    render(){
        console.log('passou na main')
        return(
<<<<<<< HEAD:what4/src/Components/OwnMsgTemplate.js
                <MsgTemplate>
                    <UserName>{this.props.remetente}</UserName>
                    <UserMsg>{this.props.conteudo}</UserMsg>
                </MsgTemplate>

=======
            <div>
                <MsgTemplate>
                    <ExibeMensagem 
                        remetente={this.props.remetente}
                        conteudo={this.props.conteudo}
                    />
                </MsgTemplate>
            </div>
>>>>>>> 1208c8b9e51b98a04ed58840b54225fbe1cb031f:what4/src/Components/Main.js
        )
        
    }
}

export default OwnMsgTemplate