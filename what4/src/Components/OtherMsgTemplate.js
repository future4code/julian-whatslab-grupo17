import React from 'react';
import styled from 'styled-components';

const MsgTemplate = styled.main `
    border-radius: 5px;
    background-color: white;
    margin: 25px 25px 5px 25px;
    min-width: 30%;
    max-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-start; 
`;
const UserName = styled.h4 `
    margin: 0;
    display: flex;
    align-self: flex-start;
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

class OtherMsgTemplate extends React.Component {
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

export default OtherMsgTemplate
