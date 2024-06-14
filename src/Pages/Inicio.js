import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Pages from '.';
import Kolping from '../Components/Kolping';
import sucursal from '../Services/Kolping/Components/sucursal';
import Model from '../Model';
import { ScrollView } from 'react-native';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        // if (!usuario.Actions.validateSession(this.props)) {
        //     return <SLoad />
        // }
    }
    getCard() {
        return <SView col={"xs-12"} center style={{
            position: 'absolute',
            top: 70,
        }}>
            <SView width={300} height={155} center>
                <SView col={"xs-12"} height style={{ position: "absolute", }}><SIcon name={"homeBox"} fill={"#01899233"} width={"100%"} height={"100%"} /></SView>
                <SText font={"LondonTwo"} color={STheme.color.white} fontSize={18}>{`¿Necesitas un Médico?`}</SText>
                {/* <SHr height={14} /> */}
                {/* <SText font={"LondonBetween"} color={STheme.color.white} fontSize={16} width={220}>{`Reserva tu cita con nuestros especialistas!`}</SText> */}
                <SHr height={16} />
                <SView col={"xs-12"} center>
                    <Kolping.KButtom secondary small onPress={() => {
                        SNavigation.navigate("ficha")
                    }} width={130} height={35}>Comprar ficha</Kolping.KButtom>
                </SView>
                <SView style={{
                    position: "absolute",
                    right: -13,
                    bottom: 30,
                }} width={87} height={145}><SIcon name={"Enfermera7"} /></SView>
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
        return <SView col={"xs-4"} height={130} style={{
            padding: 5,
        }}>
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
        return <SView col={"xs-12"} row center>
            <SHr height={10} />
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

    render() {
        // if (!Model.usuario.Action.getKey()) {
        //     console.log("aquiiii INICIOOOO no hay user")
        //     return SNavigation.replace("login")
        // }
        // var UsuaioPage = Pages["usuarioPage/lista"];
        return (
            <SPage title={'Inicio'} hidden disableScroll>
                <SView col={"xs-12"} flex>
                    <ScrollView  showsVerticalScrollIndicator={false}>
                        <SView col={"xs-12"} center>
                            <SHr height={240} />
                            <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>

                                {/* <BloqueTiempo /> */}

                                <SView col={"xs-11"}>
                                    <SText font={"LondonMM"} fontSize={18}>{'Servicios a domicilio:'}</SText>
                                </SView>
                                {this.getContent1()}
                                <SView col={"xs-12"} height={20}></SView>
                                {/* <SView col={"xs-11"}>
                                    <SText font={"LondonMM"} fontSize={18}>{'Nuestros servicios:'}</SText>
                                </SView>
                                {this.getContent2()} */}
                                <SHr height={30} />
                                <SView col={"xs-11"} center>
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