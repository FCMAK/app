import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'

class HorarioDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.key_doctor = SNavigation.getParam("key"); //key por navegador
        this.key_sucursal = SNavigation.getParam("keysuc"); //key por navegador
    }
    getDia(dia, diastr) {
        return <SView width={80} height={90} center style={{ backgroundColor: (this.state.dia == dia ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}
            onPress={() => {
                this.setState({
                    dia: dia
                })
            }}>
            <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
            <SHr height={10} />
            <SText font={"LondonBetween"} fontSize={14} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText>
        </SView>
    }
    getHora(hora) {
        var isSelect = false;
        return <SView col={"xs-4"} center style={{ padding: 5 }}
            onPress={() => {
                this.setState({
                    hora: hora
                })
            }}>
            <SView col={"xs-12"} center height={40} style={{ backgroundColor: (this.state.hora != hora ? STheme.color.card : STheme.color.primary), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}>
                <SText font={"LondonTwo"} fontSize={14} color={(this.state.hora != hora ? STheme.color.text : STheme.color.secondary)} >{hora}</SText>
            </SView>
        </SView>
    }
    render() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        var dataDoctor = data[this.key_doctor];
        var data2 = Especialidad_.Actions.getAll(this.props);
        if (!data2) return <SLoad />;
        var dataEspecialidad = data2[dataDoctor.smmed_cesp];
        return (
            <SPage title={'Seleccione su horario'} center >
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SView col={"xs-12"} row>
                        <SHr height={10} />
                        <SView col={"xs-3"} center height >
                            <SView width={60} height={60} style={{ borderRadius: 20 }}>
                                <SImage src={SSocket.api.root + Parent.component + "/" + this.key_doctor} style={{
                                    borderRadius: 30,
                                    resizeMode: "cover"
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-9"} height >
                            <SHr height={5} />
                            <SText font={"LondonTwo"} color={STheme.color.black} fontSize={24}>{dataDoctor?.smmed_dmed}</SText>
                            <SView col={"xs-12"} row >
                                <SView col={"xs-12"} >
                                    <SText font={"LondonBetween"} color={STheme.color.info} fontSize={18}>{dataEspecialidad?.smtur_desp}</SText>
                                </SView>
                            </SView>
                            <SHr height={5} />
                        </SView>
                    </SView>
                    <SHr height={30} />
                    <SView col={"xs-12"} center style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >Fecha disponible</SText>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >{this.state.fecha.toString("MONTH, yyyy")}</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} height={110}>
                            <SScrollView2>
                                <SView center row>

                                    {/* {this.getDia(17, "LU")}
                                    <SView width={10} /> */}
                                    {this.getDia(18, "MA")}
                                    <SView width={10} />
                                    {this.getDia(19, "MI")}
                                    <SView width={10} />
                                    {this.getDia(20, "JU")}
                                    <SView width={10} />
                                    {this.getDia(21, "VI")}
                                    {/* <SView width={10} />
                                    {this.getDia(22, "SA")}
                                    <SView width={10} />
                                    {this.getDia(23, "DO")}
                                    <SView width={10} />
                                    {this.getDia(24, "LU")}
                                    <SView width={10} /> */}


                                </SView>
                            </SScrollView2>
                        </SView>
                        <SHr height={20} />
                    </SView>


                    <SHr height={25} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >Hora disponible</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} row center>
                            {this.getHora("09:00 AM")}
                            {this.getHora("09:30 AM")}
                            {this.getHora("10:00 AM")}
                            {this.getHora("10:30 AM")}
                            {this.getHora("11:00 AM")}
                            {this.getHora("11:30 AM")}
                            {this.getHora("02:00 PM")}
                            {this.getHora("02:30 PM")}
                            {this.getHora("03:00 PM")}
                            {/* {this.getHora("03:30 PM")}
                            {this.getHora("04:00 PM")}
                            {this.getHora("04:30 PM")} */}
                        </SView>
                        <SHr height={20} />
                    </SView>

                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <Kolping.KButtom secondary onPress={() => {
                            if (!this.state.dia || !this.state.hora) {
                                SPopup.alert("Debe seleccionar el día y la hora para su consulta!")
                                return;
                            }
                            SNavigation.navigate("ficha/paciente", { key: this.key_doctor, fecha: this.state.fecha.toString("yyyy-MM"), dia: this.state.dia, hora: this.state.hora, keysuc: this.key_sucursal })
                        }}  >COMPRAR TICKETS</Kolping.KButtom>
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
export default connect(initStates)(HorarioDoctor);