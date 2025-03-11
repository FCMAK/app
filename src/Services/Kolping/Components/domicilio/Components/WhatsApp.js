import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Parent from '../index'
import Model from '../../../../../Model';
import SSocket from 'servisofts-socket';
import WhatsApp from '../../../../../Components/WhatsApp';
class DomicilioWhatsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SView center row width={350} height={50} style={{
                borderRadius: 8,
                backgroundColor: STheme.color.primary
            }} onPress={() => {
                var usuario = Model.usuario.Action.getUsuarioLog();
                if (!usuario) {
                    SNavigation.navigate("login")
                    return;
                } else {
                    // btn.setLoading(true)
                    SSocket.sendPromise({
                        component: "servicio_domicilio",
                        type: "registro",
                        estado: "cargando",
                        key_usuario: Model.usuario.Action.getKey(),
                        data: {
                            tipo: "optica"
                        }
                    }).then(e => {
                        // console.log(e);
                        const obj = e.data;
                        var usuario = Model.usuario.Action.getUsuarioLog();
                        var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Óptica a domicilio. 
                                        Solicitud #${obj.numero}
                                        ${Params.url}${obj.numero}/`;
                        WhatsApp.send({ phone: Params["optica"]?.phone, menssage: mensaje })
                        SNavigation.navigate("domicilio/request", { numero: obj.numero });
                        // btn.setLoading(false)
                    }).catch(e => {
                        // btn.setLoading(false)
                    })
                }
            }}>
                <SIcon name='iWhatsApp' height={35} width={35} />
                <SView width={10} />
                <SText font={"LondonTwo"} fontSize={14} color={STheme.color.white}>CONTÁCTENOS POR WHATSAPP</SText>

            </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DomicilioWhatsApp);