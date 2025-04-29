import React from "react";
import { SDate, SHr, SIcon, SLoad, SNavigation, SNotification, SPage, SText, STheme, SView } from "servisofts-component";
import SSocket from "servisofts-socket";
import { Container } from "../../Components";
import { FlatList } from "react-native";
import { getAllMedicos, getAllServicios, getMedico, getMedicoSinTurno, getTurnos } from "./Actions";
import MedicoItem from "./Components/MedicoItem";
import SelectFecha from "./Components/SelectFecha";
import NoData from "./Components/NoData";
import Config from "../../Config";





const RenderHoraItem = ({ item, medico, nrosuc, fecha }) => {
    const { CodEsp, CodMed, CodTur, ComTur, EstTur, FecHor, FecTur, HorTur, IdeCon, NomEsp, NomEst, NomMed, NroDia } = item;
    // Dias 1=Lunes 2=Martes 3=Miercoles 4=Jueves 5=Viernes 6=Sabado ?=Domingo

    // date.addDay(NroDia)
    let horarios = HorTur.split("-");
    let horaInicio = horarios[0];
    return <SView col={'xs-4'} padding={5} >
        <SView col={'xs-12'} center
            style={{
                borderRadius: 10,
                backgroundColor: STheme.color.card,
                alignItems: "flex-end",
                borderWidth: 1,
                borderColor: STheme.color.primary + "30",
            }}
            padding={6}
            onPress={() => {
                SNavigation.navigate("/ficha/servicios", {
                    codesp: CodEsp,
                    codmed: CodMed,
                    nrosuc: nrosuc,
                    codtur: CodTur,
                    comtur: ComTur,
                    fecha: fecha,
                    nomesp: NomEsp,
                    nommed: NomMed,
                    hortur: HorTur
                })
                // getAllServicios({
                //     nrosuc: nrosuc,
                //     codmed: CodMed+""
                // }).then(e=>{

                // }).catch(e=>{

                // })
            }} >
            <SView col={"xs-12"} row center>
                <SText fontSize={15} flex={1} font="LondonTwo" color={STheme.color.text} style={{ alignItems: "flex-end" }}>Ficha</SText>
                <SView width={8} />
                <SIcon flex={1} name={"flecha"} width={14} height={11} fill={STheme.color.primary} />
                <SView flex={1} style={{ alignItems: "flex-end" }}>
                    <SView style={{
                        width: 32,
                        height: 32,
                        borderRadius: 100,
                        backgroundColor: STheme.color.primary + "AA",
                        borderColor: STheme.color.primary,
                        borderWidth: 2,

                    }} center >
                        <SText font="LondonTwo" fontSize={13} color={STheme.color.secondary}>{CodTur}{ComTur}</SText>
                    </SView>
                </SView>
            </SView>
            <SView width={8} />
            <SHr height={3} />
            <SText fontSize={13} font="LondonBetween">{NomEsp}</SText>
            <SView flex />
            <SView row center>
                <SIcon name={"fhora"} width={15} height={15} fill={STheme.color.primary} />
                <SView width={4} />
                <SText fontSize={15} font="LondonTwo">{horaInicio}</SText>
            </SView>

        </SView>
    </SView>
}
export default class horarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: SNavigation.getParam("fecha", new SDate().toString("yyyy-MM-dd"))
        }
        this.codesp = SNavigation.getParam("codesp"); //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        this.codmed = SNavigation.getParam("codmed"); //key por navegador
    }

    static INSTANCE;


    componentDidMount() {
        if (!this.codmed || !this.nrosuc) return;
        horarios.INSTANCE = this;
        this.loadMedico().then(medico => this.setState({ medico })).catch(e => {
            SNotification.send({
                title: "No se pudo cargar el médico",
                body: "Intente nuevamente",
                color: STheme.color.danger,
                time: 5000
            })
            SNavigation.goBack();
        })
        this.loadTurnos().then(turnos_ => {
            // turnos = Object.entries(turnos).filter(([turnos]) => turnos.length > 0);
            // let turnos = Object.fromEntries(
            //     Object.entries(turnos_).filter((value) => value.length > 0)

            this.setState({ turnos: turnos_ })
        }).catch(e => {
            // );
            SNotification.send({
                title: "No se pudo cargar los turnos",
                body: "Intente nuevamente",
                color: STheme.color.danger,
                time: 5000
            })
            SNavigation.goBack();
        })
    }
    async loadMedico() {
        const medicos = await getMedicoSinTurno({ nrosuc: this.nrosuc, codmed: this.codmed, codesp: this.codesp })
        return medicos;
    }
    async loadTurnos() {

        const cdias = Config.rango_dias;

        // Crear arreglo de promesas
        const fecha = new SDate().addDay(cdias);
        const turnosFinal = await SSocket.sendPromise({
            component: "turno",
            type: "getAllV2",
            nrosuc: this.nrosuc,
            codmed: this.codmed,
            fecturIni: new SDate().toString("yyyy-MM-ddThh:mm:ss.000Z"),
            fecturFin: fecha.toString("yyyy-MM-ddT23:59:59.000Z")
        });

        const data = turnosFinal.data;
        let turnos = {};

        for (let i = 0; i <= cdias; i++) {

            let date = new SDate(this.state.fecha, "yyyy-MM-dd");
            date.addDay(i);
            let fecha = date.toString("yyyy-MM-dd");
            if (!turnos[fecha]) {
                turnos[fecha] = [];
            }

        }


        data.forEach((item) => {
            let fecha = item.FecTur.split("T")[0];
            if (!turnos[fecha]) {
                turnos[fecha] = [];
            }
            turnos[fecha].push(item);
        }
        );
        return turnos
        // this.setState({ medicos: medicos })
    }
    // async loadTurnos() {

    //     const array_fechas = new Array(MAXIMO_DIAS).fill(0).map((e, index) => {
    //         let date = new SDate(this.state.fecha, "yyyy-MM-dd");
    //         date.addDay(index);
    //         return date.toString("yyyy-MM-dd");
    //     })

    //     const fechas = {};

    //     const pares = await Promise.all(array_fechas.map(async (fecha) => {
    //         try {
    //             const resp = await getTurnos({ nrosuc: this.nrosuc, codmed: this.codmed, fecha });
    //             const limpio = resp.filter(item => item !== null);
    //             return [fecha, limpio];
    //         } catch (err) {
    //             console.error("Error cargando turnos para", fecha, err);
    //             return [fecha, []];
    //         }
    //     }));

    //     return Object.fromEntries(pares);
    // }



    renderDiasItem({ key, obj }) {
        // if(!obj) return null;
        let fecha = new SDate(key, "yyyy-MM-dd");
        const active = key == this.state.fecha;
        const disponible = obj.length > 0;
        const colorText = active ? STheme.color.secondary : STheme.color.text;
        return <SView width={90} height={100} center padding={5} o onPress={() => {
            this.setState({ fecha: key })
        }} style={{
            opacity: disponible ? 1 : 0.5,

        }}>
            <SView col={"xs-12"} flex center
                style={{
                    borderRadius: 13,
                    backgroundColor: active ? STheme.color.primary : STheme.color.card,
                    borderWidth: disponible ? 1 : 0,
                    borderColor: STheme.color.primary + "50",
                }}
            >
                <SHr height={8} />
                <SText height={25} font="LondonBetween" fontSize={15} color={colorText} style={{ textTransform: "uppercase", }} >{fecha.toString("DAY").substring(0, 3)}</SText>
                <SHr height={3} />
                <SView col={"xs-7"} style={{
                    borderBottomWidth: 1,
                    borderBottomColor: active ? STheme.color.white : STheme.color.lightGray,
                }} />
                <SHr height={8} />
                <SText height={25} font="LondonTwo" fontSize={26} color={colorText} >{fecha.toString("dd")}</SText>
                {/* <SText>{!disponible ? "Agotado" : ""}</SText> */}
                <SHr height={10} />
            </SView>
        </SView>
    }
    renderDias = () => {
        let fecha = new Date();

        return <>
            {/* <SView col={"xs-12 sm-10 md-8"} row > */}
            <FlatList
                data={Object.keys(this.state.turnos ?? {}).sort((a, b) => {
                    return new Date(a) - new Date(b);
                })}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return this.renderDiasItem({ key: item, obj: this.state.turnos[item] })
                }}
            />
        </>
    }
    RenderHoras = () => {
        if (!this.state.medico) return null;
        // const { CodMed, NomMed, TitMed, TurMed, turnos } = this.state.medico
        // console.log("turnos", turnos)
        if (!this.state.turnos) return <SLoad />
        const turnos = this.state.turnos[this.state.fecha];
        if (turnos?.length === 0) return <NoData mensaje={"No tenemos horarios habilitados en este momento."} />
        console.log(turnos)

        return <SView col={"xs-12"} center row>
            <FlatList
                style={{}}
                contentContainerStyle={{
                    // minWidth: "100%",
                }}
                data={turnos}
                // horizontal={true} // Esto hace que los items estén en línea horizontal
                numColumns={3} // Esto hace que los items estén en línea horizontal
                // showsHorizontalScrollIndicator={false} // Oculta el scroll horizontal
                // ItemSeparatorComponent={() => <SView width={8} height={8} />}
                renderItem={({ item, index }) => <RenderHoraItem item={item} medico={this.state.medico} nrosuc={this.nrosuc} fecha={this.state.fecha} />}
            />
        </SView>
    }


    renderFechas = () => {

        // let fecha = new Date();
        let formato = new Intl.DateTimeFormat('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            // year: 'numeric'
        }).format(new SDate(this.state.fecha, "yyyy-MM-dd").date);
        return <SView center col={"xs-12"} style={{
            borderBottomWidth: 1,
            borderBottomColor: STheme.color.primary,
        }}  >
            <SText font="LondonMM" fontSize={20} bold>Fechas disponibles</SText>
            <SHr height={10} />
            <SView col={"xs-12"} style={{
                borderBottomWidth: 1,
                borderBottomColor: STheme.color.primary,
            }} />
            <SHr height={10} />
            <SView col={"xs-12"} >
                <SHr height={8} />
                <SText font="LondonBetween" justify fontSize={20} style={{ textTransform: "capitalize" }} >{formato}</SText>
                <SHr height={8} />
                {this.renderDias()}
            </SView>
            <SHr height={15} />
        </SView>
    }
    allHorario = () => {
        let dataAllHorario = this.state.medico?.TurMed;
        if (!dataAllHorario) return null;
        if (dataAllHorario.length <= 0) return null;
        let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        return <>
            <SView col={"xs-12"} >
                <SText col={"xs-12"} fontSize={15} font="LondonBetween" >Horarios normales de atención</SText>
                <SHr height={5} />
                <FlatList
                    style={{
                        // width: "100%",
                    }}
                    data={dataAllHorario.sort((a, b) => {
                        return new Date(a) - new Date(b);
                    })}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        (index == dataAllHorario.length - 1) ? esUltimo = true : esUltimo = false;
                        // return this.renderDiasItem({ key: item, obj: this.state.turnos[item] })
                        console.log("index", index)
                        console.log("esUltimo", esUltimo)
                        return <SView padding={8}
                            style={{
                                borderRightWidth: esUltimo ? 0 : 1,
                                borderRightColor: STheme.color.darkGray + "30",
                            }} >
                            <SText fontSize={13} font="LondonBetween" color={STheme.color.primary} >{diasSemana[item?.NroDia]}</SText>
                            <SView col={"xs-12"} style={{
                                alignItems: "flex-end",
                            }} >
                                <SText fontSize={14} font="LondonBetween" color={STheme.color.text} >De {item?.TurIni}</SText>
                                <SText fontSize={14} font="LondonBetween" color={STheme.color.text} >a {item?.TurFin}</SText>
                            </SView>
                        </SView>
                    }}
                />
            </SView>
        </>
    }

    render() {
        console.log("medico")
        console.log(this.state.medico)
        return <SPage title={"Horarios"}>
            <Container loading={!this.state.medico}>
                {/* <SelectFecha defaultValue={this.state.fecha} onChange={(e) => {
                    if (this.state.fecha == e) return;
                    this.state.fecha = e;
                    this.setState({ medico: null })
                    this.componentDidMount();
                }} /> */}
                <SHr height={10} />
                <SHr />
                <MedicoItem medico={this.state.medico} />
                <SHr />
                {this.allHorario()}
                <SHr />
                <SHr />
                {this.renderFechas()}
                <SHr height={10} />

                <SHr />
                <SText col={"xs-12"} justify font="LondonMM" fontSize={18} bold>Seleccione turno</SText>
                <SHr />
                {this.RenderHoras({ medico: this.state.medico, nrosuc: this.nrosuc })}
                <SHr height={25} />
            </Container>
        </SPage >;
    }
}