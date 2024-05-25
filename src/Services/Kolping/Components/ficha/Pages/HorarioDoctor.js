import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'
import Container from '../../../../../Components/Container';

class HorarioDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.codesp = SNavigation.getParam("codesp"); //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        this.codmed = SNavigation.getParam("codmed"); //key por navegador
    }

    componentDidMount() {
        SSocket.sendPromise({
            component: "medico",
            type: "getAll",
            codesp: this.codesp,
            nrosuc: this.nrosuc
            //   key_usuario: Model.usuario.Action.getUsuarioLog()?.key,
            //   key_empresa: Model.empresa.Action.getSelect()?.key,
        }).then(a => {
            console.log(a?.data)
            this.setState({ dataDoctor: a.data })
        }).catch(e => {
            console.log(e)
        })


    }

    getDia_(dia, diastr) {
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
    getDia(dia, diastr, nroDia) {
        return <SView style={{ padding: 5 }}>
            <SView width={80} height={90} center style={{ backgroundColor: (this.state.dia == dia ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}
                onPress={() => {
                    this.setState({
                        dia: dia
                    })
                    this.setState({
                        horas: dia
                    })
                    this.setState({
                        nroDia: nroDia
                    })
                }}>
                <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
                <SHr height={10} />
                <SText font={"LondonBetween"} fontSize={14} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText>
            </SView>
        </SView>
    }
    getHora_(hora) {
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
    getHora(horaIni, horaFin, dia, desTur) {
        var isSelect = false;
        return <SView col={"xs-11 sm-8 md-8 lg-8 xl-8 xxl-8"} center style={{ padding: 10 }}
            onPress={() => {
                this.setState({
                    // horaIni: horaIni
                })
            }}>
            <SView col={"xs-12"} center height={70} style={{ backgroundColor: (this.state.horaIni != horaIni ? STheme.color.card : STheme.color.primary), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}>
                {desTur != "" ? <SText font={"LondonBetween"} fontSize={16} >{desTur}</SText> : <SText font={"LondonBetween"} fontSize={16} >Atención por orden de llegada</SText>}
                <SHr height={4} />
                <SText font={"LondonTwo"} fontSize={18} color={(this.state.horaIni != horaIni ? STheme.color.text : STheme.color.secondary)} >{horaIni} - {horaFin}</SText>
            </SView>
        </SView>
    }
    getWeekDates(date) {
        // Convertir a objeto Date si se proporciona una cadena
        if (typeof date === 'string') {
            date = new Date(date);
        }

        // Obtener el día de la semana (0 es domingo, 1 es lunes, etc.)
        const day = date.getDay();

        // Calcular cuántos días retroceder para llegar al lunes
        const diffToMonday = (day === 0 ? -6 : 1) - day;

        // Crear una nueva fecha para el lunes
        const monday = new Date(date);
        monday.setDate(date.getDate() + diffToMonday);

        // Lista para almacenar las fechas de la semana
        const weekDates = [];

        // Agregar los 7 días de la semana a la lista
        for (let i = 0; i < 7; i++) {
            const dayDate = new Date(monday);
            dayDate.setDate(monday.getDate() + i);
            weekDates.push(dayDate);
        }

        return weekDates;
    }

    getTurnosDias(TurMed) {
        if (!TurMed) return null;
        var dias = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]
        console.log("TurMed", TurMed)
        return TurMed.map((dia) => {
            // console.log("dia", dia)
            var diastr = dias[dia.NroDia]
            var now = new Date()
            var nroDia = dia.NroDia - 1
            // var day = this.getWeekDates(now).find(a => a.getDay() == dia)
            var day = this.getWeekDates(now)
            var dayOk = day[nroDia]
            console.log("dayOk", dayOk)
            console.log("diastr", diastr)

            return this.getDia(dayOk.getDate(), diastr, dia.NroDia)
        })
    }
    getHoras(TurMed) {
        if (!TurMed) return null;
        var TurMed_ = TurMed.filter(a => a.NroDia == this.state.nroDia)
        return TurMed_.map((dia) => {
            // return this.getDia(dayOk.getDate(), diastr)
            return <SView col={"xs-12"} >
                {/* <SView col={"xs-12"} >
                    {dia.DesTur != "" ? <SText font={"LondonBetween"} fontSize={14} >Descripción de Turno: {dia.DesTur}</SText> : <SText font={"LondonBetween"} fontSize={14} >Descripción de Turno: Por favor, tenga en cuenta que la atención en nuestra clínica se ofrece por orden de llegada.</SText>}
                    <SHr height={20} />
                </SView> */}
                <SView col={"xs-12"} center>
                    {this.getHora(dia.TurIni, dia.TurFin, dia.NroDia, dia.DesTur)}
                </SView>
            </SView>

        })
    }
    render() {
        let dataDoctor = []
        if (!this.state.dataDoctor) return <SLoad />;
        console.log("dataaaa", this.state.dataDoctor)

        // var data = Parent.Actions.getAll(this.props, { codesp: this.codesp, nrosuc: this.nrosuc });
        // if (!data) return <SLoad />;
        // // var dataDoctor = data.find(a => a.CodMed == this.codmed);

        var data = this.state.dataDoctor;
        // var dataDoctor = data[this.codmed]
        dataDoctor = data.find(a => a.CodMed == this.codmed);

        var b = 0;

        dataDoctor.TurMed.length === 0 ? b = 1 : null

        // var data2 = Especialidad_.Actions.getAll(this.props, { nrosuc: this.nrosuc });
        // if (!data2) return <SLoad />;
        // // var dataEspecialidad = data2[dataDoctor.smmed_cesp];
        var dataEspecialidad = {}
        return (
            <SPage title={'Seleccione su horario'}  >
                <Container >
                    <SView col={"xs-12"} row >
                        <SHr height={10} />
                        <SView col={"xs-3"} height >
                            <SView width={60} height={60} style={{ borderRadius: 50, borderWidth: 1, borderColor: STheme.color.primary }} center>
                                <SImage src={SSocket.api.root + Parent.component + "/" + this.key_doctor} style={{
                                    borderRadius: 30,
                                    resizeMode: "cover"
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-9"} height >
                            <SHr height={5} />
                            {/* <SText font={"LondonTwo"} color={STheme.color.black} fontSize={24}>{dataDoctor?.smmed_dmed}</SText> */}
                            <SText font={"LondonTwo"} color={STheme.color.black} fontSize={24}>{dataDoctor?.TitMed} {dataDoctor?.NomMed}</SText>
                            <SView col={"xs-12"} row >
                                <SView col={"xs-12"} >
                                    <SText font={"LondonBetween"} color={STheme.color.info} fontSize={18}>{dataEspecialidad?.smtur_desp}</SText>
                                </SView>
                            </SView>
                            <SHr height={5} />
                        </SView>
                    </SView>

                    <SHr height={20} />
                    <SView col={"xs-12"} center style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >Fechas disponibles</SText>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >{this.state.fecha.toString("MONTH, yyyy")}</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} height={110}>
                            <SScrollView2>
                                <SView center row>
                                    {b === 1 ? <SText font={"LondonBetween"} fontSize={16} color={STheme.color.text} >No hay fechas disponibles</SText> : null}
                                    {this.getTurnosDias(dataDoctor?.TurMed)}

                                    {/* {this.getDia_(18, "MA")}
                                    <SView width={10} />
                                    {this.getDia_(19, "MI")}
                                    <SView width={10} />
                                    {this.getDia_(20, "JU")}
                                    <SView width={10} />
                                    {this.getDia_(21, "VI")} */}

                                </SView>
                            </SScrollView2>
                        </SView>
                        <SHr height={20} />
                    </SView>


                    <SHr height={25} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >Hora disponible</SText>
                        <SHr height={15} />
                        <SView col={"xs-12"} row center>
                            {b === 1 ? <SText font={"LondonBetween"} fontSize={16} color={STheme.color.text} >No hay horarios disponibles</SText> : null}
                            {/* {!this.state.dia ? <SText font={"LondonBetween"} fontSize={16} color={STheme.color.text} >Seleccione una fecha</SText> : null} */}
                            {(this.state.horas) ? this.getHoras(dataDoctor?.TurMed) : null}

                            {/* {this.getHora("09:00 AM")}
                            {this.getHora("09:30 AM")}
                            {this.getHora("10:00 AM")}
                            {this.getHora("10:30 AM")}
                            {this.getHora("11:00 AM")}
                            {this.getHora("11:30 AM")}
                            {this.getHora("02:00 PM")}
                            {this.getHora("02:30 PM")}
                            {this.getHora("03:00 PM")} */}


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
                </Container >
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(HorarioDoctor);