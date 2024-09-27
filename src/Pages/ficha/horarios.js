import React from "react";
import { SDate, SHr, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";
import SSocket from "servisofts-socket";
import { Container } from "../../Components";
import { FlatList } from "react-native";
import { getAllMedicos, getAllServicios } from "./Actions";
import MedicoItem from "./Components/MedicoItem";
import SelectFecha from "./Components/SelectFecha";


const loadTurnos = async ({ nrosuc, codmed, sdate }) => {
    const resp = await SSocket.sendPromise({
        component: "turno",
        type: "getAll",
        nrosuc: nrosuc,
        fectur: sdate.toString("yyyy-MM-ddThh:mm:ss")
    })
    return resp.data;
}





const RenderHoraItem = ({ item, medico, nrosuc }) => {
    const { CodEsp, CodMed, CodTur, ComTur, EstTur, FecHor, FecTur, HorTur, IdeCon, NomEsp, NomEst, NomMed, NroDia } = item;
    // Dias 1=Lunes 2=Martes 3=Miercoles 4=Jueves 5=Viernes 6=Sabado ?=Domingo

    // date.addDay(NroDia)
    return <SView col={"xs-12"} card center
        padding={8}
        onPress={() => {
            getAllServicios({
                nrosuc: nrosuc,
                codmed: CodMed+""
            })
        }} row>
        <SView style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            backgroundColor: STheme.color.primary + "AA",
            borderColor: STheme.color.primary,
            borderWidth: 2,
        }} center>
            <SText bold color={STheme.color.secondary}>{ComTur}{CodTur}</SText>
        </SView>
        <SView width={8} />
        <SText fontSize={12}>{NomEsp}</SText>
        <SView flex />
        <SText fontSize={16} bold>{HorTur}</SText>
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

    componentDidMount() {
        this.loadMedico().then(medico => this.setState({ medico }))
        // this.loadTurnos().then(turnos => console.log(turnos))
    }
    async loadMedico() {
        const medicos = await getAllMedicos({ fecha: this.state.fecha, nrosuc: this.nrosuc })
        return medicos.find(a => a.CodMed == this.codmed);
    }

    RenderHoras = () => {
        if (!this.state.medico) return null;
        const { CodMed, NomMed, TitMed, TurMed, turnos } = this.state.medico
        return <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{
                minWidth: "100%",
            }}
            data={turnos}
            // horizontal
            ItemSeparatorComponent={() => <SView width={8} height={8} />}
            renderItem={({ item, index }) => <RenderHoraItem item={item} medico={this.state.medico} nrosuc={this.nrosuc} />}
        />
    }

    render() {
        return <SPage title={"Servisofts page"}>
            <Container loading={!this.state.medico}>
                <SelectFecha defaultValue={this.state.fecha} onChange={(e) => {
                    if (this.state.fecha == e) return;
                    this.state.fecha = e;
                    this.setState({ medico: null })
                    this.componentDidMount();
                }} />
                <SHr />
                <MedicoItem medico={this.state.medico} />
                <SHr />
                {this.RenderHoras({ medico: this.state.medico, nrosuc: this.nrosuc })}
            </Container>
        </SPage>;
    }
}