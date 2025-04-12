import React from "react";
import { SDate, SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";
import SSocket from "servisofts-socket";
import { Container } from "../../Components";
import { FlatList } from "react-native";
import { getAllMedicos, getAllServicios, getMedico } from "./Actions";
import MedicoItem from "./Components/MedicoItem";
import SelectFecha from "./Components/SelectFecha";
import NoData from "./Components/NoData";


const loadTurnos = async ({ nrosuc, codmed, sdate }) => {
    const resp = await SSocket.sendPromise({
        component: "turno",
        type: "getAll",
        nrosuc: nrosuc,
        fectur: sdate.toString("yyyy-MM-ddThh:mm:ss")
    })
    return resp.data;
}





const RenderHoraItem = ({ item, medico, nrosuc, fecha }) => {
    const { CodEsp, CodMed, CodTur, ComTur, EstTur, FecHor, FecTur, HorTur, IdeCon, NomEsp, NomEst, NomMed, NroDia } = item;
    // Dias 1=Lunes 2=Martes 3=Miercoles 4=Jueves 5=Viernes 6=Sabado ?=Domingo

    // date.addDay(NroDia)
    let horarios = HorTur.split("-");
    let horaInicio = horarios[0];
    return <SView col={'xs-4'} padding={5} >
        <SView col={'xs-12'}  center
            style={{
                borderRadius: 10,
                backgroundColor: STheme.color.card,
                alignItems: "flex-end",
                borderWidth: 1,
                borderColor: STheme.color.primary+"15",
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
                <SText fontSize={15} flex={1} font="LondonTwo" color={STheme.color.text} style={{ alignItems: "flex-end"}}>Ficha</SText>
                <SView width={8} />
                <SIcon flex={1} name={"flecha"} width={14} height={11} fill={STheme.color.primary} />
                <SView flex={1} style={{ alignItems: "flex-end"}}>
                    <SView  style={{
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
        horarios.INSTANCE = this;
        this.loadMedico().then(medico => this.setState({ medico }))
        // this.loadTurnos().then(turnos => console.log(turnos))
    }
    async loadMedico() {
        const medicos = await getMedico({ fecha: this.state.fecha, nrosuc: this.nrosuc, codmed: this.codmed, codesp: this.codesp })
        return medicos;
    }

    RenderHoras = () => {
        if (!this.state.medico) return null;
        const { CodMed, NomMed, TitMed, TurMed, turnos } = this.state.medico
        // console.log("turnos", turnos)
        if (turnos.length === 0) return <NoData mensaje={"No tenemos horarios habilitados en este momento."} />
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

    renderDias = () => {
        let fecha = new Date();
        let dia = new Intl.DateTimeFormat('es-ES', {
            weekday: 'short',
            // day: 'numeric',
            // month: 'long',
            // year: 'numeric'
        }).format(fecha);
        return <>
            {/* <SView col={"xs-12 sm-10 md-8"} row > */}
            <SView col={"xs-12"} row >
                <SView col={"xs-3"} row center padding={5} onPress={() => { }}>
                    <SView col={"xs-12"} center padding={10}
                        style={{
                            borderRadius: 13,
                            backgroundColor: STheme.color.card,
                            borderWidth: 1,
                            borderColor: STheme.color.primary + "15",
                        }}
                    >
                        <SHr height={10} />
                        <SText height={25} font="LondonBetween" fontSize={15} color={STheme.color.text} style={{ textTransform: "uppercase", }} > {dia}</SText>
                        <SView col={"xs-7"} style={{
                            borderBottomWidth: 1,
                            borderBottomColor: STheme.color.lightGray,
                        }} />
                        <SHr height={4} />
                        <SText height={25} font="LondonTwo" fontSize={26} color={STheme.color.text}  >{new SDate().toString("dd")}</SText>
                        <SHr height={10} />
                    </SView>
                </SView>
                <SView col={"xs-3"} row center padding={5} onPress={() => { }}>
                    <SView col={"xs-12"} center padding={10}
                        style={{
                            borderRadius: 13,
                            backgroundColor: STheme.color.primary,
                            borderWidth: 1,
                            borderColor: STheme.color.secondary,
                        }}
                    >
                        <SHr height={10} />
                        <SText height={25} font="LondonBetween" fontSize={15} color={STheme.color.secondary} style={{ textTransform: "uppercase", }} > {dia}</SText>
                        <SView col={"xs-7"} style={{
                            borderBottomWidth: 1,
                            borderBottomColor: STheme.color.secondary,
                        }} />
                        <SHr height={4} />
                        <SText height={25} font="LondonTwo" fontSize={26} color={STheme.color.secondary}  >{new SDate().toString("dd")}</SText>
                        <SHr height={10} />
                    </SView>
                </SView>
            </SView>
        </>
    }


    renderFechas = () => {
        let fecha = new Date();
        let formato = new Intl.DateTimeFormat('es-ES', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            // year: 'numeric'
        }).format(fecha);
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
                <SText font="LondonBetween" justify fontSize={20} style={{ textTransform: "capitalize" }} >{formato}</SText>
                <SHr height={15} />
                {this.renderDias()}
            </SView>
            <SHr height={15} />
        </SView>
    }

    render() {

        return <SPage title={"Horarios"}>
            <Container loading={!this.state.medico}>
                <SelectFecha defaultValue={this.state.fecha} onChange={(e) => {
                    if (this.state.fecha == e) return;
                    this.state.fecha = e;
                    this.setState({ medico: null })
                    this.componentDidMount();
                }} />
                <SHr height={10} />
                <SHr />
                <MedicoItem medico={this.state.medico} />
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