import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SDate, SMath } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Container from '../../Components/Container';
import Model from '../../Model';

class Confirmacion extends Component {
    constructor(props) {
        super(props)
        this.key = SNavigation.getParam("key")
    }
    componentDidMount() {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "getByKey",
            key_usuario: Model.usuario.Action.getKey(),
            key: this.key,
        }).then(e => {
            this.setState({ data: e.data })
        }).catch(e => {
        })
    }

    getTotal() {
        let total = 0;
        const detalle = this.state?.data?.data?.detalle;
        if (detalle) {
            detalle.map((a) => {
                total += a.PreV01
            })
        }
        return total;
    }

    render() {
        let dataDoctor = {
            TitMed: "Dr.",
            NomMed: "Ricardo Paz Demiquel",
            NomEsp: "Sistemas"
        }
        let suc = {
            NomSuc: "Nombre de la sucursal",
            DirSuc: "Direccion de la sucursal",
            TelSuc: "75395848"
        }
        // let fecha_final = this.fecha_final.toString("MONTH dd");
        let fecha_final = "yyy-Mm-DD"
        return (
            <SPage title={'Confirmar'} >
                <SHr height={20} />
                <Container >
                    {/* <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row center> */}
                    <SView col={"xs-12"} row center style={{ backgroundColor: STheme.color.primary, borderRadius: 15, }}>
                        <SHr height={20} />
                        <SView col={"xs-6"} padding={5} row center style={{ backgroundColor: STheme.color.white, borderRadius: 15, }}>
                            <SView col={"xs-12"} center >
                                <SHr height={10} />
                                <SView width={60} height={60} style={{ borderRadius: 100, backgroundColor: STheme.color.card, borderWidth: 1, borderColor: STheme.color.primary }}>
                                    <SImage src={SSocket.api.root + "doctor/" + this.key_doctor} style={{
                                        borderRadius: 30,
                                        resizeMode: "cover"
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-12"} center >
                                <SHr height={5} />
                                <SText center font={"LondonTwo"} color={STheme.color.black} fontSize={16}>{dataDoctor?.TitMed} {dataDoctor?.NomMed}</SText>
                                <SView col={"xs-12"} row >
                                    <SView col={"xs-12"} center>
                                        <SText font={"LondonBetween"} color={STheme.color.info} fontSize={18}>{dataDoctor?.NomEsp}</SText>
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
                                <SText font={"Roboto"} fontSize={20} color={STheme.color.white}>{this.state?.data?.data?.fecha}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-3"} height={25} >
                                <SIcon name={"fhora"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                {/* <SText font={"Roboto"} fontSize={20} color={STheme.color.white}>{this.hora}</SText> */}
                                {/* {this.datosNav.turno.DesTur != "" ? <SText font={"LondonBetween"} fontSize={16} color={STheme.color.white} >{this.datosNav.turno.DesTur}</SText> : <SText font={"LondonBetween"} fontSize={16} color={STheme.color.white} >Atención por orden de llegada</SText>} */}
                                <SHr height={4} />
                                <SText font={"LondonBetween"} fontSize={18} color={STheme.color.white} >{"00:00"} - {"00:00"}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-3"} height={55} >
                                <SIcon name={"fcentro"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>Kolping "{suc?.NomSuc}"</SText>
                                <SHr />
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.white}>{suc?.DirSuc}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-3"} height={25} >
                                <SIcon name={"cellphone"} width={25} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>{suc?.TelSuc}</SText>
                            </SView>
                            <SHr height={30} />
                            <SView col={"xs-12"} center>
                                <SText fontSize={40} font={"Roboto"} color={STheme.color.white}>{this.state?.data?.data?.codtur}{this.state?.data?.data?.comtur}</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-12"} center>
                                <SText center fontSize={16} font={"Roboto"} color={STheme.color.white} style={{ borderTopWidth: 1, borderColor: STheme.color.white }} >  TOTAL  </SText>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>Bs. {SMath.formatMoney(this.getTotal())}</SText>
                            </SView>
                        </SView>
                        <SHr height={30} />
                        <SView col={"xs-11"} center padding={10} backgroundColor={"#FFF9C5"} style={{ borderRadius: 8 }}>
                            <SText fontSize={12} center >NOTA: Es necesario presentarse 15 minutos antes de su cita programada para  asegurarnos de que reciba la mejor atención.</SText>
                        </SView>
                        <SView col={"xs-12"} center>
                            <SHr height={30} />
                            <Kolping.KButtom secondary width={300} onPress={() => {
                                SSocket.sendPromise({
                                    component: "orden_compra",
                                    type: "confirmar",
                                    key: this.key,
                                    key_usuario: Model.usuario.Action.getKey()
                                }).then(e => {

                                }).catch(e => {

                                })
                                SNavigation.navigate("ficha/pago")
                            }} >CONTINUAR </Kolping.KButtom>
                        </SView>
                        <SView col={"xs-10 sm-8 md-8 lg-10 xl-10"} center>
                            <SHr height={30} />
                            <SText fontSize={11} center font={"Roboto-Bold"} color={STheme.color.white}>IMPORTANTE: Por favor tome en cuenta que no se aceptan cambios ni devoluciones una vez realizada la compra.</SText>
                            <SHr height={20} />
                        </SView>
                    </SView>
                    <SHr height={30} />
                    {/* </SView> */}
                </Container>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Confirmacion);