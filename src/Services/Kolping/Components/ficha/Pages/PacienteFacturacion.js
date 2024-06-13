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

class PacienteFacturacion extends Component {
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
        let nombreCompleto= this.datosNav.Nombres + " " + this.datosNav.ApellidoP + " " + this.datosNav.ApellidoM;

        return <SForm
            row
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12"}
            inputProps={{
                customStyle: "kolping",
                // separation: 2
                // marginHorizontal: 5,
                // marginVertical: 5
                margin: 5
            }}
            inputs={{
                // nombre: { label: "Nombre Completo", defaultValue: usuario.Nombres + " " + usuario.Apellidos, isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                ci: { placeholder: "Número de carnet", label: "Número de carnet", defaultValue: this.ci, col: "xs-12 sm-8", isRequired: true, icon: <SIcon name={"carnet"} width={40} height={30} /> },
                comp: { placeholder: "Comp.", label: "Comp.", col: "xs-12 sm-4", defaultValue: this.datosNav.comp, icon: <SIcon name={"carnet"} width={40} height={30} />, style: {} },
                tipoDoc: { placeholder: "Tipo de documento", label: "Tipo de documento", defaultValue: this.datosNav.tipoDoc, isRequired: true, icon: <SIcon name={"carnet"} width={40} height={30} />, type: "select", options: this.getTipoDocumento(), style: { padding: 5 } },
                Nombres: { placeholder: "Nombres", label: "Nombre completo", defaultValue: nombreCompleto, isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                Telefono: { placeholder: "Teléfono", label: "Teléfono", defaultValue: this.datosNav.Telefono, isRequired: false, type: "phone" },

            }}


            // onSubmitName={"Guardar"}
            onSubmit={(values) => {
                SNavigation.navigate("ficha/paciente", { ...this.datosNav})
 
                // if (this.key) {
                //     Parent.Actions.editar({ ...this.data, ...values }, this.props);
                // } else {
                //     Parent.Actions.registro(values, this.props);
                // }
            }}
        />
    }
    render() {

        console.log(this.datosNav)
        return (
            <SPage title={'Facturación'}>
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Header2
                    titulo={"DATOS DE FACTURACIÓN"}
                />
                <Container>
                    <SHr height={40} />
                    {this.getContentForm()}
                    <SHr height={40} />
                    <SView col={"xs-12"} center >
                        <Kolping.KButtom primary onPress={() => {
                            this.form.submit();
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
export default connect(initStates)(PacienteFacturacion);