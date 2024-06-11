import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SIcon, SImage, SLoad, SNavigation, SPage, SText, STheme, SView, SInput, SPopup } from 'servisofts-component';
// import {  PButtom } from '../../../Components';
// import Model from '../../Model';
import { GeolocationMapSelect } from 'servisofts-rn-geolocation'
import KButtom from '../../../../../Components/Kolping/KButtom';
// import PopupAutoCompleteDireccion from './Components/PopupAutoCompleteDireccion';
class PacienteDireccion extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.callback = SNavigation.getParam("callback");
        this.hiddeDescripcion = SNavigation.getParam("hiddeDescripcion");
        // if (typeof this.callback != "function") {
        //     SNavigation.replace("/")
        // }
    }

    getImput() {
        if (this.hiddeDescripcion) return null;

        //  if (!this.props.state.direccion_usuarioReducer.miDireccion) return null;
        return <SView col={"xs-12"} >
            <SInput fontSize={16} placeholder={"Nombre de dirección"}
                customStyle={"kolping"}
                isRequired={true}
                height={55}
                icon={<SIcon name={"mapk"} width={40} height={30} />}
                style={{backgroundColor: STheme.color.white, borderRadius: 8}}
                ref={(ref) => { this.inpNombreUbicacion = ref }}
            />
        </SView>
    }

    getComponentBottom() {
        return <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} height={220} row center style={{
            backgroundColor: STheme.color.primary,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            overflow: "hidden",
        }}>
            <SHr height={16} />
            <SView col={"xs-11"} center row border={'transparent'}>
                {this.getImput()}
                <SHr height={10} />
            </SView>
            <SHr />
            <SView col={"xs-12"} row center border={'transparent'}>
                <SView width={40} center>
                    <SIcon name={'miUbi'} height={14} width={14} />
                </SView>
                <SView width={200} onPress={() => {
                    this.map.getMap().center();
                    // console.log("TODO: center map")
                }}>
                    <SText fontSize={15} color={STheme.color.white} bold>Utilizar mi ubicación actual</SText>
                </SView>
            </SView>
            <SHr />
            <SView col={"xs-8.8"} row center border={'transparent'}  >
                <KButtom secondary loading={this.state.loading} fontSize={16} onPress={() => {
                    var descripcion = "";
                    if (!this.hiddeDescripcion) {
                        if (!this.inpNombreUbicacion.verify()) {
                            return null;
                        }
                        descripcion = this.inpNombreUbicacion.getValue();
                    }
                    var data = {
                        descripcion: descripcion,
                        latitude: this.state?.data?.latitude,
                        longitude: this.state?.data?.longitude,
                        direccion: this.state?.data?.direccion,
                    }
                    if (this.callback) {
                        this.callback(data);
                        // SNavigation.goBack();
                    } else {
                        this.setState({ loading: true })
                        // Model.direccion_usuario.Action.registro({
                        //     data: data,
                        //     key_usuario: Model.usuario.Action.getKey(),
                        // }).then((resp) => {
                        //     this.setState({ loading: false })
                        //     SNavigation.goBack();
                        // }).catch((e) => {
                        //     this.setState({ loading: false })
                        // })
                    }

                }}>ELEGIR ESTA UBICACIÓN</KButtom>
            </SView>
            <SHr height={10} />
        </SView>
    }
    render() {
        return (
            <SPage center>
                <GeolocationMapSelect
                    ref={(map) => this.map = map}
                    icon={<SIcon name="MarcadorMapa" width={30} height={30} />}
                    onChange={(evt) => {
                        this.setState({ data: evt })
                    }} />
                {this.getComponentBottom()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(PacienteDireccion);