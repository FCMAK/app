import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SDate } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import sucursal from '../../../../../Services/Kolping/Components/sucursal';

class Confirmacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_doctor = SNavigation.getParam("key"); //key por navegador
        this.dia = SNavigation.getParam("dia");
        this.hora = SNavigation.getParam("hora");
        this.fecha = SNavigation.getParam("fecha");
        this.fecha_final = new SDate(this.fecha + "-" + this.dia, "yyyy-MM-dd");
        this.key_sucursal = SNavigation.getParam("keysuc"); //key por navegador
    }
    render() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        var dataDoctor = data[this.key_doctor];
        var data2 = Especialidad_.Actions.getAll(this.props);
        if (!data2) return <SLoad />;
        var dataEspecialidad = data2[dataDoctor.smmed_cesp];

        var sucursales = sucursal.Actions.getAll(this.props);
        if (!sucursales) return <SLoad />
        return (
            <SPage title={'Confirmar'} center>
                <SHr height={20} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SView col={"xs-12"} row center style={{ backgroundColor: STheme.color.primary, borderRadius: 15, }}>
                        <SHr height={20} />
                        <SView col={"xs-6"} row center style={{ backgroundColor: STheme.color.white, borderRadius: 15, }}>
                            <SView col={"xs-12"} center >
                                <SHr height={10} />
                                <SView width={60} height={60} style={{ borderRadius: 20 }}>
                                    <SImage src={SSocket.api.root + Parent.component + "/" + this.key_doctor} style={{
                                        borderRadius: 30,
                                        resizeMode: "cover"
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-12"} center >
                                <SHr height={5} />
                                <SText center font={"LondonTwo"} color={STheme.color.black} fontSize={24}>{dataDoctor?.smmed_dmed}</SText>
                                <SView col={"xs-12"} row >
                                    <SView col={"xs-12"} center>
                                        <SText font={"LondonBetween"} color={STheme.color.info} fontSize={18}>{dataEspecialidad?.smtur_desp}</SText>
                                    </SView>
                                </SView>
                                <SHr height={10} />
                            </SView>
                        </SView>
                        <SHr height={25} />
                        <SView col={"xs-10"} center row>
                            <SView col={"xs-3"} height={25} >
                                <SIcon name={"ffecha"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText font={"Roboto"}  fontSize={20} color={STheme.color.white}>{this.fecha_final.toString("MONTH dd")}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-3"} height={25} >
                                <SIcon name={"fhora"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText font={"Roboto"} fontSize={20} color={STheme.color.white}>{this.hora}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-3"} height={55} >
                                <SIcon name={"fcentro"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>{sucursales[this.key_sucursal].nombre}</SText>
                                <SHr />
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.white}>{sucursales[this.key_sucursal].direccion}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-3"} height={25} >
                                <SIcon name={"cellphone"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>334-9946</SText>
                            </SView>
                            <SHr height={30} />
                            <SView col={"xs-12"} center>
                                <SText fontSize={40} font={"LondonTwo"} color={STheme.color.white}>N#32</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-12"} center>
                                <SText center fontSize={16} font={"Roboto"} color={STheme.color.white} style={{ borderTopWidth: 1, borderColor: STheme.color.white }} >  TOTAL  </SText>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>Bs. 100</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-12"} center>
                            <SHr height={55} />
                            <Kolping.KButtom secondary onPress={() => {
                                SNavigation.navigate("ficha/pago")
                            }} >CONTINUAR </Kolping.KButtom>
                        </SView>
                        <SView col={"xs-10 sm-8 md-8 lg-10 xl-10"} center>
                            <SHr height={30} />
                            <SText fontSize={14} center font={"Roboto-Bold"} color={STheme.color.white}>IMPORTANTE: Por favor tome en cuenta que no se aceptan cambios ni devoluciones una vez realizada la compra.</SText>
                            <SHr height={20} />
                        </SView>
                    </SView>
                    <SHr height={30} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Confirmacion);