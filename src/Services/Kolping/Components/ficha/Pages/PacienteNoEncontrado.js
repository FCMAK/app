import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'
import Container from '../../../../../Components/Container';
import Header from '../Components/Header';

class PacienteNoEncontrado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.codmed = SNavigation.getParam("codmed"); //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        this.codesp = SNavigation.getParam("codesp"); //key por navegador
        this.ci = SNavigation.getParam("ci"); //key por navegador
        this.datosNav = SNavigation.getAllParams();

        this.dia = SNavigation.getParam("dia");
        this.hora = SNavigation.getParam("hora");
        this.fecha = new SDate(SNavigation.getParam("fecha"));
        this.fecha_final = new SDate(this.fecha + "-" + this.dia, "yyyy-MM-dd");


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
                    descripcion="Por favor, verifica que hayas introducido tu información correctamente o registra un nuevo paciente."
                />
                <Container>
                    {/* <SHr height={20} /> */}
                    {this.getContent()}
                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <Kolping.KButtom secondary onPress={() => {
                            SNavigation.navigate("ficha/paciente/buscar")
                        }}  >VOLVER A INTENTAR</Kolping.KButtom>
                        <SHr height={15} />
                        <Kolping.KButtom primary onPress={() => {
                            SNavigation.navigate("ficha/paciente/registro", { ...this.datosNav})
                        }}  >REGISTRAR NUEVO PACIENTE</Kolping.KButtom>
                        <SHr height={30} />
                    </SView>
                </Container>
                {/* </SView> */}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(PacienteNoEncontrado);