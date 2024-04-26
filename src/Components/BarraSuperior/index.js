import React, { Component } from 'react';
import { View, Text, Animated, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import { SIcon, SImage, SNavigation, SView, STheme } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import LogoAnimado from '../../Pages/CargaPage/LogoAnimado';
// import RelojEntrenamiento from '../../Pages/EntrenamientoPage/Entrenamiento/RelojEntrenamiento';
// import AppParams from '../../Params';
// import Svg from '../../Svg';
// import SImage from '../SImage';

class BarraSuperior extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
        };

    }

    startAnimation() {
        Animated.timing(this.state.anim, {
            toValue: 100,
            duration: !this.props.duration ? 300 : this.props.duration,
            useNativeDriver: true,
        }).start();
    }
    componentDidMount() {
        this.startAnimation();
    }

    getUser() {
        if (!this.props.state.usuarioReducer.usuarioLog) {
            return <View />
        }
        if (!this.props.state.usuarioReducer.usuarioLog.key) {
            return <View />
        }
        return (<>
            <View style={{
                width: 50,
                height: "100%",
                justifyContent: "center",
                // borderRadius:,
                borderBottomEndRadius: 30,
                borderTopLeftRadius: 8,
                overflow: "hidden",
                // alignItems:"center"
                // backgroundColor: "#fff"
            }}>
                <TouchableOpacity style={{
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "#ffffff22",
                }} onPress={() => {
                    SNavigation.navigate("perfil")
                    // this.props.navigation.navigate("UsuarioPerfilPage")
                }}>
                    <SImage src={SSocket.api.root + "usuario_" + this.props.state.usuarioReducer.usuarioLog.key} style={{
                        width: "100%",
                        height: "100%",
                    }} />
                    {/* {this.props.state.imageReducer.getImage(AppParams.urlImages + "usuario_" + this.props.state.usuarioReducer.usuarioLog.key, {
                        width: "100%",
                        height: "100%",
                    })} */}
                    {/* <SImage source={require("../../img/postgres.png")} style={{
                        width: "90%",
                        height: "90%",
                        resizeMode: "contain"
                    }} /> */}

                </TouchableOpacity>
            </View>
            <View style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                width: 14,
                height: 14,
                borderRadius: 100,
                backgroundColor: "#090"
            }}>
            </View>
        </>
        )
    }
    getTitle() {
        var text = ""
        if (this.props.title) {
            text = this.props.title;
        }
        return (<Text style={{
            color: "#fff",
            // fontSize: 12,
            fontWeight: "bold",
            // fontFamily:"myFont"
        }}>{text}</Text>)
    }
    getBack() {
        if (this.props.preventBack) {
            return <View />
        }
        // if (!SNavigation.lastRoute) {
        //     return <View />
        // }
        // if (!SNavigation.lastRoute.navigation.canGoBack()) {
        //     return <View />
        // }
        return <SView width height style={{
            justifyContent: 'center',
        }}>
            <SView onPress={() => {
                SNavigation.goBack();
            }} style={{
                maxWidth: 35,
            }} center height>
                <SIcon width={25} height={25} name={"Arrow"} fill={STheme.color.secondary} />
            </SView>
        </SView>
    }
    render() {
        return (
            <Animated.View style={{
                width: "100%",
                height: 45,
                flexDirection: "row",
                // backgroundColor: "#fff",
                transform: [
                    {
                        translateY: this.state.anim.interpolate({
                            inputRange: [0, 100],
                            outputRange: [-45, 0]
                        })
                    }
                ]
            }}>
                <View style={{
                    width: 135,
                    height: "100%",
                    position: "absolute",
                    right: 0,
                    backgroundColor: "#fff",
                }}>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#000",
                    borderBottomEndRadius: 30,
                    // borderWidth: 1,
                    borderColor: "#000",
                    // overflow: "hidden",
                }}>
                    <SView height width={50} center>
                        {this.getBack()}
                    </SView>
                    <View style={{
                        flex: 1,

                        justifyContent: "center",
                        // alignItems: "center"
                    }}>
                        {this.getTitle()}

                    </View>
                    {this.getUser()}


                </View>

                <View style={{
                    width: 100,
                    padding: 4,
                    // backgroundColor: "#fff"
                }}>
                    <LogoAnimado fill={"#222222"} duration={1000} />
                    {/* <SIcon name={""} width={10} height={10} /> */}

                </View>
            </Animated.View>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(BarraSuperior);