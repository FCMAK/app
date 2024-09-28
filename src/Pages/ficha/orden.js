import React, { useState } from "react";
import { SHr, SImage, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";
import SSocket from "servisofts-socket";
import Model from "../../Model";
import { Container } from "../../Components";
import Kolping from "../../Components/Kolping";

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
        alias: "Seleccione un paciente"
    });

    React.useImperativeHandle(ref, () => ({
        paciente
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
        }}>

        </SView>
        <SView width={16} />
        <SView flex>
            <SText fontSize={20} >{paciente.alias}</SText>
            <SView row>
                <SText color={STheme.color.lightGray}>{paciente.ci}</SText>
            </SView>
        </SView>
    </SView>
})
const InputCita = () => {
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
        }}>
            {/* <SImage */}
        </SView>
        <SView width={16} />
        <SView flex>
            <SText fontSize={20} bold>{"Dr.Shah"}</SText>
            <SText color={STheme.color.info} fontSize={14}>{"Cardiología"}</SText>
        </SView>
        <SView height={"50%"} style={{

            width: 1,
            borderLeftWidth: 2,
            borderColor: STheme.color.card
        }} />
        <SView width={100} center>
            <SText fontSize={22} bold color={STheme.color.primary}>{"14"}</SText>
            <SText fontSize={14} color={STheme.color.primary}>{"ENERO"}</SText>
            <SText fontSize={14} color={STheme.color.primary}>{"12:30 PM"}</SText>
        </SView>
    </SView>
}
export default class index extends React.Component {
    state = {}

    constructor(props) {
        super(props)
        this.key = SNavigation.getParam("key")
    }
    componentDidMount() {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "getByKey",
            key_usuario: Model.usuario.Action.getKey(),
            key: this.key,
        }).then(e => {
            this.setState({ data: e.data })
        }).catch(e => {
        })
    }

    handlePress() {
        SNavigation.navigate("/ficha/confirmar", {
            key: this.key
        })
        console.log(this.state)
    }
    handleChangePaciente(e) {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "editar",
            data: {
                key: this.key,
                codpac: e.codper + "",
            }

        })
    }
    render() {
        return <SPage title={"Servisofts page"}>
            <Container flex>
                <SHr h={32} />
                <Title label={"Paciente"} />
                <SHr h={16} />
                <InputPaciente onChage={this.handleChangePaciente.bind(this)} />
                <SHr h={50} />
                <Title label={"Cita Programada"} />
                <SHr h={16} />
                <InputCita />
                <SHr h={50} />
                <SView flex no />
                {/* <SText col={"xs-12"} fontSize={20} font="LondonBetween">{"Cita Programada"}</SText> */}
                <Kolping.KButtom secondary onPress={this.handlePress.bind(this)}>{"CONTINUAR"}</Kolping.KButtom>
                <SHr h={50} />
            </Container>
        </SPage>;
    }
}