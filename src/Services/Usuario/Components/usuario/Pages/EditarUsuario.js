import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SLoad, SStorage, SThread } from 'servisofts-component';
import { SButtom, SDate, SForm, SNavigation, SPage, SPopup, SText, STheme, SView, SIcon } from 'servisofts-component';
import Usuario from '..';
import BackgroundImage from '../../../../../Components/BackgroundImage';
import Kolping from '../../../../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Model from '../../../../../Model';
class EditarUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getForm() {

        var isApi = this.usr.gmail_key || this.usr.facebook_key
        return <SForm
            // ref={(ref) => { this.form = ref; }}
            ref={(formInstance: SForm) => {
                this.form = formInstance;

                new SThread(100, "asd").start(() => {
                    if (formInstance) formInstance.focus("Nombres")
                })
            }}
            // row
            style={{
                alignItems: "center",
            }}
            inputProps={{
                col: "xs-12",
                customStyle: "kolping",

            }}
            inputs={{
                foto_p: { type: "image", isRequired: false, defaultValue: `${SSocket.api.root}usuario/${this.key}?time=${new Date().getTime()}`, col: "xs-4 sm-3.5 md-3 lg-2.5 xl-2.5", style: { borderRadius: 100, overflow: 'hidden', width: 130, height: 130, borderWidth: 0 } },
                Nombres: { label: "Nombres", isRequired: true, defaultValue: this.usr.Nombres, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                Apellidos: { label: "Apellidos", isRequired: true, defaultValue: this.usr.Apellidos, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                CI: { label: "Documento de identidad", defaultValue: this.usr.CI, type: "number", icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                "Fecha de nacimiento": { label: "Fecha de nacimiento", type: "date", defaultValue: this.usr["Fecha de nacimiento"], icon: <SIcon name={"Calendar"} width={40} height={30} /> },
                "Telefono": { label: "Telefono", defaultValue: this.usr["Telefono"], type: "phone" },
                Correo: { label: "Correo", type: "email", isRequired: !isApi, defaultValue: this.usr.Correo, icon: <SIcon name={"InputEmail"} width={40} height={30} /> },
                // ...(isApi ? {} : {
                //     Password: { label: "Contraseña", type: "password", isRequired: true, defaultValue: this.usr.Password, icon: <SIcon name={"InputPassword"} width={40} height={30} /> },
                //     RepPassword: { label: "Repetir contraseña", type: "password", isRequired: true, defaultValue: this.usr.Password, icon: <SIcon name={"InputRePassword"} width={40} height={30} /> }
                // }),
                "direccion": {
                    label: "Dirección", defaultValue: this.usr["direccion"], type: "direccion", icon: <SIcon name={"map"} width={40} height={30} />,
                    onPress: () => {
                        SNavigation.navigate("usuario/select", {
                            latitude: this.direccion?.latitude ?? this.state?.data?.latitude,
                            longitude: this.direccion?.longitude ?? this.state?.data?.longitude,
                            direccion: this.direccion?.direccion ?? this.state?.data?.direccion,
                            onSelect: (resp) => {
                                console.log("datos dirección");
                                console.log(resp);
                                SNavigation.goBack();
                                this.form?.setValues({ direccion: resp.direccion })
                                this.direccion = resp;
                                // this.form.setValue("Direccion", e?.descripcion)
                              
                            }
                        })
                    }
                },

            }}
            onSubmit={(values) => {
                // delete values["foto_p"];
                // console.log("values", this.usr);
                if (this.direccion) {
                    values.latitude = this.direccion.latitude
                    values.longitude = this.direccion.longitude
                }

                var finalObj = {
                    ...this.usr,
                    ...values
                }
                this.form.uploadFiles(Model.usuario._get_image_upload_path(SSocket.api, Model.usuario.Action.getKey()), "foto_p");
                // Usuario.Actions.editar(finalObj, this.props);
                Model.usuario.Action.editar({
                    data: finalObj,
                    key_usuario: Model.usuario.Action.getKey()
                }).then((resp) => {
                    SStorage.setItem("usr_log", JSON.stringify(finalObj)) //Modificar SStorage datos session
                    // Model.usuario.Action.CLEAR(); //Limpiar caché
                    Model.usuario.Action.syncUserLog()
                    SNavigation.goBack();
                }).catch((e) => {
                    SPopup.alert("Error en los datos");
                })
            }}
        />
    }

    render() {
        var usuario = Usuario.Actions.validateSession(this.props);
        if (!usuario) {
            // SNavigation.replace('/');
            return <SView />
        }
        this.usr = usuario;
        this.key = usuario.key;
        var reducer = Usuario.Actions._getReducer(this.props);

        if (reducer.type == "editar" && reducer.error) {
            //reducer.error = [];
            reducer.estado = "";
            reducer.type = "";
            var txtError = reducer.error.find(d => d.error != "")
            if (reducer.error.length > 0) {
                SPopup.alert(txtError.error.toUpperCase() + ", Dato: " + txtError.nombre);
            }

            if (this.form) {
                this.form.uploadFiles(SSocket.api.root + "upload/usuario/" + this.key);
            }
            SNavigation.goBack();
            // SNavigation.replace("perfil");
            return <SView />
        }


        if (reducer.estado == "exito" && reducer.type == "editar") {
            reducer.estado = "";
            reducer.type = "";
            if (this.form) {
                this.form.uploadFiles(SSocket.api.root + "upload/usuario/" + this.key);
            }
            SNavigation.goBack();
            // SNavigation.replace("perfil");

            return <SView />
        }


        return (
            <SPage title={"Editar usuario"}>
                <SView center>
                    <SView col={"xs-11 md-6 xl-4"} center>
                        <SView height={8} />
                        {/* <SText fontSize={20} bold>{"Editar usuario!"}</SText> */}
                        <SView height={8} />
                        {/* <SView width={160} height={160}>
                            <KFotoPerfil data={usuario} component={"usuario"} />
                        </SView> */}
                        <SView col={"xs-12"}>
                            <SText color={"#DE5738"} fontSize={18} font={"LondonTwo"}>MIS DATOS</SText>
                        </SView>
                        {this.getForm()}
                        <SView height={16} />
                        <SView col={"xs-11"} row center>
                            <Kolping.KButtom primary props={{
                                type: "outline"
                            }}
                                onPress={() => {
                                    this.form.submit();
                                }}>
                                {"CONFIRMAR"}
                            </Kolping.KButtom>
                        </SView>
                        <SView height={36} />
                    </SView>
                    {/* <RolDeUsuario data={this.usr} /> */}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(EditarUsuario);