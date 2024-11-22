import React, { useState } from "react";
import { SDate, SHr, SImage, SInput, SLoad, SNavigation, SNotification, SPage, SStorage, SText, STheme, SView } from "servisofts-component";
import SSocket from "servisofts-socket";
import Model from "../../Model";
import { Container } from "../../Components";
import Kolping from "../../Components/Kolping";
import { getMedico } from "./Actions";
import paciente from "../paciente";

const Title = ({ label }) => {
    return <SView col={"xs-12"}>
        <SText col={"xs-12"} fontSize={22} font="LondonBetween">{label}</SText>
        <SHr h={8} />
        <SView style={{
            borderBottomWidth: 1,
            borderColor: STheme.color.primary
        }} />
    </SView>
}

const InputPaciente = React.forwardRef((props, ref) => {
    const [paciente, setPaciente] = useState({
        alias: "Seleccione un paciente..."
    });

    React.useImperativeHandle(ref, () => ({
        paciente,
        setPaciente
    }));

    return <SView col={"xs-12"} height={100} style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: STheme.color.card
    }} row center onPress={() => {
        SNavigation.navigate("/paciente", {
            onSelect: (obj) => {
                setPaciente(obj)
                if (props.onChage) props.onChage(obj)
            }
        })
    }}>
        <SView width={16} />
        <SView width={70} height={70} style={{
            borderRadius: 100,
            borderColor: STheme.color.card,
            borderWidth: 1,
            overflow: "hidden"
        }}>
            <SImage src={require("../../Assets/img/nofoto.jpg")} />
        </SView>
        <SView width={16} />
        <SView flex>
            <SText fontSize={20} font="LondonBetween" >{paciente.alias}</SText>
            <SView row>
                <SText color={STheme.color.lightGray} font="LondonBetween">{paciente.ci}</SText>
            </SView>
        </SView>
    </SView>
})
const InputCita = ({ data }) => {
    const { fecha, nommed, nomesp, hortur } = data;
    // if(!this.state?.data) return <SLoad />
    let obj = this.state?.data;
    // if(!obj) return <SLoad/>
    console.log("obj", obj)
    const sdate = new SDate(fecha, "yyyy-MM-dd")
    return <SView col={"xs-12"} height={130} style={{
        borderRadius: 10,
        borderWidth: 2,
        borderColor: STheme.color.card
    }} row center>
        <SView width={16} />
        <SView width={70} height={70} style={{
            borderRadius: 100,
            borderColor: STheme.color.card,
            borderWidth: 1,
            overflow: "hidden"
        }}>
            <SImage src={require("../../Assets/img/nofoto.jpg")} />
            {/* <SImage */}
        </SView>
        <SView width={16} />
        <SView flex>
            {/* <SText fontSize={20} bold>{obj?.detalle?.NomMed} -nn</SText> */}
            <SText fontSize={15} font="LondonTwo" >{nommed}</SText>
            <SText color={STheme.color.info} font="LondonBetween" fontSize={16}>{nomesp}</SText>
        </SView>
        <SView height={"50%"} style={{

            width: 1,
            borderLeftWidth: 2,
            borderColor: STheme.color.card
        }} />
        <SView width={120} center>
            <SText fontSize={25} font="LondonTwo" bold color={STheme.color.primary}>{sdate.toString("dd")}</SText>
            <SText fontSize={14} font="LondonBetween" color={STheme.color.primary}>{sdate.toString("MONTH")}</SText>
            <SText fontSize={14} font="LondonBetween" color={STheme.color.primary}>{hortur}</SText>
        </SView>
    </SView>
}
export default class index extends React.Component {
    state = {
        default_values: {
            nit: "",
            razon_social: "",
            email_factura: Model.usuario.Action.getUsuarioLog()?.Correo

        }
    }

    constructor(props) {
        super(props)
        this.key = SNavigation.getParam("key")
    }
    componentDidMount() {



        SStorage.getItem("last_nit", (e) => {
            if (!e) return;
            const obj = JSON.parse(e);
            this.setState({ default_values: { ...this.state.default_values, ...obj } })
        })
        SSocket.sendPromise({
            component: "orden_compra",
            type: "getByKey",
            key_usuario: Model.usuario.Action.getKey(),
            key: this.key,
        }).then(e => {
            this.setState({ data: e.data })
            const { data, codpac } = e.data;
            const { codmed, nrosuc, codesp, fecha } = data;
            // getMedico({ nrosuc: nrosuc, codmed: codmed, codesp: codesp, fecha: fecha }).then(med => {
            //     this.setState({ medico: med })
            // })

            if (codpac) {
                SSocket.sendPromise({
                    component: "paciente_usuario",
                    type: "getByKey",
                    key_usuario: Model.usuario.Action.getKey(),
                    codper: codpac,
                }).then(e => {
                    if (this.inpPaciente) {
                        this.inpPaciente.setPaciente(e.data)
                    }
                    // this.setState({ paciente: e.data })
                    // console.log("Pacienet", e)
                }).catch(e => {

                })
            }

        }).catch(e => {

        })
    }

    handlePress() {
        if (!this.state.data.codpac) {
            SNotification.send({
                title: "Debe seleccionar un paciente.",
                color: STheme.color.warning,
                time: 5000
            })
            return;
        }

        let nit = this.input_nit.getValue();
        let razon_social = this.input_razon_social.getValue();
        let email = this.input_email.getValue();
        SStorage.setItem("last_nit", JSON.stringify({
            nit: nit,
            razon_social: razon_social,
            email_factura: email
        }))
        SSocket.sendPromise({
            component: "orden_compra",
            type: "editar",
            data: {
                key: this.key,
                nit: nit,
                razon_social: razon_social,
                email_factura: email
            }
        }).then(e => {
            SNavigation.navigate("/ficha/confirmar", {
                key: this.key
            })
        }).catch(e => {

        })
    }
    handleChangePaciente(e) {
        console.log(e);
        SSocket.sendPromise({
            component: "orden_compra",
            type: "editar",
            data: {
                key: this.key,
                codpac: e.codper + ""
            }
        }).then(e => {
            this.state.data.codpac = e.codper + ""
            this.setState({ paciente: e })
        }).catch(e => {

        })
    }
    render() {
        return <SPage title={"Orden"}>
            <Container loading={!this.state.data}>
                <SHr h={32} />
                <Title label={"Paciente"} />
                <SHr h={16} />
                <InputPaciente ref={ref => {
                    this.inpPaciente = ref
                    console.log("entro al ref")
                }} onChage={this.handleChangePaciente.bind(this)} />
                <SHr h={50} />
                <Title label={"Cita Programada"}/>
                <SHr h={16} />
                <InputCita data={this.state?.data?.data} />
                <SHr h={50} />
                <Title label={"Datos de facturación"} />
                <SHr h={16} />
                <SInput ref={ref => this.input_nit = ref} defaultValue={this.state.default_values.nit} customStyle={"kolping"} label={"NIT"} placeholder={"Escriba el número de Nit..."} />
                <SInput ref={ref => this.input_razon_social = ref} defaultValue={this.state.default_values.razon_social} customStyle={"kolping"} label={"RAZON SOCIAL"} placeholder={"Escriba la Razón Social..."} />
                <SInput ref={ref => this.input_email = ref} defaultValue={this.state.default_values.email_factura} customStyle={"kolping"} label={"CORREO"} placeholder={"Escriba el correo electrónico"} />
                <SHr h={50} />
                <SView flex no />
                {/* <SText col={"xs-12"} fontSize={20} font="LondonBetween">{"Cita Programada"}</SText> */}
                <Kolping.KButtom secondary onPress={this.handlePress.bind(this)}>{"CONTINUAR"}</Kolping.KButtom>
                <SHr h={50} />
            </Container>
        </SPage>;
    }
}