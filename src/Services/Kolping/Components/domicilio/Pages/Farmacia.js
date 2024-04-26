import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SForm, SInput } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import { Linking, Platform } from 'react-native'
import WhatsApp from '../../../../../Components/WhatsApp';
import Params from "../params.json"
class Farmacia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dato: "hola"
        };
    }
    getSubTitle({ title, url }) {
        return <>
            <SView col={"xs-12"} height={24} row center  >
                <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                    <SText fontSize={18} color={'#090F47'} font={"LondonMM"} bold >{title}</SText>
                </SView>
                <SView col={"xs-6"} row center style={{ justifyContent: 'flex-end', }}
                    onPress={() => { alert(url) }} >
                    <SText fontSize={12} color={'#090F47'} font={"LondonMM"} center style={{ fontWeight: "bold", }}>
                        Ver todos
                    </SText>
                    <SView width={6} />
                    <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
                </SView>
            </SView>
        </>
    }

    getProductoFavorito({ img, description, precio }) {
        return <>
            <SView width={149} row height={196} style={{ borderRadius: 8, overflow: 'hidden', borderColor: '#F3F4F5', borderWidth: 1, }}>
                <SView center col={"xs-12"} height={116} style={{ backgroundColor: '#F0F3F6' }}  >
                    <SImage src={img} />
                </SView>
                <SView col={"xs-12 "} height={80} style={{ paddingLeft: 18, paddingRight: 18, backgroundColor: 'white' }} >
                    <SView col={"xs-12"} flex center height={32} row  >
                        <SText col={"xs-12"} fontSize={12} font={"LondonMM"} style={{ alignContent: 'center', paddingTop: 2, justifyContent: 'flex-start', color: '#111111' }}>{description}</SText>
                    </SView>
                    <SView flex center height={48}   >
                        <SView col={"xs-12"} height={24} row center  >
                            <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                                <SText fontSize={14} color={'#090F47'} font={"LondonMM"} bold >{precio}</SText>
                            </SView>
                            <SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }}
                                onPress={() => { alert(description); }} >
                                <SIcon name={'IconFavTrue'} fill={STheme.color.info} height={24} width={24} />
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </SView >
            <SView width={18} />
        </>
    }


    render() {
        return (
            <SPage title={'Farmacia a Domicilio'} >
                <SView col={"xs-12 "} center  >
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                        <SHr height={20} />
                        <SView col={"xs-12"} style={{ padding: 8, }} center>

                            <SView col={"xs-12"}>
                                <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Farmacia Kolping</SText>
                                <SView col={"xs-12"} height={2} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary, }}></SView>
                                <SHr height={5} />
                                <SText font={"LondonBetween"} fontSize={15} >La farmacia más cerca que nunca, kolping pensando en tu seguridad y comodidad te envía  los medicamentos hasta tu casa.</SText>
                            </SView>

                            <SHr height={20} />
                            <SView col={"xs-12"}>
                                <SText color={STheme.color.text} bold font={"LondonBetween"} fontSize={16} >Horario de atención:</SText>
                                <SHr height={4} />
                                <SText font={"LondonBetween"} fontSize={15} >Lunes a Viernes 07:00 am a 19:00 pm</SText>
                                <SText font={"LondonBetween"} fontSize={15}>Sábados 08:00 am a 12:00 pm</SText>
                            </SView>

                            <SHr height={20} />
                            {/* <SView col={"xs-12"} row>
                                <SView col={"xs-6 md-7 lg-6 xl-6"}>
                                    <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16}>Informes y Cotizaciones:</SText>
                                </SView>
                                <SView col={"xs-6 md-5 lg-6 xl-6"} center row >
                                    <SView col={"xs-12 sm-6 md-6 lg-6 xl-6"} row center onPress={() => {

                                        var mensaje = `Hola, estoy interesado(a) en el servicio de Farmacia a domicilio.`;
                                        WhatsApp.send({ phone: Params["farmacia"]?.phone, menssage: mensaje })
                                    }}>
                                        <SIcon name={"whatsApp"} width={14} height={14} />
                                        <SText color={STheme.color.primary} font={"LondonBetween"}> {Params["farmacia"]?.phone}</SText>
                                    </SView>
                                    <SView width={20} />
                                </SView>
                            </SView> */}
                            <SHr height={20} />
                        </SView>
                    </SView>
                </SView>



                <SView col={"xs-12 "} height={10} />




                <SHr height={25} />
                <SView col={"xs-12"} center>
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.primary}>Llegamos hasta tu hogar</SText>
                    <SHr height={25} />
                    <Kolping.KButtom primary onPress={() => {
                        SNavigation.navigate("farmacia");
                    }}>VER CATÁLOGO</Kolping.KButtom>
                    <SHr height={30} />
                </SView>

            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Farmacia);