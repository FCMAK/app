import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_sucursal = SNavigation.getParam("keysuc"); //key por navegador
    }

    render() {
        return (
            <SPage title={'Comprar Ficha'} center disableScroll>
                <SView col={"xs-12"} style={{
                    right: "-20%",
                    top: "13%",
                    position: "absolute",
                }} center>
                    <SView style={{
                        width: 300,
                        height: 500,
                    }}>
                        <SIcon name={`Enfermera17`} width={"100%"} fill={"#f0f"} />
                    </SView>
                </SView>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} height >
                    <SHr height={30} />
                    <SView col={"xs-12"} height={100}>
                        <SText font={"LondonBetween"} fontSize={20}>Para la compra de su ficha puede elegir el método que sea más cómodo:</SText>
                    </SView>
                    <SView col={"xs-8 "} height={350} center>
                        <SHr height={50} />
                        {/* <SView onPress={() => {
                            SNavigation.navigate("ficha/centros")
                        }} col={"xs-11"} row backgroundColor={STheme.color.card} style={{ borderRadius: 8, borderLeftWidth: 10, borderColor: STheme.color.info }} height={80} center>
                            <SView col={"xs-9.8"} ><SText center font={"LondonTwo"} fontSize={17}>CENTROS MÉDICOS</SText></SView>
                            <SView col={"xs-2.2"} style={{ textAlign: "right" }} ><SIcon name={"flecha1"} width={33} fill={"#018992"}  /></SView>
                        </SView>
                        <SHr height={20} /> */}
                        <SView onPress={() => {
                            SNavigation.navigate("ficha/listaEspecialidad", { keysuc: this.key_sucursal ? this.key_sucursal : null })
                        }} col={"xs-11"} row backgroundColor={STheme.color.card} style={{ borderRadius: 8, borderLeftWidth: 10, borderColor: STheme.color.info }} height={80} center>
                            <SView col={"xs-9.8"} ><SText center font={"LondonTwo"} fontSize={17}>ESPECIALIDADES</SText></SView>
                            <SView col={"xs-2.2"} style={{ textAlign: "right" }} ><SIcon name={"flecha1"} width={33} fill={"#018992"} /></SView>
                        </SView>
                        <SHr height={20} />
                        <SView onPress={() => {
                            SNavigation.navigate("ficha/listaDoctores", { keysuc: this.key_sucursal ? this.key_sucursal : null })
                        }} col={"xs-11"} row backgroundColor={STheme.color.card} style={{ borderRadius: 8, borderLeftWidth: 10, borderColor: STheme.color.info }} height={80} center>
                            <SView col={"xs-9.8"} ><SText center font={"LondonTwo"} fontSize={17}>MÉDICOS</SText></SView>
                            <SView col={"xs-2.2"} style={{ textAlign: "right" }} ><SIcon name={"flecha1"} width={33} fill={"#018992"} /></SView>
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
export default connect(initStates)(Inicio);