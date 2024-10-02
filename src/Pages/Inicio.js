import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SThread } from 'servisofts-component';
import Pages from '.';
import Kolping from '../Components/Kolping';
import sucursal from '../Services/Kolping/Components/sucursal';
import Model from '../Model';
import { FlatList, ScrollView } from 'react-native';
import SSocket from 'servisofts-socket';
import SVideo from '../Components/SVideo';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        if (Model.usuario.Action.getKey()) {
            SSocket.sendPromise({
                component: "paciente_usuario",
                type: "getAll",
                key_usuario: Model.usuario.Action.getKey()
                // ci: "6392496"
            }).then(e => {
                // console.log(e);
                this.setState({ data: e.data })
            }).catch(e => {
                console.log(e);
            })
        } else {
            this.setState({ data: {} })
        }

        // if (!usuario.Actions.validateSession(this.props)) {
        //     return <SLoad />
        // }

        SSocket.sendPromise({
            component: "novedades",
            type: "getAll",
            key_usuario: Model.usuario.Action.getKey()
            // ci: "6392496"
        }).then(e => {
            // console.log(e);
            this.setState({ dataBanner: e.data })
        }).catch(e => {
            console.log(e);
        })
    }
    getCard() {
        return <SView col={"xs-12"} center style={{
            position: 'absolute',
            top: 60,
        }}>
            <SView width={300} height={155} center>
                <SView col={"xs-12"} height style={{ position: "absolute", }}><SIcon name={"homeBox"} fill={"#01899233"} width={"100%"} height={"100%"} /></SView>
                <SText font={"LondonTwo"} color={STheme.color.white} fontSize={18}>{`¿Necesitas un Médico?`}</SText>
                {/* <SHr height={14} /> */}
                {/* <SText font={"LondonBetween"} color={STheme.color.white} fontSize={16} width={220}>{`Reserva tu cita con nuestros especialistas!`}</SText> */}
                <SHr height={16} />
                <SView col={"xs-12"} center>
                    <Kolping.KButtom secondary small onPress={() => {
                        SNavigation.navigate("/ficha")
                    }} width={130} height={35}>Comprar ficha</Kolping.KButtom>
                </SView>
                <SView style={{
                    position: "absolute",
                    right: -13,
                    bottom: 30,
                }} width={87} height={145}>
                    <SIcon name={"Enfermera7"} />
                </SView>
                {/* <SView style={{
                    position: "absolute",
                    right: -13,
                    bottom: 30,
                    transform: [{ scale: 1.5 }]
                }} width={87} height={145}>
                    <SVideo ref={(ref) => {
                        new SThread(100, "asdasd").start(() => {
                            if (ref) ref.play()
                        })
                    }} src={"https://drive.servisofts.com/http/videos/muneca/saludo (2).webm"} muted autoplay loop />
                </SView> */}
            </SView>
        </SView>
    }

    getSucursales() {
        var sucursales = sucursal.Actions.getAll(this.props);
        // var sucursales = null;
        if (!sucursales) return <SLoad />
        return Object.keys(sucursales).map((key) => {
            return <>
                <sucursal.Item obj={sucursales[key]} onPress={() => {
                    SNavigation.navigate("sucursal/mapa", { key: key })
                }} />
                <SHr height={16} />
            </>
        })
    }

    renderItemPaciente({ index, item }) {
        // console.log(item);
        return <SView width={160} height={180} padding={10} >
            <SView width={150} height padding={5} style={{
                borderRadius: 15,
                // borderWidth: 1,
                // borderColor: STheme.color.darkGray,
                backgroundColor: STheme.color.card
            }} row center>
                <SView width={80} height={80} style={{ borderRadius: 50, overflow: "hidden" }}>
                    <SImage src={require("../Assets/img/noimage.jpg")} />
                </SView>
                <SView center col={'xs-12'}>
                    <SText fontSize={14} center font='LondonBetween'>{item?.alias}</SText>
                    <SHr />
                    <SText font='LondonBetween' color={STheme.color.gray}>{item?.ci}</SText>
                </SView>
            </SView>
        </SView>
    }

    renderItemServicios({ index, item }) {
        // console.log(item);
        return <SView height={180} onPress={() => {

        }}>
            <SView width={220} height padding={5} style={{
                borderRadius: 15,
                // borderWidth: 1,
                // borderColor: STheme.color.darkGray,
                backgroundColor: STheme.color.card
            }} row center>
                <SView width={214} height style={{ borderRadius: 16, overflow: "hidden" }} center>
                    {/* <SImage src={require("../Assets/img/noimage.jpg")} /> */}
                    <SImage src={SSocket.api.root + "novedades/" + item.key} style={{
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        maxWidth: "100%", minWidth: "100%", overflow: "hidden",
                        resizeMode: "cover",
                        height: 165
                    }} />
                </SView>
                <SView center col={'xs-12'} height={25} style={{
                    backgroundColor: STheme.color.primary + "90",
                    position: "absolute",
                    top: 65,
                    overflow: "hidden"
                }}>
                    <SText fontSize={18} font='LondonTwo' color={STheme.color.white}>{item?.titulo}</SText>
                </SView>
            </SView>
        </SView>
    }

    getPacientes() {
        // var pacientes = sucursal.Actions.getAll(this.props);
        // var sucursales = null;

        if (!this.state.data) return <SLoad />
        let data = Object.values(this.state.data)
        return <FlatList
            style={{ width: "100%" }}
            horizontal
            ListHeaderComponent={() => {
                return <SView width={100} height={180} padding={10} center onPress={() => {
                    SNavigation.navigate("/paciente/buscar")
                }}>
                    <SView width={100} height padding={5} style={{
                        borderRadius: 15,
                        backgroundColor: STheme.color.card
                    }} row center>
                        <SHr width={10} />
                        <SIcon name={"addUser"} fill={STheme.color.primary} width={50} height={50} />
                        <SView height={30} >
                            <SText>AGREGAR</SText>
                            <SText>PACIENTE</SText>
                        </SView>
                        <SHr width={10} />
                    </SView>
                </SView>
            }}
            showsHorizontalScrollIndicator={true}
            data={data}
            keyExtractor={item => item.key}
            renderItem={this.renderItemPaciente.bind(this)}
        />
    }

    getContactanos() {
        return <SView col={"xs-12"} center >
            <SView col={"xs-11"} center>
                <SHr height={14} />
                <SText font={"Dancing Script"} fontSize={16} color={"#018992"} style={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    textAlign: "center"
                }}>
                    {'«Cuando se trata de hacer el bien, el hombre debe ser semejante a Dios o por lo menos tratar de serlo.»\n\(P.B. Adolfo Kolping)'}
                </SText>
                <SHr height={20} />
                <SView>
                    <Kolping.KButtom primary small>Contáctanos</Kolping.KButtom>
                </SView>
                <SHr height={20} />
            </SView>
        </SView>
    }
    getCardTrabajoSocial({ img, title, description }) {
        return <SView backgroundColor={STheme.color.card} height={200} width={150} style={{
            borderRadius: 20,
            borderWidth: 2,
            borderColor: STheme.color.card,
        }}>
            <SView center style={{ height: 100, width: 146 }}>
                <SImage src={img} style={{
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                }} />
            </SView>
            <SView center style={{ height: 66 }}>
                <SText font={"LondonMM"} style={{ padding: 3, }} fontSize={14} color={STheme.color.primary}>{title}</SText>
            </SView>
            <SView center style={{ height: 20 }} onPress={() => {
                // alert(title);
            }}>
                <SText font={"LondonMM"} fontSize={14} textDecorationLine={"underline"} color={STheme.color.info}>{description}</SText>
            </SView>
        </SView>
    }
    getTrabajoSocial() {
        return <SView col={"xs-12"} center >
            <SView col={"xs-11"}>
                <SHr height={15} />
                <SText font={"LondonMM"} fontSize={18} color={"#000"}>{'Trabajo social'}</SText>
                <SHr height={15} />
            </SView>
            <SView col={"xs-11"} row>
                {this.getCardTrabajoSocial({ img: require('../Assets/img/ts1.jpg'), title: 'Campaña “Atención médica y Cirugías oftalmológicas”', description: 'Leer mas >' })}
                <SView width={10} />
                {this.getCardTrabajoSocial({ img: require('../Assets/img/ts1.jpg'), title: 'Campaña “Veo Veo”', description: 'Leer mas >' })}
            </SView>
            <SHr height={25} />
        </SView >
    }

    getButtom({ label, url, icon }) {
        return <SView width={90} height={130} center>
            <SView col={"xs-12"} height center style={{
                overflow: "hidden",
            }} onPress={() => {
                SNavigation.navigate(url)
            }}>
                <SView center col={"xs-12"}>
                    <SIcon name={icon} height={80} width={80} />
                </SView>
                <SView col={"xs-12"} height={34} center flex>
                    <SText center font={"LondonMM"} fontSize={15}>{label}</SText>
                </SView>
            </SView>
        </SView>
    }
    getContent1() {
        return <SView col={"xs-12"} row center style={{
            justifyContent: "space-between"
        }}>
            {this.getButtom({ label: 'Farmacia', url: 'domicilio/farmacia', icon: 'SDfarmacia' })}
            {this.getButtom({ label: 'Óptica', url: 'domicilio/optica', icon: 'SDoptica' })}
            {this.getButtom({ label: 'Laboratorio', url: 'domicilio/laboratorio', icon: 'SDlaboratorio' })}
        </SView>
    }
    getAdministracion() {
        this.usr = Model.usuario.Action.getUsuarioLog()
        // var roles = Roles_permisos.components.usuarioRol.Actions.getAll(this.usr.key, null, this.props);
        var roles = Model.usuarioRol.Action.getAll();
        if (!roles) return <SLoad />
        if (Object.keys(roles).length <= 0) return null;
        return this.getButtom({ label: 'Administracion', url: 'admin', icon: 'Ajustes' })
    }
    getContent2() {
        return <SView col={"xs-12"} row center>
            <SHr height={10} />
            {this.getButtom({ label: 'Farmacia', url: 'farmacia', icon: 'sfarmacia' })}
            {this.getButtom({ label: 'Óptica', url: 'inDevelop', icon: 'soptica' })}
            {this.getButtom({ label: 'Laboratorio', url: 'inDevelop', icon: 'slaboratorio' })}
            {this.getButtom({ label: 'Enfermería', url: 'inDevelop', icon: 'senfermeria' })}
            {this.getButtom({ label: 'Imagenología', url: 'servicio/lista', icon: 'simagenologia' })}
            {this.getAdministracion()}
        </SView>
    }

    getServicios() {
        if (!this.state.dataBanner) return <SLoad />
        let data = Object.values(this.state.dataBanner)
        return <FlatList
            style={{ width: "100%" }}
            horizontal
            // ListHeaderComponent={() => {
            //     return <SView width={100} height={180} padding={10} center onPress={() => {
            //         SNavigation.navigate("/servicio/buscar")
            //     }}>
            //         <SView width={100} height padding={5} style={{
            //             borderRadius: 15,
            //             backgroundColor: STheme.color.card
            //         }} row center>
            //             <SHr width={10} />
            //             <SIcon name={"addUser"} fill={STheme.color.primary} width={50} height={50} />
            //             <SView height={30} >
            //                 <SText>AGREGAR</SText>
            //                 <SText>SERVICIO</SText>
            //             </SView>
            //             <SHr width={10} />
            //         </SView>
            //     </SView>
            // }}
            ItemSeparatorComponent={() => <SView width={8} />}
            showsHorizontalScrollIndicator={true}
            data={data}
            keyExtractor={item => item.key}
            renderItem={this.renderItemServicios.bind(this)}
        />
        return <SView col={"xs-12"} row center>
            <SHr height={10} />
            {/* {this.getButtom({ label: 'Farmacia', url: 'farmacia', icon: 'sfarmacia' })}
            {this.getButtom({ label: 'Óptica', url: 'inDevelop', icon: 'soptica' })}
            {this.getButtom({ label: 'Laboratorio', url: 'inDevelop', icon: 'slaboratorio' })}
            {this.getButtom({ label: 'Enfermería', url: 'inDevelop', icon: 'senfermeria' })}
            {this.getButtom({ label: 'Imagenología', url: 'servicio/lista', icon: 'simagenologia' })}
            {this.getAdministracion()} */}
        </SView>
    }


    render() {
        // if (!Model.usuario.Action.getKey()) {
        //     console.log("aquiiii INICIOOOO no hay user")
        //     return SNavigation.replace("login")
        // }
        // var UsuaioPage = Pages["usuarioPage/lista"];
        return (
            <SPage title={'Inicio'} hidden disableScroll>
                <SView col={"xs-12"} flex>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <SView col={"xs-12"} center>
                            <SHr height={240} />
                            <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                                {/* <BloqueTiempo /> */}
                                <SView col={"xs-12"}>
                                    <SText font={"LondonMM"} fontSize={18}>{'Servicios a domicilio:'}</SText>
                                </SView>
                                <SView col={"xs-12"} height={20}></SView>
                                {this.getContent1()}
                                <SView col={"xs-12"} height={20}></SView>
                                <SView col={"xs-12"}>
                                    <SText font={"LondonMM"} fontSize={18}>{'Nuestros servicios:'}</SText>
                                </SView>
                                {this.getServicios()}
                                <SView col={"xs-12"} height={20}></SView>


                                {(!Model.usuario.Action.getKey()) ? null : <>
                                    <SView col={"xs-12"} row>
                                        <SView col={"xs-9.5 md-10 lg-10 xl-10"}>
                                            <SText font={"LondonMM"} fontSize={18}>{'Mis pacientes:'}</SText>
                                        </SView>
                                        <SView col={"xs-2.5 md-2 lg-2 xl-2"} height row style={{ alignItems: 'center', }} onPress={() => { this.setState({ categoria: obj }) }} >
                                            <SView col={"xs-10 "}  >
                                                <SText fontSize={12} font={"LondonMM"} style={{ fontWeight: "bold", }}>Ver todos</SText>
                                            </SView>
                                            <SView col={"xs-2"} height center >
                                                <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
                                            </SView>
                                        </SView>
                                    </SView>
                                    {this.getPacientes()}
                                    <SView col={"xs-12"} height={20}></SView>
                                </>}



                                {/* <SView col={"xs-11"}>
                                    <SText font={"LondonMM"} fontSize={18}>{'Nuestros servicios:'}</SText>
                                </SView>
                                {this.getContent2()} */}
                                <SView col={"xs-12"} >
                                    <SText font={"LondonMM"} fontSize={18}>{'Centros médicos:'}</SText>
                                    <SHr height={10} />
                                </SView>
                                <SView col={"xs-12"} center style={{
                                    minHeight: 300,
                                }}>
                                    {this.getSucursales()}
                                </SView>
                                <SHr height={20} />
                            </SView>
                            <Kolping.KFooter />
                        </SView>
                    </ScrollView>
                </SView>
                <SView height={250} col={"xs-12"} style={{
                    position: "absolute",
                }}>
                    <SGradient colors={[
                        STheme.color.background + "00",
                        STheme.color.background,
                        STheme.color.background,
                        STheme.color.background,
                        STheme.color.background,
                        STheme.color.background,
                        STheme.color.background,
                    ]} />
                </SView>
                <Kolping.KBarraUsuario />
                {this.getCard()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Inicio);