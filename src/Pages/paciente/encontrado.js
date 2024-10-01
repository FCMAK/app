import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm, SNotification } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Container from '../../Components/Container';
import Header from '../../Services/Kolping/Components/ficha/Components/Header';
import Model from '../../Model';


export default class encontrado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.params = SNavigation.getAllParams();


    }

    componentDidMount() {
        // SSocket.sendPromise({
        //     component: "medico",
        //     type: "getAll",
        //     codesp: this.codesp,
        //     nrosuc: this.nrosuc
        // }).then(a => {
        //     console.log(a?.data[0])
        //     this.setState({ dataDoctor: a.data[0] })
        // }).catch(e => {
        //     console.log(e)
        // })
    }

    getContent() {

        console.log(this.params)

        return <SView col={"xs-12"} center style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: STheme.color.gray,
            padding: 10
        }}>
            <SHr height={10} />
            {/* <SText font='LondonMM' fontSize={22}>Número de documento</SText> */}
            {/* <SHr height={10} /> */}
            <SText font='LondonTwo' fontSize={22} bold>{this?.params?.NomCom}</SText>
            <SHr height={4} />
            <SText font='LondonTwo' fontSize={22}>{this?.params?.NroDoc}</SText>
            <SHr height={10} />

        </SView>
    }
    render() {


        return (
            <SPage title={'Datos Paciente'}  >
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Header
                    titulo={"¡HEMOS ENCONTRADO TUS DATOS!"}
                    icon={"iconp1"}
                    descripcion="Por favor, verifica los datos para continuar."
                />
                <Container>
                    {/* <SHr height={20} /> */}
                    {this.getContent()}
                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <Kolping.KButtom primary onPress={() => {
                            SNotification.send({
                                key: "add_paciente",
                                title: "Paciente",
                                body: "Añadiendo a favoritos",
                                type: "loading"
                            })
                            // Cuando es solo 1 usuario
                            SSocket.sendPromise({
                                component: "paciente_usuario",
                                type: "registro2",
                                data: this.params,
                                key_usuario: Model.usuario.Action.getKey()
                            }).then(e => {
                                SNavigation.goBack()
                                SNotification.remove("add_paciente")
                            }).catch(e => {
                                SNotification.send({
                                    title: "Paciente",
                                    body: e.error ?? "Error",
                                    color: STheme.color.danger,
                                    time: 5000,
                                })
                                SNotification.remove("add_paciente")
                            })
                            // SNavigation.navigate("/paciente/registro2", { ...this.datosNav })
                        }}  >SÍ, ES MI CUENTA</Kolping.KButtom>
                        <SHr height={15} />
                        <Kolping.KButtom secondary onPress={() => {
                            // SNavigation.navigate("ficha/paciente/buscar")
                            SNavigation.goBack();
                        }}  >NO, NO ES MI CUENTA</Kolping.KButtom>

                        <SHr height={30} />
                    </SView>
                </Container>
                {/* </SView> */}
            </SPage>
        );
    }
}