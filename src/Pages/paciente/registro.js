import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Container from '../../Components/Container';
// import Header2 from '../Components/Header2';
import Header2 from '../../Services/Kolping/Components/ficha/Components/Header2';

class PacienteRegistro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.ci = SNavigation.getParam("ci"); //key por navegador

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
            { key: "1", content: "PERSONA", },
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

        return <SForm
            row
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12"}
            inputProps={{
                customStyle: "kolping",
                // separation: 2
                margin: 5
            }}
            inputs={{
                // nombre: { label: "Nombre Completo", defaultValue: usuario.Nombres + " " + usuario.Apellidos, isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                tipo: { placeholder: "Tipo de persona", label: "Tipo de persona", isRequired: true, icon: <SIcon name={"carnet"} width={40} height={30} />, defaultValue:"PERSONA" , type: "select", options: this.getTipoPersona(), style: { padding: 5 } },
                tipoDoc: { placeholder: "Tipo de documento", label: "Tipo de documento", isRequired: true, icon: <SIcon name={"carnet"} width={40} height={30} />, defaultValue:"CI : CEDULA DE ID", type: "select", options: this.getTipoDocumento(), style: { padding: 5 } },
                ci: { placeholder: "Número de carnet", label: "Número de carnet", defaultValue: this.ci, col: "xs-12 sm-8", isRequired: true, icon: <SIcon name={"carnet"} width={40} height={30} /> },
                comp: { placeholder: "Comp.", label: "Comp.", col: "xs-12 sm-4", icon: <SIcon name={"carnet"} width={40} height={30} />, style: {} },
            }}


            // onSubmitName={"Guardar"}
            onSubmit={(values) => {
                let dataForm = values;
                SNavigation.navigate("/paciente/registro2", {...this.datosNav,  nav:1, ...dataForm})

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
            <SPage title={'Registro'} hidden>
                {/* <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center> */}
                <Header2
                    titulo={"REGISTRO DE PACIENTE"}
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
                                    SNavigation.goBack()
                                }} center>
                                <SText bold color={STheme.color.white}>ATRÁS</SText>
                            </SView>
                        </SView>
                        <SView col={"xs-6"} style={{ alignItems: "flex-end" }} >
                            <SView width={60} height={60} flex onPress={() => {
                                this.form.submit();
                            }}>
                                <SIcon name={"bnext"} width={60} height={60} fill={STheme.color.primary} />
                            </SView>
                        </SView>
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
export default connect(initStates)(PacienteRegistro);