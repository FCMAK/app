import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'
import Container from '../../../../../Components/Container';
import Header from '../Components/Header';

class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.codmed = SNavigation.getParam("codmed"); //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        this.codesp = SNavigation.getParam("codesp"); //key por navegador

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

    getContentForm() {
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

        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-11"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                // nombre: { label: "Nombre Completo", defaultValue: usuario.Nombres + " " + usuario.Apellidos, isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                nombre: { placeholder: "Número de carnet", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}


        // onSubmitName={"Guardar"}
        // onSubmit={(values) => {
        //     if (this.key) {
        //         Parent.Actions.editar({ ...this.data, ...values }, this.props);
        //     } else {
        //         Parent.Actions.registro(values, this.props);
        //     }
        // }}
        />
    }
    render() {


        return (
            <SPage title={'Datos Paciente'}
                header={<Header
                    titulo={"POR FAVOR, INSTRODUCE TU NÚMERO DE CARNET"}
                    icon={""}
                    // descripcion="dedede"
                />}
            >
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Container>
                    <SHr height={20} />
                    {this.getContentForm()}
                    <SView col={"xs-11"} center>
                        <SHr height={45} />
                        <Kolping.KButtom primary onPress={() => {

                            SNavigation.navigate("ficha/confirmacion", { codmed: this.codmed, fecha: this.fecha.toString("yyyy-MM"), dia: this.dia, hora: this.hora, nrosuc: this.nrosuc })
                        }}  >CONTINUAR</Kolping.KButtom>
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
export default connect(initStates)(Paciente);