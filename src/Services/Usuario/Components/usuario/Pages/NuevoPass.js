import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SLoad } from 'servisofts-component';
import { SButtom, SDate, SForm, SNavigation, SPage, SPopup, SText, STheme, SView, SIcon } from 'servisofts-component';
import Usuario from '..';
// import BackgroundImage from '../../../Components/BackgroundImage';
// import FotoPerfilComponent from '../../../Components/FotoPerfilComponent';
// import LogoAnimado from '../../CargaPage/LogoAnimado';
// import RolDeUsuario from './RolDeUsuario';
import Kolping from '../../../../../Components/Kolping';
import Model from '../../../../../Model';
import CryptoJS from 'crypto-js';


class NuevoPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.user_to_rec = SNavigation.getAllParams();

    }

    alertErrorPassword() {
        return <SView col={"xs-11 md-8 xl-6"} row center style={{ height: 250, borderRadius: 8, }} backgroundColor={STheme.color.background} >
            <SView col={"xs-11"} height={40} />
            <SView col={"xs-11"}  >
                <SIcon name={"InputPassword"} height={100} fill={STheme.color.secondary} />
            </SView>
            <SView col={"xs-11"} height={15} />
            <SView col={"xs-12"} center  >
                <SText center color={STheme.color.darkGray} style={{ fontSize: 18, fontWeight: "bold" }}>Las contraseñas no coinciden</SText>
            </SView>
            <SView col={"xs-11"} height={30} />
        </SView>
    }
    
    getForm() {
        
        return <SForm
            ref={(ref) => { this.form = ref; }}
            row
            style={{
                justifyContent: "space-between",
            }}
            inputProps={{
                col: "xs-12",
                customStyle: "kolping",
            }}
            inputs={{
                Password: { label: "Introduce tu nueva contraseña", isRequired: true, type: "password",  icon: <SIcon name={"InputPassword"} width={40} height={30} /> },
                RepPassword: { label: "Confirma tu nueva contraseña", type: "password", isRequired: true,  icon: <SIcon name={"InputRePassword"} width={40} height={30} /> },
            }}
            onSubmit={(values) => {
                // if (this.key) {
                //     Usuario.Actions.recuperarPass({
                //         ...this.usr,
                //         ...values
                //     }, this.props);
                // } else {
                // Usuario.Actions.cambiarPassByCodigo(values,  this.props);
                // }

                if (values["Password"] != values["RepPassword"]) {
                    SPopup.open({ content: this.alertErrorPassword() });
                    return null;
                }
                values["Password"] = CryptoJS.MD5(values["Password"]).toString();
                delete values["RepPassword"]

                console.log(values.Password)
                console.log(this.user_to_rec)
                
                Model.usuario.Action.cambiarPassByCodigo({ password: values.Password, usuario_recuperado: this.user_to_rec }).then(resp => {
                    console.log(resp);
                    SNavigation.reset("login")
                    // var usr_rec = resp.data;
                    // SNavigation.navigate("/login/recuperar_pass", usr_rec);
                }).catch(e => {
                    console.error(e);
                })

            }}
        />
    }

    render() {
        //var bb = this.props.state.usuarioReducer.usuarioRecuperado;
        // var error = Usuario.Actions.getError("verificarCodigoPass", this.props);
        // if (error) {
        //     SPopup.alert("¡Código incorrecto!");
        // }
        // if(!this.props.state.usuarioReducer.usuarioRecuperado){
        //     SNavigation.goBack();
        // }
        // if (this.props.state.usuarioReducer.estado == "exito" && this.props.state.usuarioReducer.type == "cambiarPassByCodigo") {
        //     this.props.state.usuarioReducer.estado = "";
        //     // var dataRecuperar = Usuar
        //    SNavigation.navigate("login");
          
        // }
        return (
            <SPage title={"Registrar nueva contraseña"}>
                <SView center>
                    <SView col={"xs-11 md-6 xl-4"} center>
                        <SView height={40} />
                        <SText fontSize={24} color="#DE5738" font="LondonTwo" center>¡Restablece tu contraseña!</SText>
                        <SView height={30} />
                  
                        {/* {this.key ? <SView col={"xs-6"} height={150}> <FotoPerfilComponent data={this.usr} component={"usuario"} /> </SView> : null} */}
                        {this.getForm()}
                        <SView height={30} />
                        <SView col={"xs-11"} row center>
                            <Kolping.KButtom primary props={{
                                // type: STheme.color.primary
                            }}
                                onPress={() => {
                                    this.form.submit();
                                }}
                            >RESTABLECER CONTRASEÑA</Kolping.KButtom>
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
export default connect(initStates)(NuevoPass);