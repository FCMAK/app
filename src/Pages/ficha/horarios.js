import React from "react";
import { SDate, SHr, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";
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
    return <SView col={'xs-4'} padding={5} >
        <SView col={'xs-12'} card center
            style={{
                alignItems: "flex-end"
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
                    hortur:HorTur
                })
                // getAllServicios({
                //     nrosuc: nrosuc,
                //     codmed: CodMed+""
                // }).then(e=>{

                // }).catch(e=>{

                // })
            }} >
            <SView style={{
                width: 30,
                height: 30,
                borderRadius: 100,
                backgroundColor: STheme.color.primary + "AA",
                borderColor: STheme.color.primary,
                borderWidth: 2,
            }} center>
                <SText font="LondonTwo" fontSize={15} color={STheme.color.secondary}>{CodTur}{ComTur}</SText>
            </SView>
            <SView width={8} />
            <SHr height={3} />
            <SText fontSize={13} font="LondonBeteen">{NomEsp}</SText>
            <SView flex />
            <SText fontSize={13} font="LondonTwo">{HorTur}</SText>
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

    componentDidMount() {
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
        console.log("turnos", turnos)
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

    render() {
        return <SPage title={"Servisofts page"}>
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
                <SText font="LondonMM" fontSize={18} bold>Horarios disponibles</SText>
                <SHr />
                {this.RenderHoras({ medico: this.state.medico, nrosuc: this.nrosuc })}
                <SHr height={25}/>
            </Container>
        </SPage>;
    }
}