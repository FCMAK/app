import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SDate, SMath, SNotification } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Container from '../../Components/Container';
import Model from '../../Model';
import horarios from './horarios';

class Confirmacion extends Component {
    constructor(props) {
        super(props)
        this.pk = SNavigation.getParam("key")
    }
    componentDidMount() {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "getByKey",
            key_usuario: Model.usuario.Action.getKey(),
            key: this.pk,
        }).then(e => {

            if (e.data?.data?.nrosuc) {
                SSocket.sendPromise({
                    component: "sucursal",
                    type: "getAll",
                    key_usuario: Model.usuario.Action.getKey(),
                }).then(b => {
                    const suc = b.data.find(c => c.NroSuc == e.data?.data?.nrosuc)
                    this.setState({ sucursal: suc })
                })
            }

            if (e.data?.codpac) {
                SSocket.sendPromise({
                    component: "paciente_usuario",
                    type: "getAll",
                    key_usuario: Model.usuario.Action.getKey(),
                }).then(b => {
                    // this.setState({ pacientes: b.data })
                    const paciente = Object.values(b?.data).find(c => c.codper == e.data?.codpac)
                    // const paciente = b.data.find(c => c.codper == e.data?.codpac)
                    console.log("paciente", paciente);
                    this.setState({ paciente })
                    // const resultados = Object.values(b?.data).filter(item => item.codper === 215650);
                })
            }
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
            TitMed: "",
            // TitMed: "Dr.",
            NomMed: this.state?.data?.data?.nommed,
            NomEsp: this.state?.data?.data?.nomesp,
            CodMed: this.state?.data?.data?.codmed,
        }
        let suc = {
            NomSuc: this.state?.sucursal?.NomSuc,
            DirSuc: this.state?.sucursal?.DirSuc,
            TelSuc: this.state?.sucursal?.TelSuc,
            NroSuc: this.state?.sucursal?.NroSuc,
        }
        // let fecha_final = this.fecha_final.toString("MONTH dd");
        // let fecha_final = "yyy-Mm-DD"
        const datas = { ...this.state?.data?.data }
        const hora = (datas?.hortur) ? datas?.hortur.split("-")[0] : "";
        const fecha = this.state?.data?.data?.fecha;
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
                            <SView col={"xs-3"} height={22} >
                                <SIcon name={"paciente2"} width={22} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText font={"Roboto"} fontSize={18} color={STheme.color.white}>{this.state?.paciente?.alias}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-3"} height={22} >
                                <SIcon name={"ffecha"} width={22} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText font={"Roboto"} fontSize={18} color={STheme.color.white}>{fecha}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-3"} height={22} >
                                <SIcon name={"fhora"} width={22} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                {/* <SText font={"Roboto"} fontSize={20} color={STheme.color.white}>{this.hora}</SText> */}
                                {/* {this.datosNav.turno.DesTur != "" ? <SText font={"LondonBetween"} fontSize={16} color={STheme.color.white} >{this.datosNav.turno.DesTur}</SText> : <SText font={"LondonBetween"} fontSize={16} color={STheme.color.white} >Atención por orden de llegada</SText>} */}
                                <SHr height={4} />
                                <SText font={"LondonBetween"} fontSize={18} color={STheme.color.white} >{hora}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-3"} height={22} >
                                <SIcon name={"fcentro"} width={22} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText fontSize={18} font={"Roboto"} color={STheme.color.white}>Kolping "{suc?.NomSuc}"</SText>
                                <SHr />
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.white}>{suc?.DirSuc}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-3"} height={22} >
                                <SIcon name={"cellphone"} width={22} fill={STheme.color.white} />
                            </SView>
                            <SView col={"xs-9"}>
                                <SText fontSize={18} font={"Roboto"} color={STheme.color.white}>{suc?.TelSuc}</SText>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-12"} center>
                                <SText fontSize={35} font={"Roboto"} color={STheme.color.white}>{this.state?.data?.data?.codtur}{this.state?.data?.data?.comtur}</SText>
                            </SView>
                            <SView col={"xs-12"} center>
                                <SText center fontSize={16} font={"Roboto"} color={STheme.color.white} style={{ borderTopWidth: 1, borderColor: STheme.color.white }} >  TOTAL  </SText>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.white}>Bs. {SMath.formatMoney(this.getTotal())}</SText>
                            </SView>
                        </SView>
                        <SHr height={15} />
                        <SView col={"xs-11"} center style={{
                            // borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18,
                            borderLeftColor: STheme.color.info,
                            borderLeftWidth: 5,
                            backgroundColor: "#F8DDD7",
                            borderTopRightRadius: 8,
                            borderBottomRightRadius: 8,
                            padding: 5,
                            // marginBottom: 20,
                        }}>
                            <SText fontSize={13} center font={"Roboto-Bold"} color={STheme.color.text}>IMPORTANTE: Por favor revise los datos del paciente y la ficha, tomar en cuenta que no se aceptan cambios ni devoluciones una vez realizada la compra.</SText>
                        </SView>
                        <SHr height={10} />
                        <SView col={"xs-11"} center padding={5} backgroundColor={"#FFF9C5"} style={{ borderRadius: 8 }}>
                            <SText fontSize={12} center >NOTA: Es necesario presentarse 15 minutos antes de su cita programada para  asegurarnos de que reciba la mejor atención.</SText>
                        </SView>
                        <SView col={"xs-12"} center>
                            <SHr height={20} />
                            {/* <Kolping.KButtom secondary width={300} onPress={(ins) => {
                                ins.setLoading(true)
                                SSocket.sendPromise({
                                    component: "orden_compra",
                                    type: "dispensar",
                                    key: this.pk,
                                    key_usuario: Model.usuario.Action.getKey()
                                }).then(e => {
                                    if (e.estado != "exito") throw { error: "El servidor no respondió con éxito." }
                                    if (!e?.data?.status) {
                                        throw { error: e?.data?.message ?? "Error desconocido." }
                                    }
                                    ins.setLoading(false)
                                    // SNavigation.navigate("/ficha/qr", { key: this.pk })
                                    SNavigation.reset("/ficha/qr", { key: this.pk })
                                    // SNavigation.replace("/ficha/qr", { key: this.pk })
                                    // SNavigation.navigate("/ficha/pago", {data:e.data})
                                }).catch(e => {
                                    ins.setLoading(false)
                                    switch (e?.error) {
                                        case "Existen turnos no disponibles para la venta":
                                        case "turno no disponible":
                                        case "Uno de los Turnos no se encuantra disponible":
                                            SNotification.send({
                                                title: "Error, elegir otro turno",
                                                body: e?.error ?? "Error desconocido.",
                                                color: STheme.color.danger,
                                                time: 5000,
                                            })
                                            if (horarios.INSTANCE) horarios.INSTANCE.componentDidMount()
                                            SNavigation.navigate("/ficha/horarios", { codmed: dataDoctor.CodMed, fecha: fecha, nrosuc: suc.NroSuc })
                                            break;
                                        default:
                                            SNotification.send({
                                                title: "Error",
                                                body: e?.error ?? "Error desconocido.",
                                                color: STheme.color.danger,
                                                time: 5000,
                                            })
                                    }
                                   
                                    console.error(e);
                                })
                            }} >PAGAR </Kolping.KButtom>
                            <SHr height={20} /> */}
                            <Kolping.KButtom secondary width={300} onPress={(ins) => {
                                ins.setLoading(true)
                                SSocket.sendPromise({
                                    component: "orden_compra",
                                    type: "registrarPreOrden",
                                    key: this.pk,
                                    key_usuario: Model.usuario.Action.getKey()
                                }, 1000 * 60 * 5).then(e => {
                                    if (e.estado != "exito") throw { error: "El servidor no respondió con éxito." }
                                    if (!e?.data?.status) {
                                        throw { error: e?.data?.message ?? "Error desconocido." }
                                    }
                                    ins.setLoading(false)
                                    SNavigation.navigate("/ficha/qr", { key: this.pk })
                                    // SNavigation.navigate("/ficha/pago", {data:e.data})
                                }).catch(e => {
                                    ins.setLoading(false)
                                    switch ((e?.error ?? "").toLowerCase()) {
                                        case "Existen turnos no disponibles para la venta":
                                        case "turno no disponible".toLowerCase():
                                        case "Uno de los Turnos no se encuantra disponible".toLowerCase():
                                        case "Uno de los Turnos no se encuentra disponible".toLowerCase():
                                            SNotification.send({
                                                title: "Error",
                                                body: e?.error ?? "Error desconocido.",
                                                color: STheme.color.danger,
                                                time: 5000,
                                            })
                                            if (horarios.INSTANCE) horarios.INSTANCE.componentDidMount()
                                            SNavigation.navigate("/ficha/horarios", { codmed: dataDoctor.CodMed, fecha: fecha, nrosuc: suc.NroSuc })
                                            break;

                                        default:
                                            SNotification.send({
                                                title: "Error",
                                                body: e?.error ?? "Error desconocido.",
                                                color: STheme.color.danger,
                                                time: 5000,
                                            })
                                            SNavigation.goBack();
                                    }
                                    // SNotification.send({
                                    //     title: "Error",
                                    //     body: e?.error ?? "Error desconocido.",
                                    //     color: STheme.color.danger,
                                    //     time: 5000,
                                    // })
                                    console.error(e);
                                    // SNavigation.navigate("/ficha/horarios", { codmed: dataDoctor.CodMed, fecha: fecha, nrosuc: suc.NroSuc })
                                })
                            }} >PAGAR</Kolping.KButtom>
                        </SView>
                        <SHr height={30} />
                    </SView>
                    <SHr height={20} />
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