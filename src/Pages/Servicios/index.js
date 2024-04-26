import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, SView, STheme } from 'servisofts-component';
import LogoAnimado from '../CargaPage/LogoAnimado';
import Usuario from '../Usuario';
class Servicios extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getDato({ title }) {
        return <SView col={"xs-12"} row onPress={() => {

        }}>
            <SView col={"xs-12"} height={12}></SView>
            <SView col={"xs-12"} backgroundColor="#EEEEEE" height={55} row style={{ borderRadius: 8 }}>
                <SView><SIcon name={'IconLogo'} width={25} /></SView>
                <SView width={15}></SView>
                <SView center>
                    <SText color={STheme.color.black} fontFamily="LondonTwo" fontSize={18}>{title} </SText>
                </SView>
                <SView style={{right:10, position: "absolute", top:13}}><SIcon name={'flecha1'} width={30} fill="#DE5738" /></SView>
            </SView>
        </SView>
    }

    getLista() {
        return <SView style={{
            top: 20
        }}>
            {this.getDato({ title: 'Inyectables' })}
            {this.getDato({ title: 'Colocación de suero' })}
            {this.getDato({ title: 'Colocación y retiro de sonda' })}
            {this.getDato({ title: 'Test de embarazo en orina' })}
            {this.getDato({ title: 'Curaciones' })}
            {this.getDato({ title: 'Retiro de puntos' })}
            {this.getDato({ title: 'Medida de presión' })}
            {this.getDato({ title: 'Control de glicemia' })}
            {this.getDato({ title: 'Nebulizaciones' })}
            {this.getDato({ title: 'Extracción de uñero' })}

        </SView>
    }

    render() {
        // if (Usuario.Actions.getUsuarioLogueado(this.props)) {
        //     SNavigation.replace("inicio");
        //     return null;
        // }
        return (
            <SPage title="Comprar Ficha">
                <SView center col={"xs-12"}>
                    <SView col={"xs-11 md-6 xl-4"} height={200} >
                        <SHr height={10} />
                        {this.getLista()}
                        <SHr height={60} />
                    </SView>
                    <SHr height={48} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Servicios);