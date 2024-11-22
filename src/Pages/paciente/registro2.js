import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Container from '../../Components/Container';
import Header2 from '../../Services/Kolping/Components/ficha/Components/Header2';
import SSocket from 'servisofts-socket';
import Model from '../../Model';
import { Parent } from '.';

class PacienteRegistro2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.datosNav = SNavigation.getAllParams();

    }

    componentDidMount() {

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
                Fecha: { placeholder: "Fecha de Nacimiento", isRequired: true, type: "date", },
                Telefono: { placeholder: "Celular", isRequired: false, type: "phone" },
                Correo: { placeholder: "Correo", type: "email", isRequired: false, icon: this.icon("InputEmail") },

            }}

            onSubmit={(v) => {
                // dataForm = { ... this.datosNav, ...values }

                const extraArr = [];

                if (v.Correo) {
                    extraArr.push({
                        "TipMed": "1",
                        "ValMed": v.Correo
                    })
                }
                if (v.Telefono) {
                    extraArr.push({
                        "TipMed": "2",
                        "ValMed": v.Telefono
                    })
                }
                if (v.Direccion) {
                    extraArr.push({
                        "TipMed": "3",
                        "ValMed": "av/ san roque 3312",
                        "DatMed": ""
                    })
                }

                const format = {
                    "TipDoc": "1",
                    "NroDoc": this.datosNav.ci,
                    "ComDoc": "",
                    "NomPer": v.Nombres,
                    "PriApe": v.ApellidoP,
                    "SegApe": v.ApellidoM,
                    "GenPer": "F",
                    "FecNac": `${v.Fecha}T00:00:00Z`,
                    "TdoFac": "1",
                    "NdoFac": "9752424",
                    "DcoFac": "",
                    "NomFac": "CARLOS GONZALES PEREZ",
                    "MedCon": extraArr
                    // "MedCon": [
                    //     {
                    //         "TipMed": "1",
                    //         "ValMed": v.Correo
                    //     },
                    //     {
                    //         "TipMed": "2",
                    //         "ValMed": v.Telefono
                    //     },
                    //     {
                    //         "TipMed": "3",
                    //         "ValMed": "av/ san roque 3312",
                    //         "DatMed": ""
                    //     }
                    // ]
                }
                SSocket.sendPromise({
                    component: "paciente_usuario",
                    // component: "paciente",
                    type: "registro",
                    data: format,
                    key_usuario: Model.usuario.Action.getKey()
                }).then(e => {
                    console.log(e);
                    Parent.notifyChange(e.data)
                    SNavigation.goBack()
                    SNavigation.goBack()
                    SNavigation.goBack()
                    // const CodCli = e.data.CodCli;
                    // const dta = {
                    //     CodPer: e.data.CodCli,

                    // }
                    // SSocket.sendPromise({
                    //     component: "paciente_usuario",
                    //     type: "registro",
                    //     key_usuario: Model.usuario.Action.getKey(),
                    //     data:{
                    //         CodPer: e.data.CodCli,

                    //     }

                    // })
                    // SNavigation.reset("/")
                }).catch(e => {
                    console.error(e);
                })
            }}
        />
    }
    render() {


        return (
            <SPage title={'Registro'} hidden>
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
                                    SNavigation.goBack();
                                    // SNavigation.navigate("ficha/paciente/registro")
                                }} center>
                                <SText bold color={STheme.color.white}>ATRÁS</SText>
                            </SView>
                        </SView>
                        <SView col={"xs-6"} style={{ alignItems: "flex-end" }} >
                            <SView width={60} height={60} onPress={() => {
                                this.form.submit();
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