import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Detalle Servicio'} >
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                        <SHr height={20} />
                        <SView col={"xs-12"} style={{ padding: 8 }}  >
                            <SView col={"xs-12"} row>
                                <SIcon name={"logoLista"} width={14} />
                                <SView width={10} row></SView>
                                <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>MAMOGRAFÍA</SText>
                            </SView>
                            <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                            <SHr height={20} />
                            <SView col={"xs-12"} center backgroundColor={"#01899220"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                                <SView col={"xs-11"} >
                                    <SHr height={15} />
                                    <SText font={"LondonMM"} fontSize={16}>Una mamografía es un tipo especial de radiografía de las mamas. Puede ser usado para detectar el cáncer de seno. Si usted es menor a 40 años deberá tener orden médica. </SText>
                                    <SHr height={15} />
                                </SView>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-12"}>
                                <SView col={"xs-12"} style={{
                                    right: "-30%",
                                    top: "5%",
                                    position: "absolute",
                                }} center>
                                    <SView style={{
                                        width: 300,
                                        height: 500,
                                    }}>
                                        <SIcon name={`Enfermera7`} width={"100%"} fill={"#f0f"} />
                                    </SView>
                                </SView>
                                <SView col={"xs-11 sm-10 md-8 lg-8 xl-11"} row >
                                    <SHr height={20} />
                                    <SView col={"xs-8"} center >
                                        <SView col={"xs-12"} center backgroundColor={"#DE573820"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                                            <SView col={"xs-11"} >
                                                <SHr height={15} />
                                                <SView col={"xs-12"} row>
                                                    <SView col={"xs-10"}>
                                                        <SText font={"LondonTwo"} fontSize={16}>HORARIOS </SText>
                                                    </SView>
                                                    <SView col={"xs-2"} style={{ alignItems: "flex-end" }}>
                                                        <SIcon name={"Horario"} height={24} />
                                                    </SView>
                                                </SView>
                                                <SText font={"LondonMM"} fontSize={16}>Lunes a viernes: </SText>
                                                <SText font={"LondonMM"} fontSize={16}>07:00 A 12:00 – 14:00 A 18:00 </SText>
                                                <SText font={"LondonMM"} fontSize={16}>Sábados por medio:</SText>
                                                <SText font={"LondonMM"} fontSize={16}>09:00 A 11:00 </SText>
                                                <SHr height={15} />
                                            </SView>
                                        </SView>
                                        <SHr height={35} />
                                        <SView col={"xs-12"} center backgroundColor={"#01899220"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                                            <SView col={"xs-11"} >
                                                <SHr height={15} />
                                                <SView col={"xs-12"} row>
                                                    <SView col={"xs-10"}>
                                                        <SText font={"LondonTwo"} fontSize={16}>COSTO </SText>
                                                    </SView>
                                                    <SView col={"xs-2"} style={{ alignItems: "flex-end" }}>
                                                        <SIcon name={"Costo"} height={20} />
                                                    </SView>
                                                </SView>
                                                <SText font={"LondonMM"} fontSize={24}>Bs. 250</SText>
                                                <SHr height={15} />
                                            </SView>
                                        </SView>
                                        <SHr height={35} />
                                        <SView col={"xs-12"} center backgroundColor={"#DE573820"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                                            <SView col={"xs-11"} >
                                                <SHr height={15} />
                                                <SView col={"xs-12"} row>
                                                    <SView col={"xs-10"}>
                                                        <SText font={"LondonTwo"} fontSize={16}>SUCURSAL </SText>
                                                    </SView>
                                                    <SView col={"xs-2"} style={{ alignItems: "flex-end" }}>
                                                        <SIcon name={"Sucursal"} height={21} />
                                                    </SView>
                                                </SView>
                                                <SText font={"LondonMM"} fontSize={16}>Centro médico Paraíso</SText>
                                                <SHr height={15} />
                                            </SView>
                                        </SView>
                                    </SView>
                                </SView>
                            </SView>
                            <SHr height={150} />
                            <SView col={"xs-12"} center>
                                <Kolping.KButtom primary onPress={() => {
                                    servicio_domicilio.Actions.registro({
                                        tipo: "optica"
                                    }, this.props)

                                }} >SOLICITAR SERVICIO</Kolping.KButtom>
                            </SView>
                            <SHr height={30} />
                        </SView>
                    </SView>
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Detalle);