import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class AgendaFichas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getCardDoctores({ url, nombre, especialidad, fecha, hora, fichas }) {
        return <SView col={"xs-12"} row height={70} style={{ borderWidth: 1, borderColor: STheme.color.primary, borderRadius: 8 }}
            backgroundColor={STheme.color.card}
            onPress={() => {
                //alert(title + '\n' + texto + '\n' + numero);
                this.props.navigation.navigate(url);
            }} row>
            <SView col={"xs-4"} center height >
                <SView style={{}}>
                    <SText font={"LondonTwo"} color={STheme.color.black} fontSize={15}>{nombre}</SText>
                    <SText font={"LondonBetween"} color={STheme.color.info} fontSize={14}>{especialidad}</SText>
                </SView>
            </SView>
            <SView col={"xs-4"} height center>
                <SView center col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SText color={STheme.color.darkGray} fontSize={12}>{fecha}</SText>
                    <SText color={STheme.color.text} fontSize={16}>{hora}</SText>
                </SView>

            </SView>
            <SView col={"xs-4"} center height>
                <SView center height={37} col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SText color={STheme.color.text} font={"LondonBetween"} fontSize={16}>( {fichas} )</SText>
                </SView>
            </SView>
        </SView>
    }
    getAgenda() {
        return <SView col={"xs-12"} center >
            <SHr height={10} />
            <SView col={"xs-12"} >
                {this.getCardDoctores({
                    url: "ficha/agendaPacientes",
                    nombre: 'Dr.Shah',
                    especialidad: 'Cardiología',
                    fecha: '07/01/2022',
                    hora: '09:00 AM',
                    fichas: '2 / 10'
                })}
                <SHr height={10} />
                {this.getCardDoctores({
                    url: "ficha/agendaPacientes",
                    nombre: 'Dr. Khan',
                    especialidad: 'Neorología',
                    fecha: '07/01/2022',
                    hora: '09:00 AM',
                    fichas: '10 / 10'
                })}
                <SHr height={10} />
                {this.getCardDoctores({
                    url: "ficha/agendaPacientes",
                    nombre: 'Dr. Lee',
                    especialidad: 'Psiquiatría',
                    fecha: '07/01/2022',
                    hora: '09:00 AM',
                    fichas: '8 / 10'
                })}
                <SHr height={20} />

                <SHr height={35} />
            </SView>
        </SView>
    }

    render() {
        return (
            <SPage title={'Agenda de Fichas'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={10} />
                    <SView col={"xs-12"} center row>
                        <SView center col={"xs-6"} height={35} center backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}
                            onPress={() => { }}>
                            <SText fontSize={16} font={"Roboto-Bold"} color={STheme.color.white}>Pendientes</SText>
                        </SView>
                        <SView col={"xs-6"} center height={35} style={{ borderBottomRightRadius: 8, borderTopRightRadius: 8, borderWidth: 1, borderColor: STheme.color.primary }}
                            onPress={() => { }}>
                            <SText fontSize={16} font={"Roboto-Bold"} color={STheme.color.primary}>Historial</SText>
                        </SView>
                    </SView>
                    <Kolping.KBuscador />
                    {this.getAgenda()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(AgendaFichas);