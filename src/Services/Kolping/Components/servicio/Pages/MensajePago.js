import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class MensajePago extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={''} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center >
                        <SView col={"xs-12"} center>
                            <SIcon name={"ok"} width={150} height={150} />
                            <SHr height={50} />
                            <SText font={"LondonTwo"} center fontSize={24} color={STheme.color.text}>GRACIAS POR SU COMPRA </SText>
                            <SHr height={30} />
                            <SText center font={"LondonMM"} fontSize={20}>Ha comprado una cita con el Dr. Shah el 10 de septiembre a las 11 AM </SText>
                        </SView>
                        <SHr height={35} />
                        <SView col={"xs-12"} center>
                            <SText font={"LondonTwo"} fontSize={18} color={STheme.color.darkGray} style={{ borderTopWidth: 1, borderColor: STheme.color.primary }} >TOTAL</SText>
                            <SText font={"LondonTwo"} fontSize={20} color={STheme.color.darkGray}>Bs. 100</SText>
                        </SView>

                        <SHr height={65} />
                        <SView col={"xs-12"} center>
                            <SText font={"LondonMM"} fontSize={18} center>
                                Su factura ha sido enviada al correo electrónico</SText>
                        </SView>
                        <SHr height={10} />
                        <Kolping.KButtom secondary onPress={() => {
                            SNavigation.navigate("/")
                        }} >IR A MIS TICKETS</Kolping.KButtom>
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
export default connect(initStates)(MensajePago);