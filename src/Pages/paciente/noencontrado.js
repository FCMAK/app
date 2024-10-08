import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Container from '../../Components/Container';
import Header from '../../Services/Kolping/Components/ficha/Components/Header';


export default class PacienteNoEncontrado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.ci = SNavigation.getParam("ci"); //key por navegador
        this.datosNav = SNavigation.getAllParams();


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
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};
        // }

        // var usuario = this.props.state.usuarioReducer.usuarioLog;
        // this.usuario = usuario;
        // if (!usuario) {
        //     SNavigation.navigate('login');
        //     return <SView />
        // }

        return <SView col={"xs-12"} center style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: STheme.color.gray,
            padding: 10
        }}>
            <SHr height={10} />
            <SText font='LondonMM' fontSize={22}>Número de documento</SText>
            <SHr height={10} />
            <SText font='LondonTwo' fontSize={22} bold>{this.ci}</SText>
            <SHr height={10} />

        </SView>
    }
    render() {


        return (
            <SPage title={'Datos Paciente'}  >
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Header
                    // titulo={"POR FAVOR, INTRODUCE TU NÚMERO DE CARNET"}
                    icon={"iconp2"}
                    descripcion="El número de documento ingresado no existe en el sistema. Por favor, revisa la información y vuelve a intentarlo o registra un nuevo paciente."
                />
                <Container>
                    {/* <SHr height={20} /> */}
                    {this.getContent()}
                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <Kolping.KButtom secondary onPress={() => {
                            // SNavigation.navigate("ficha/paciente/buscar")
                            SNavigation.goBack();
                        }}  >VOLVER A INTENTAR</Kolping.KButtom>
                        <SHr height={15} />
                        <Kolping.KButtom primary onPress={() => {
                            SNavigation.navigate("/paciente/registro2", { ...this.datosNav})
                        }}  >REGISTRAR NUEVO PACIENTE</Kolping.KButtom>
                        <SHr height={30} />
                    </SView>
                </Container>
                {/* </SView> */}
            </SPage>
        );
    }
}