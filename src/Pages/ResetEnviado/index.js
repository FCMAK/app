import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, } from 'servisofts-component';
import { CheckBox } from 'react-native';
import Kolping from '../../Components/Kolping';
class ResetEnviado extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Enviado'}>
                <SView col={"xs-12"} row center>
                    <SIcon name={"Logo"} height={70} style={{ marginTop: 30 }} />
                    <SView center>
                        <SView height={20} />
                        <SText center color={STheme.color.info} fontSize={24} font={"LondonTwo"}>
                            ¡Mensaje Enviado!
                        </SText>
                        <SText color={STheme.color.black} fontSize={16} font={"LondonMM"}>
                            Revise su bandeja de entrada y siga las instrucciones.
                        </SText>
                        <SView height={10} />
                        <SView backgroundColor={STheme.color.primary} width={150} height={150} style={{
                            borderRadius: 35,
                            marginTop: 20,

                        }} center >
                            <SIcon name={"mail"} width={110} />
                        </SView>
                        <SView height={20} />
                        <SView center row style={{
                            marginTop: 20,
                        }}>
                            <SText color={STheme.color.lightGray} style={{ paddingRight: 10, }} fontSize={15} font={"LondonBetween"}>
                                ¿No recibió?
                            </SText>
                            <SText color={STheme.color.primary} fontSize={15} font={"LondonTwo"}>
                                Reenviar
                            </SText>
                        </SView>
                    </SView>
                    <SView col={"xs-12"} center>
                        <SView style={{ position: 'fixed', bottom: 60 }}>
                            <Kolping.KButtom primary >INICIAR SESIÓN</Kolping.KButtom>
                        </SView>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ResetEnviado);