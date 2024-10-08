import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SMath, SList } from 'servisofts-component';
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
            fechaCercana: null,
            turno: {},
            // nroDia: null,
        };
        this.codesp = SNavigation.getParam("codesp"); //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        this.codmed = SNavigation.getParam("codmed"); //key por navegador
        // this.dataSelect = SNavigation.getParam("dataSelect"); //key por navegador
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
            let today = this.state.fecha.toString("yyyy-MM-ddThh:mm:ss");
            console.log(today)
            // today.setDate(today.getDate() - 1);

            SSocket.sendPromise({
                component: "turno",
                type: "getAll",
                // codesp: this.codesp,
                // codesp: this.codesp,
                nrosuc: this.nrosuc,
                // nrosuc: "0",
                codmed: this.codmed,
                // codmed: "3",
                // fectur: new SDate().toString("yyyy-MM-ddT04:00:00.000Z")
                // fectur: new SDate().toString("yyyy-MM-ddTHH:mm:ss")
                // fectur: today.toISOString()
                //2024-09-27T12:06:00
                fectur: today

                // fectur: "2024-09-27T07:00:00.000Z"
                //   key_usuario: Model.usuario.Action.getUsuarioLog()?.key,
                //   key_empresa: Model.empresa.Action.getSelect()?.key,
            }).then(a => {
                // console.log(a?.data)
                this.setState({ dataDoctorTurno: a.data })
            }).catch(e => {
                console.log(e)
            })


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
    getDia({ dia, diastr, nroDia, fechaCercana, date }) {
        fechaCercana ? this.state.nroDia = nroDia : null
        fechaCercana ? this.state.fechaCercana = fechaCercana : null

        // fechaCercana ? this.state.date = fechaCercana : null

        this.state.dia ? fechaCercana = null : null
        return <SView style={{ padding: 5 }}>
            <SView width={80} height={90} center style={{ backgroundColor: (this.state.dia == dia ? STheme.color.primary : fechaCercana ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}
                // {/* <SView width={80} height={90} center style={{ backgroundColor: (fechaCercana ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }} */}
                onPress={() => {
                    console.log(date)

                    this.state.dia = dia;
                    this.state.horas = dia;
                    this.state.nroDia = nroDia;
                    this.state.fecha = new SDate(fechaCercana);
                    this.setState({
                        ...this.state
                    })
                    this.componentDidMount();
                }}>
                <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : fechaCercana ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
                {/* <SText font={"LondonTwo"} fontSize={24} color={(fechaCercana ? STheme.color.secondary : STheme.color.text)} >{dia}</SText> */}
                <SHr height={10} />
                <SText font={"LondonBetween"} fontSize={14} color={(this.state.dia == dia ? STheme.color.secondary : fechaCercana ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText>
                {/* <SText font={"LondonBetween"} fontSize={14} color={(fechaCercana ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText> */}
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
        // console.log("TurMed", TurMed)
        var minDiff = new Date();
        var fechaCercana;
        return <SList
            // data={Object.values(data_actividad ?? 0).sort((a, b) => a.index != b.index ? (a.index > b.index ? 1 : -1) : (new SDate(a.fecha_on,"yyyy-MM-ddThh:mm:ss").getTime() > new SDate(b.fecha_on,"yyyy-MM-ddThh:mm:ss").getTime() ? 1 : -1))}
            data={TurMed}
            center
            horizontal={true}
            // order={[{ key: "index", order: "asc", peso: 1 }]}
            render={(dia, key) => {
                var diastr = dias[dia.NroDia]
                var now = new Date()
                var nroDia = dia.NroDia - 1
                var day = this.getWeekDates(now)
                var dayOk = day[nroDia]

                var currentDate = now;
                var currentDiff = Math.abs(dayOk - currentDate);

                if (dayOk >= currentDate) {
                    // console.log("currentDate", currentDate)
                    if (currentDiff <= minDiff) {
                        minDiff = currentDiff;
                        fechaCercana = new Date(dayOk);
                        this.state.fechaCercana = fechaCercana
                        this.state.nroDia = dia.NroDia
                    } else {
                        fechaCercana = null;
                    }
                }


                // return this.getDia(dayOk.getDate(), diastr, dia.NroDia, fechaCercana, dayOk)
                return this.getDia({
                    dia: dayOk.getDate(),
                    diastr: diastr,
                    nroDia: dia.NroDia,
                    fechaCercana: fechaCercana,
                    date: dayOk

                })
            }}
        />
        // return TurMed.map((dia, index) => {
        //     var diastr = dias[dia.NroDia]
        //     var now = new Date()
        //     var nroDia = dia.NroDia - 1
        //     var day = this.getWeekDates(now)
        //     var dayOk = day[nroDia]

        //     var currentDate = now;
        //     var currentDiff = Math.abs(dayOk - currentDate);

        //     if (dayOk >= currentDate) {
        //         if (currentDiff < minDiff) {
        //             minDiff = currentDiff;
        //             fechaCercana = new Date(dayOk);
        //         } else {
        //             fechaCercana = null;
        //         }
        //     }

        //     return this.getDia(dayOk.getDate(), diastr, dia.NroDia, fechaCercana, dayOk)
        // })
    }
    getHoras(TurMed, TurMedCorrecto) {
        // console.log("TURMED", TurMed)
        // console.log("TURMEDCORRECTO", TurMedCorrecto)
        if (!TurMed) return <SLoad />;
        // console.log("this.state.nroDiaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        // console.log(this.state.nroDia)

        var TurMed_ = TurMed.filter(a => a.NroDia == this.state.nroDia)
        return TurMed_.map((dia) => {
            this.state.turno = dia
            return <SView col={"xs-12"} >
                <SView col={"xs-12"} center>
                    {this.getHora(dia.TurIni, dia.TurFin, dia.NroDia, dia.DesTur)}
                </SView>
            </SView>

        })
    }
    render() {
        let dataDoctor = []
        if (!this.state.dataDoctor) return <SLoad />;

        // var data = Parent.Actions.getAll(this.props, { codesp: this.codesp, nrosuc: this.nrosuc });
        // if (!data) return <SLoad />;
        // // var dataDoctor = data.find(a => a.CodMed == this.codmed);

        var data = this.state.dataDoctor;
        dataDoctor = data.find(a => a.CodMed == this.codmed);

        var b = 0;

        dataDoctor.TurMed.length === 0 ? b = 1 : null

        var dataEspecialidad = {}
        // console.log("dataDoctorTurno")
        // console.log(this.state.dataDoctorTurno)


        return (
            <SPage title={'Seleccione su horario'}  >
                <Container >
                    <SView col={"xs-12"} row >
                        <SHr height={10} />
                        <SView col={"xs-3"} height >
                            <SView width={60} height={60} style={{ borderRadius: 50, borderWidth: 1, borderColor: STheme.color.primary, backgroundColor: STheme.color.card }} center>
                                <SImage src={SSocket.api.root + Parent.component + "/" + this.key_doctor} style={{
                                    borderRadius: 30,
                                    resizeMode: "cover"
                                }} enablePreview />
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
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }} >
                        <SText font={"LondonBetween"} fontSize={20} >{this.state.fecha.toString("MONTH, yyyy")}</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} height={110} center style={{ alignItems: "center", alignContent: "center" }}>
                            {b === 1 ? <SText font={"LondonBetween"} fontSize={16} color={STheme.color.text} >No hay fechas disponibles</SText> : null}
                            {this.getTurnosDias(dataDoctor?.TurMed)}
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

                            {/* {(this.state.horas) ? this.getHoras(dataDoctor?.TurMed) : null} */}
                            {this.getHoras(dataDoctor?.TurMed, this.state.dataDoctorTurno)}


                        </SView>
                        <SHr height={20} />
                    </SView>

                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        {/* <SText>{JSON.stringify(this.dataSelect, "\n", "\t")}</SText> */}
                        {(this.state.nroDia) ? <Kolping.KButtom secondary onPress={() => {
                            // SNavigation.navigate("ficha/paciente", { codmed: this.codmed, fecha: this.state.date, nrosuc: this.nrosuc, codesp: this.codesp })
                            SNavigation.navigate("ficha/paciente/buscar", { codmed: this.codmed, fecha: this.state.date, nrosuc: this.nrosuc, codesp: this.codesp, nav: 2, turno: this.state.turno })
                        }}  >COMPRAR TICKETS</Kolping.KButtom> : null}

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