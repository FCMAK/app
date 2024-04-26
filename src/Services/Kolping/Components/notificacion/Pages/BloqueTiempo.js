import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad, SView, SIcon, STheme } from 'servisofts-component';
// import Parent from '../index'
// import Kolping from '../../../../../Components/Kolping';
class BloqueTiempo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    getDato({ svg, title, desc, hora }) {
        return <SView col={"xs-12"} row onPress={() => {

        }}>
            <SView col={"xs-12"} height={20}></SView>
            <SView col={"xs-3"} center>
                <SIcon fill="#666666" name={svg} height={70} width={70} />
            </SView>
            <SView col={"xs-9"}>
                <SText color={STheme.color.primary} fontSize={15}>{title}</SText>
                <SText color={STheme.color.text} fontSize={12}>{desc} </SText>
                <SText color={STheme.color.text}>Horas {hora} </SText>
                <SText style={{ textAlign: 'right' }} fontSize={12} color={STheme.color.black}>15 de noviembre 2021 </SText>
            </SView>
            <SView col={"xs-12"} height={20} style={{ borderBottomWidth: 1, borderColor: STheme.color.info }}></SView>
        </SView>
    }

    getLista() {
        return <SView style={{
            // top: 20
        }}>
            {this.getDato({ svg: "senfermeria", title: 'Compra de ficha - ENFERMERÍA', desc: "En 40 minutos tiene una cita médica pendiente.", hora: "10:30 AM" })}
            {this.getDato({ svg: "svacunacion", title: 'Compra de ficha - VACUNACIÓN', desc: "En 40 minutos tiene una cita médica pendiente.", hora: "10:30 AM" })}
            {this.getDato({ svg: "soptica", title: 'Compra de ficha - ÓPTICA', desc: "En 40 minutos tiene una cita médica pendiente.", hora: "10:30 AM" })}

        </SView>
    }


    render() {
        return (
            // <SPage title={'Notificaciones'} center>
            <SView flex center col={"xs-12"} backgroundColor={STheme.color.card}>
                <SHr height={10} />
                <SText color={STheme.color.text} fontSize={15} font={"LondonBetween"}>Tiempo para la cita</SText>
                <SHr height={10} />
                <SView col={"xs-12"} row >
                    <SView col={"xs-7"} >

                    </SView>
                    <SView col={"xs-5"} >
                        <SText color={STheme.color.text} fontSize={14} font={"LondonMM"}>Paciente: María Ángela</SText>
                        <SText color={STheme.color.info} fontSize={14} font={"LondonMM"}>CARDIOLOGÍA <SText color={STheme.color.text} >(Dr.Shah)</SText></SText>
                        <SText color={STheme.color.primary} fontSize={14} font={"LondonMM"}>28/01/2022</SText>
                        <SView col={"xs-12"} row style={{ marginTop: 10 }}>
                            
                        </SView>
                    </SView>
                </SView>
                {/* {this.getLista()} */}
                <SHr height={10} />
            </SView>
            // </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(BloqueTiempo);