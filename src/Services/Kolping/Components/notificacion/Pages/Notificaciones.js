import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad, SView, SIcon , STheme} from 'servisofts-component';
// import Parent from '../index'
// import Kolping from '../../../../../Components/Kolping';
class Notificaciones extends Component {
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
            <SPage title={'Notificaciones'} center>
                <SView flex center col={"xs-12"}>
                    <SView col={"xs-11 md-6 xl-4"} >
                        <SHr height={30} />
                        <SText color={STheme.color.info} fontSize={20} font={"LondonTwo"}>Tus Notificaciones</SText>
                        <SText color={STheme.color.text} fontSize={16} font={"LondonTwo"}>Tienes 3 notificaciones sin leer:</SText>
                        {this.getLista()}

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
export default connect(initStates)(Notificaciones);