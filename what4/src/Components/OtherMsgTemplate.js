import React from 'react';
import styled from 'styled-components';
import ExibeMensagem from './ExibeMensagem';

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

class OtherMsgTemplate extends React.Component {
    state = {
     
    }

    render(){
        console.log('passou na main')
        return(
            <div>
                <MsgTemplate>
                    <ExibeMensagem 
                        remetente={this.props.remetente}
                        conteudo={this.props.conteudo}
                    />
                </MsgTemplate>
            </div>

        )
    }
}

export default OtherMsgTemplate
