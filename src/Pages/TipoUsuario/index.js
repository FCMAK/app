import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView } from 'servisofts-component';

class TipoUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Tipo de Usuario'}>
                <SText color={STheme.color.black} height={50} fontSize={18} center font={"LondonTwo"}>
                    Usted cuenta con permiso para multiples plataformas.
                </SText>
                <SText color={STheme.color.black} height={50} fontSize={18} center font={"LondonTwo"}>
                    ¿Cómo desea continuar?
                </SText>
                <SHr />

                <SView col={"xs-12"} >
                    <SIcon name={"Enfermera24"} width={400} fill={"#f0f"} style={{marginLeft: -60,}}/>
                </SView>
                
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(TipoUsuario);