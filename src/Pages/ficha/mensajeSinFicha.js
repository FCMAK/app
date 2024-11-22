import React, { Component } from 'react';
import { connect } from 'react-redux';


import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import { Container } from '../../Components';

class mensajeSinFicha extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<SPage title={'Sin Fichas'} >
            <Container>
                <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center >
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }} center  >
                        <SView col={"xs-12"} center  >
                            <SText font={"LondonMM"} bold center fontSize={24} color={STheme.color.text}>No tienes fichas de atención adquiridas</SText>
                            <SHr height={30} />
                            <SText center fontSize={20} color={'#666666'} font='LondonMM'>Por favor, realiza la compra de una ficha para continuar con el proceso.</SText>
                            {/* <SText center fontSize={18} color={'#666666'}>¡El Centro Médico está siempre a mano!</SText> */}
                        </SView>
                        <SHr height={50} />
                        <SView col={"xs-12"} center height={350}>
                            <SIcon name={"enfermeraFicha"} />
                        </SView>
                        <SHr height={50} />
                        <Kolping.KButtom primary onPress={() => {
                            SNavigation.navigate("/ficha")
                        }}>COMPRAR FICHA</Kolping.KButtom>
                        <SHr height={30} />
                    </SView>
                </SView>
            </Container>
        </SPage >);
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(mensajeSinFicha);