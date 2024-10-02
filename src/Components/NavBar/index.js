import React, { Component, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { SButtom, SView, SImage, SDate, SNavigation, STheme, SIcon, SText, SScrollView2, SHr, SThread, SLoad } from 'servisofts-component';
import { connect } from 'react-redux';
import SSocket from 'servisofts-socket';
import Model from '../../Model';
// import CerrarSession from '../../Pages/Usuario/Page/Perfil/CerrarSession';




const ListaBotones = ({ fadeOut }) => {
    const [state, setState] = useState({ ready: false })
    useEffect(() => {
        state.ready = true;
        setState({ ...state })
    }, [])

    const usuario = Model.usuario.Action.getUsuarioLog();
    console.log(state)
    if (!state.ready) return <SView col={"xs-12"} flex center>
        <SLoad />
    </SView>
    return <SScrollView2 disableHorizontal >
        <SView col={"xs-12"} center>
            <SView height={20}></SView>
            <SView col={"xs-11"} row onPress={() => {
                fadeOut();
            }}  >
                <SView row col={"xs-10"} >
                    <SIcon fill="#666666" name={"Inicio"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Inicio</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>

            <SView col={"xs-11"} row onPress={() => { SNavigation.navigate("kolping"); fadeOut() }}  >
                <SView row col={"xs-10"} >
                    <SIcon fill="#666666" name={"Kolping"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Sobre Kolping</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>

            <SView col={"xs-11"} row onPress={() => { SNavigation.navigate("/paciente"); fadeOut() }}  >
                <SView row col={"xs-10"} >
                    <SIcon fill="#666666" name={"paciente"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Mis Pacientes</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>

            <SView col={"xs-11"} row onPress={() => {
                SNavigation.navigate("notification")
                fadeOut()
            }}  >
                <SView row col={"xs-10"}>
                    <SIcon fill="#666666" name={"KNotify"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Mis Notificaciones</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>

            <SView col={"xs-11"} row onPress={() => { SNavigation.navigate("farmacia/mensajeCarritoVacio"); fadeOut() }}  >
                <SView row col={"xs-10"}>
                    <SIcon fill="#666666" name={"Compras"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Mis Compras</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>

            <SView col={"xs-11"} row onPress={() => { SNavigation.navigate("cotizacion_farmacia/listaCotizada"); fadeOut() }}  >
                <SView row col={"xs-10"}>
                    <SIcon fill="#666666" name={"cotizacion"} height={22} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Mis Cotizaciones</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>
            {(usuario) ? <SView col={"xs-11"} row onPress={() => {
                SNavigation.navigate("admin")
                fadeOut()
            }}>
                <SView row col={"xs-10"}>
                    <SIcon fill="#666666" name={"Configuracion"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Configuración</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView> : null}


            <SView col={"xs-11"} row onPress={() => { }}  >
                <SView row col={"xs-10"}>
                    <SIcon fill="#666666" name={"Ayuda"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Ayuda</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>
            <SView col={"xs-11"} row onPress={() => {
                Model.usuario.Action.unlogin();
                SNavigation.reset("login");
                fadeOut()
            }}>
                <SView row col={"xs-10"}>
                    <SIcon fill="#666666" name={"salir"} height={20} width={20} style={{ paddingTop: 3 }} />
                    <SText center style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonBetween"}>Salir</SText>
                </SView>
                <SView style={{ right: 0, position: "absolute", top: 2 }} row >
                    <SIcon style={{ textAlign: "right" }} fill={STheme.color.secondary} name={"Icon1"} width={20} height={20} />
                </SView>
                <SView col={"xs-12"} height={30}></SView>
            </SView>
            <SView col={"xs-9.5 md-5.8 xl-3.8"} center style={{ bottom: 0, }}>
                <SIcon name={"Logo"} height={70} />
            </SView>
            <SView row center>
                <SText style={{ paddingLeft: 5, paddingTop: 2, color: "#666666", fontSize: 18 }} font={"LondonMM"}>Version 1.0.6</SText>
                <SHr height={15} />
            </SView>
        </SView>
    </SScrollView2>
}


const PerfilUsuario = ({ fadeOut }) => {
    const usuario = Model.usuario.Action.getUsuarioLog();
    return <SView backgroundColor={STheme.color.primary} width="100%" height={105} center
        style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} row>
        {(!usuario) ?
            <>
                <SView col={"xs-3"} center style={{ textAlign: "right" }} height>
                    <SView style={{
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "#fff",
                        backgroundColor: STheme.color.card,
                    }} center>
                        <SIcon name="nouser" height={35} width={35} fill={STheme.color.lightGray} />
                    </SView>
                </SView>
                <SView col={"xs-9"} onPress={() => {
                    SNavigation.navigate('login');
                    fadeOut()
                }}>
                    <SText font={"Roboto-Bold"}
                        style={{
                            color: "#fff",
                            fontSize: 17,
                        }}>Sin usuario</SText>
                    <SView height={22}
                        style={{
                            alignItems: 'center',
                        }} row>
                        <SText fontSize={12} color={"#eee"} font='LondonTwo' style={{
                        }}>Iniciar sesión </SText>
                        <SIcon name="logueo" width={10} fill={STheme.color.white} />
                    </SView>
                </SView>
            </> :
            <>
                <SView col={"xs-3"} center style={{ textAlign: "right" }} height>
                    <SView style={{
                        width: 50,
                        height: 50, borderRadius: 30, overflow: "hidden", borderWidth: 1, borderColor: "#fff",
                        backgroundColor: STheme.color.card,
                    }}>
                        <SImage src={SSocket.api.root + "usuario/" + usuario?.key + "?date=" + new Date().getTime()} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "cover"
                        }} />
                    </SView>
                </SView>
                <SView col={"xs-9"} onPress={() => {
                    SNavigation.navigate('perfil');
                    fadeOut()
                }}>
                    <SText font={"Roboto-Bold"}
                        style={{
                            color: "#fff",
                            fontSize: 20,
                        }}>{usuario.Nombres}</SText>
                    <SView height={22}
                        style={{
                            paddingLeft: 6,
                            alignItems: 'center',
                        }} row>
                        <SText fontSize={12} color={"#eee"} font='LondonTwo' style={{
                        }}>Ver perfil </SText>
                        <SIcon name="Ver" width={9} color="#fff" />
                    </SView>
                </SView>
            </>
        }
    </SView>
}
class NavBar extends React.Component {
    static INSTACE;
    static open() {
        NavBar.INSTACE.fadeIn();
    }
    static close() {
        NavBar.INSTACE.fadeOut();
    }

    constructor(props) {
        super(props);
        this.state = {
            timeAnim: 350,
            isOpen: false,
            width: 0,
        };
        NavBar.INSTACE = this;
        // this.animSize = new Animated.Value(0);
        this.animSize = new Animated.Value(!this.state.isOpen ? 0 : 1);

    }

    componentDidMount() {
        NavBar.INSTACE = this;
    }

    fadeIn() {
        this.setState({ isOpen: true });
        new SThread(100, "fadein NavNar", true).start(() => {
            Animated.timing(this.animSize, {
                toValue: 1,
                duration: this.state.timeAnim,
                useNativeDriver: true
            }).start();
        })
    }

    fadeOut() {

        Animated.timing(this.animSize, {
            toValue: 0,
            // duration: this.state.timeAnim,
            duration: 0,
            useNativeDriver: true
        }).start(() => {
            this.setState({ isOpen: false });
        });
    }



    getNav() {
        // var usuario = this.props.state.usuarioReducer.usuarioLog;
        // if (!usuario) {
        //     SNavigation.navigate('login');
        //     return <SView />
        // }
        // var usuario = this.props.state.usuarioReducer.usuarioLog ?? {
        //     Nombres: "SIN USUARIO"
        // }

        // var usuario = this.props.state.usuarioReducer.usuarioLog;
        // var usuario = Model.usuario.Action.getUsuarioLog();

        // var destacado = require("../../Assets/svg/perfil.jpg");
        return <SView col={"xs-9 md-6 xl-4"} height animated backgroundColor={STheme.color.background}
            style={{
                position: "absolute",
                // left: this.animSize.interpolate({
                //     inputRange: [0, 1],
                //     outputRange: ["-70%", "0%"],
                // }),
                transform: [{
                    translateX: this.animSize.interpolate({
                        inputRange: [0, 1],
                        outputRange: [this.state.width * -1, 0],
                    })
                }],
            }}
        >
            <PerfilUsuario fadeOut={this.fadeOut.bind(this)} />
            <ListaBotones fadeOut={this.fadeOut.bind(this)} />
        </SView>
    }
    render() {
        NavBar.INSTACE = this;
        if (!this.state.isOpen) return null;
        return (
            <SView style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                //backgroundColor: "#66000066",
                backgroundColor: STheme.color.card + "76",
            }}
                onLayout={(event) => { this.state.width = event.nativeEvent.layout.width }}
                activeOpacity={1}
                onPress={() => {
                    if (this.state.isOpen) {
                        this.fadeOut()
                    } else {
                        this.fadeIn();
                    }
                }
                }>
                {this.getNav()}
            </SView>
        );
    }
}

// const initStates = (state) => {
//     return { state }
// };
// export default connect(initStates)(NavBar);
export default (NavBar);