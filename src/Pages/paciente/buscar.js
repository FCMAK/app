import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm, SNotification } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import Container from '../../Components/Container';
import Header from '../../Services/Kolping/Components/ficha/Components/Header';
import Model from '../../Model';
import SSocket from 'servisofts-socket';

export default class add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        // this.codmed = SNavigation.getParam("codmed"); //key por navegador
        // this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        // this.codesp = SNavigation.getParam("codesp"); //key por navegador
        // this.datosNav = SNavigation.getAllParams();

        // this.dia = SNavigation.getParam("dia");
        // this.hora = SNavigation.getParam("hora");
        // this.fecha = new SDate(SNavigation.getParam("fecha"));
        // this.fecha_final = new SDate(this.fecha + "-" + this.dia, "yyyy-MM-dd");


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
            col={"xs-12"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                // nombre: { label: "Nombre Completo", defaultValue: usuario.Nombres + " " + usuario.Apellidos, isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                ci: { placeholder: "Número de documento", isRequired: true, icon: <SIcon name={"carnet"} width={40} height={30} /> },
            }}
            onSubmit={(t) => {
                SNotification.send({
                    key: "add_paciente",
                    title: "Buscando paciente",
                    body: "Estamos buscando el paciente",
                    type: "loading"
                })
                SSocket.sendPromise({
                    component: "paciente",
                    type: "getByCi",
                    key_usuario: Model.usuario.Action.getKey(),
                    ci: t.ci
                }).then(e => {
                    SNotification.remove("add_paciente")

                    if (e.data && e.data.length > 0) {
                        console.log("EXITO", e.data)
                         if (e.data.length > 1) {
                            SNotification.send({
                                title: "Paciente",
                                body: "HAY MAS DE 1, pendiente de implementar",
                                color: STheme.color.warning
                            })
                            // Cuando es mas de 1
                        } else {
                            SNavigation.navigate("/paciente/encontrado", { ...e.data[0], nav: 2 })
                            // SNotification.send({
                            //     key: "add_paciente",
                            //     title: "Paciente",
                            //     body: "Añadiendo a favoritos",
                            //     type: "loading"
                            // })
                            // // Cuando es solo 1 usuario
                            // SSocket.sendPromise({
                            //     component: "paciente_usuario",
                            //     type: "registro2",
                            //     data: e.data[0],
                            //     key_usuario: Model.usuario.Action.getKey()
                            // }).then(e => {
                            //     SNotification.remove("add_paciente")
                            // }).catch(e => {

                            //     SNotification.remove("add_paciente")
                            // })
                        }

                    } else {
                        SNavigation.navigate("/paciente/noencontrado", { ci: t.ci, nav: 2 })
                        console.log("No se encontro paciente con este CI")
                    }
                }).catch(e => {
                    SNotification.remove("add_paciente")
                    console.error(e);
                })
                // SNavigation.navigate("ficha/paciente/noEncontrado", { ci: values.ci, nav: 2, ...this.datosNav })
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
            <SPage title={'Datos Paciente'} >
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Header
                    titulo={"POR FAVOR, INTRODUCE TU NÚMERO DE DOCUMENTO"}
                    icon={"iconp1"}
                />
                <Container>
                    <SHr height={20} />
                    {this.getContentForm()}
                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <Kolping.KButtom primary onPress={() => {
                            this.form.submit();
                            //SNavigation.navigate("ficha/confirmacion", { codmed: this.codmed, fecha: this.fecha.toString("yyyy-MM"), dia: this.dia, hora: this.hora, nrosuc: this.nrosuc })
                        }}  >CONTINUAR</Kolping.KButtom>
                        <SHr height={30} />
                    </SView>
                </Container>
                {/* </SView> */}
            </SPage>
        );
    }
}
