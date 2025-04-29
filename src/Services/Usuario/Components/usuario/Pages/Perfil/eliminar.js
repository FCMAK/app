import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { SDate, SImage, SNavigation, SPage, SView, SButtom, SText, SIcon, SHr, STheme, SPopup } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import CerrarSession from './CerrarSession';
import Kolping from '../../../../../../Components/Kolping';
import { Container } from '../../../../../../Components';
import Model from '../../../../../../Model';

// import AppParams from '../../Params';
// import FilePreview from '../CarpetasPage/FilePreview';
// import * as SImageImput from '.././../Component/SImageImput';
// import moment from 'moment';
// import SImage from '../../Component/SImage';
// import CerrarSession from './CerrarSession';


class Eliminar extends Component {
    static navigationOptions = {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        // this.props.dispatch({
        //     component: "image",
        //     type: "cambio",
        //     url: AppParams.urlImages + "usuario_" + usuario.key,
        // })
    }

    load_data() {
        this.data = Model.usuario.Action.getUsuarioLog();
        return this.data;
    }

    getInfo() {
        if (!this.load_data()) return <SLoad />
        return (
            <SView card col={"xs-11"} style={{ padding: 25 }}>
                <SText center color={STheme.color.primary} fontSize={22} font='LondonBetween' >¿Estás seguro de eliminar tu cuenta en Kolping App?</SText>
                <SView height={20} />
                <SView center>
                    <SView width={130} center height={130} style={{ backgroundColor: STheme.color.white, borderRadius: 85 }}>
                        <SIcon name='eliminarCuenta' width={80} height={80} fill={STheme.color.info} />
                    </SView>
                </SView>
                <SView height={20} />
                <SView
                    row
                    col={'xs-12'}
                    center
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: STheme.color.card
                    }}></SView>
                <SView height={15} />
                <SText fontSize={18} font='LondonMM' bold >¿Qué ocurre si elimino mi cuenta definitivamente?</SText>
                <SView height={15} />
                <SView col={"xs-12"} row>
                    <SView col={"xs-1"} >
                        <SView width={5} height={5} style={{ backgroundColor: STheme.color.primary, borderRadius: 5, top: 5, left: 5 }} />
                    </SView>
                    <SText col={"xs-11"} fontSize={15} font='LondonMM'>No podrás iniciar sesión en Kolping App.</SText>
                    <SHr height={10} />
                    <SView col={"xs-1"} >
                        <SView width={5} height={5} style={{ backgroundColor: STheme.color.primary, borderRadius: 5, top: 5, left: 5 }} />
                    </SView>
                    <SText col={"xs-11"} fontSize={15} font='LondonMM'>La eliminación de tu cuenta será definitiva.</SText>
                    <SHr height={10} />
                    <SView col={"xs-1"} >
                        <SView width={5} height={5} style={{ backgroundColor: STheme.color.primary, borderRadius: 5, top: 5, left: 5 }} />
                    </SView>
                    <SText col={"xs-11"} fontSize={15} font='LondonMM'>Perderás acceso a todos los servicios asociados con tu cuenta.</SText>
                    <SHr height={10} />
                    <SView col={"xs-1"} >
                        <SView width={5} height={5} style={{ backgroundColor: STheme.color.primary, borderRadius: 5, top: 5, left: 5 }} />
                    </SView>
                    <SText col={"xs-11"} fontSize={15} font='LondonMM'>Todos tus datos, configuraciones y contenido relacionado con tu cuenta serán eliminados de forma permanente y no podrán ser recuperados.</SText>
                </SView>

                <SView height={40} />
                <SView center>
                    <Kolping.KButtom secondary fontSize={20} onPress={() => {
                        SNavigation.goBack()
                    }}>CANCELAR</Kolping.KButtom>
                </SView>
                <SHr height={15} />
                <SView center>
                    <Kolping.KButtom primary fontSize={20} onPress={() => {
                        SPopup.confirm({
                            title: "Eliminar cuenta", message: "¿Estás seguro de eliminar la cuenta?", onPress: () => {
                                Model.usuario.Action.editar({
                                    data: {
                                        ...this.data,
                                        estado: 0
                                    },
                                }
                                );
                                Model.usuario.Action.CLEAR() //Limpiar caché
                                Model.usuario.Action.unlogin();
                            }
                        })
                    }}>ELIMINAR CUENTA</Kolping.KButtom>
                </SView>
                <SView height={20} />
            </SView>
        )
    }

    render() {
        return (
            <SPage title="Eliminar mi cuenta" >
                <SHr height={20} />
                <Container>
                    {this.getInfo()}
                </Container>
                <SView height={20} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Eliminar);