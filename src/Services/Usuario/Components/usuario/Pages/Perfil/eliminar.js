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
                <SText center color={STheme.color.primary} fontSize={22} font='LondonBetween' >Eliminar tu cuenta de Kolping App</SText>
                <SView height={15} />
                <SView
                    row
                    col={'xs-12'}
                    center
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: STheme.color.card
                    }}></SView>
                <SView height={15} />
                <SText fontSize={18} font='LondonMM' >¿Qué ocurre si elimino mi cuenta definitivamente?</SText>
                <SView height={15} />
                <SText fontSize={15} font='LondonMM'>No podrás iniciar sesión en la app.</SText>
                <SText fontSize={15} font='LondonMM'>La eliminación de tu cuenta será definitiva.</SText>
                <SText fontSize={15} font='LondonMM'>Al eliminar tu cuenta, perderás todos tus datos y no podrás recuperarlos.</SText>
                <SView height={20} />
                <SView center>
                    <SView width={130} center height={130} style={{ backgroundColor: STheme.color.white, borderRadius: 85 }}>
                        <SIcon name='eliminarCuenta' width={80} height={80} fill={STheme.color.info} />
                    </SView>
                </SView>
                <SView height={30} />
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
                <SView height={36} />
            </SView>
        )
    }

    render() {
        return (
            <SPage title="Eliminar cuenta" center>
                <Container>
                    {this.getInfo()}
                </Container>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Eliminar);