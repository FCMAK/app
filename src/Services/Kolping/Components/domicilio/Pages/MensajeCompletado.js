import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class MensajeCompletado extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Solicitud Completado'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"} center>
                            <SIcon name={"ok2"} width={124} height={124} />
                            <SHr height={20} />
                            <SText font={"LondonTwo"} center fontSize={24} color={STheme.color.text}> SOLICITUD A DOMICILIO CONCLUIDA </SText>
                            <SHr height={30} />
                            <SText center fontSize={16}>Su solicitud de servicio de ÓPTICA a domicilio fue concluida exitosamente. </SText>
                        </SView>
                        <SHr height={35} />
                        <SView col={"xs-12 md-9 xl-9"} center>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info} >Su fecha asignada es:</SText>
                            <SHr height={20} />
                            <SView row col={"xs-12"} center style={{ border: "2px solid", borderRadius: 8, borderColor: STheme.color.primary, padding: 20 }}>
                                <SView col={"xs-4"} style={{ textAlign: "right", borderRightWidth: 2, borderColor: STheme.color.lightGray, paddingRight: 15 }}>
                                    <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={48} >14</SText>
                                    <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={14} >ENERO</SText>
                                </SView>
                                <SView col={"xs-5"} center>
                                    <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={24} >12:30 PM </SText>
                                </SView>
                                <SView col={"xs-3"} >
                                    <SIcon name={"reloj"} width={45} />
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={35} />
                        <SView col={"xs-12"} center>
                            <SText fontSize={16} center>¡Muchas gracias por confiar en F.C.M.A. Kolping!</SText>
                        </SView>
                        <SHr height={45} />
                        <Kolping.KButtom secondary >ACEPTAR</Kolping.KButtom>
                        <SHr height={30} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MensajeCompletado);