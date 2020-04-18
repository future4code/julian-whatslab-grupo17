import React from 'react';
import styled from 'styled-components';
import ExibeMensagem from './ExibeMensagem';


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

export default App
