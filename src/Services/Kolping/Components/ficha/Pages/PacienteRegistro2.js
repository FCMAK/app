import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'
import Container from '../../../../../Components/Container';
import Header from '../Components/Header';
import Header2 from '../Components/Header2';

class PacienteRegistro2 extends Component {
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

    getTipoPersona() {
        return [
            { key: "", content: "Tipo de persona", disabled: true },
            { key: "1", content: "PERSONA" },
            { key: "2", content: "JURÍDICA" },
        ]
    }
    getTipoDocumento() {
        return [
            { key: "", content: "Tipo de documento", disabled: true },
            { key: "1", content: "CI : CEDULA DE ID" },
            { key: "2", content: "NIT" },
            { key: "3", content: "OTRO" },
        ]
    }

    icon = (name) => {
        return <SIcon
            name={name}
            fill={STheme.color.primary}
            width={40} height={30}
        />
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
            row
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12"}
            inputProps={{
                customStyle: "kolping",
                separation: 12
            }}
            inputs={{
                Nombres: { placeholder: "Nombres", isRequired: true, icon: this.icon("InputUser") },
                ApellidoP: { placeholder: "Apellido Paterno", isRequired: true, icon: this.icon("InputUser") },
                ApellidoM: { placeholder: "Apellido Materno", isRequired: true, icon: this.icon("InputUser") },
                Correo: { placeholder: "Correo", type: "email", isRequired: true, icon: this.icon("InputEmail") },
                // FechaNacimiento: { placeholder: "Fecha de Nacimiento", isRequired: false, type: "date", },
                //telefono: { placeholder: "Celular", isRequired: true, type: "telefono", isRequired:true},
                Telefono: { placeholder: "Celular", isRequired: false, type: "phone" },
            }}


            // onSubmitName={"Guardar"}
            onSubmit={(values) => {
                SNavigation.navigate("ficha/paciente/noEncontrado", { ci: values.ci })

                // if (this.key) {
                //     Parent.Actions.editar({ ...this.data, ...values }, this.props);
                // } else {
                //     Parent.Actions.registro(values, this.props);
                // }
            }}
        />
    }
    render() {


        return (
            <SPage title={'Registro'}>
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Header2
                    titulo={"DATOS DE PACIENTE"}
                />
                <Container>
                    <SHr height={40} />
                    {this.getContentForm()}
                    <SHr height={40} />
                    <SView col={"xs-12"} row>
                        <SView col={"xs-6"}  >
                            <SView width={80} height={60}
                                style={{
                                    backgroundColor: STheme.color.primary,
                                    borderRadius: 8,
                                }}
                                onPress={() => {
                                    SNavigation.navigate("ficha/paciente/registro")
                                }} center>
                                <SText bold color={STheme.color.white}>ATRÁS</SText>
                            </SView>
                        </SView>
                        <SView col={"xs-6"} style={{alignItems:"flex-end"}} >
                            <SView width={60} height={60} onPress={() => {
                                SNavigation.navigate("ficha/paciente/genero")
                            }}>
                                <SIcon name={"bnext"} width={60} height={60} fill={STheme.color.primary} />
                            </SView>

                        </SView>
                    </SView>
                    <SHr height={30} />
                </Container>
                {/* </SView> */}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(PacienteRegistro2);