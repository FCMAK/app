import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class MensajeProceso extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Solicitud en Proceso'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"} center>
                            <SIcon name={"ok"} width={124} height={124} />
                            <SHr height={20} />
                            <SText font={"LondonTwo"} center fontSize={24} color={STheme.color.black}>SOLICITUD A DOMICILIO EN PROCESO </SText>
                            <SHr height={30} />
                            <SText center fontSize={16}>Ha solicitado un servicio de {this.props.obj?.tipo} a domicilio la cuál será atendida a la brevedad posible.</SText>
                        </SView>
                        <SHr height={35} />
                        <SView col={"xs-12"} center>
                            <SText font={"LondonTwo"} fontSize={18} style={{ borderTopWidth: 1, borderColor: STheme.color.primary }} >Solicitud:</SText>
                            <SText font={"LondonTwo"} fontSize={36} >#{this.props.obj?.numero}</SText>
                        </SView>
                        <SHr height={35} />
                        <SView col={"xs-12"} center>
                            <SText fontSize={16} center>Pronto nos comunicaremos con usted para finalizar el proceso de compra.</SText>
                        </SView>
                        <SHr height={45} />
                        <Kolping.KButtom secondary onPress={()=>{
                            SNavigation.goBack();
                        }}>ACEPTAR</Kolping.KButtom>
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
export default connect(initStates)(MensajeProceso);