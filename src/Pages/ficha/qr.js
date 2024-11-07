import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SDate, SMath, SNotification } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import SSocket from 'servisofts-socket'
import Container from '../../Components/Container';
import Model from '../../Model';

class qr extends Component {
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

            SSocket.sendPromise({
                component: "orden_compra",
                type: "solicitarQr",
                key: e?.data?.key
            }, 1000 * 60).then(e => {
                this.setState({ qr: e.data })
            }).catch(e => {
                console.error(e);
            })
            if (e.data?.data?.nrosuc) {
                // SSocket.sendPromise({
                //     component: "sucursal",
                //     type: "getAll",
                //     key_usuario: Model.usuario.Action.getKey(),
                // }).then(b => {
                //     const suc = b.data.find(c => c.NroSuc == e.data?.data?.nrosuc)
                //     this.setState({ sucursal: suc })
                // })
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

        // let dataDoctor = {
        //     TitMed: "Dr.",
        //     NomMed: this.state?.data?.data?.nommed,
        //     NomEsp: this.state?.data?.data?.nomesp,
        // }
        // let suc = {
        //     NomSuc: this.state?.sucursal?.NomSuc,
        //     DirSuc: this.state?.sucursal?.DirSuc,
        //     TelSuc: this.state?.sucursal?.TelSuc
        // }
        // let fecha_final = this.fecha_final.toString("MONTH dd");
        // let fecha_final = "yyy-Mm-DD"
        const fecha = this.state?.data?.data?.fecha;
        return (
            <SPage title={'Pago Qr'} >
                <SHr height={10} />
                <Container >
                    {/* <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row center> */}
                    <SView col={"xs-12"} center style={{ backgroundColor: STheme.color.primary, borderRadius: 15, padding: 20 }}>
                        <SHr height={15} />
                        <SText center fontSize={18} color={STheme.color.white}>Para completar la reserva de su ficha, por favor cancele el monto correspondiente escaneando el siguiente código QR.</SText>
                        <SHr height={35} />
                        <SView center width={250} height={250}>
                            {!this?.state?.qr ? null : <SImage enablePreview src={`data:image/jpeg;base64,${this.state?.qr?.qr}`} />}
                        </SView>
                        <SHr />
                        <SText color={STheme.color.secondary}>{this?.state?.qr?.id}</SText>
                        <SHr height={30} />

                        <SView col={"xs-12"} center row>
                            <SView width={60} height={60} center style={{ borderRadius: 15, backgroundColor: STheme.color.info, borderWidth: 1, borderColor: STheme.color.primary }}>
                                <SIcon name={"descargar"} width={40} height={30} fill={STheme.color.white} />
                            </SView>
                            <SView width={25} />
                            <SView width={60} height={60} center style={{ borderRadius: 15, backgroundColor: STheme.color.info, borderWidth: 1, borderColor: STheme.color.primary }}>
                                <SIcon name={"compartir"} width={40} height={30} fill={STheme.color.white} />
                            </SView>
                            <SHr height={30} />
                            <Kolping.KButtom secondary width={300} onPress={(ins) => {
                                ins.setLoading(true)
                                SSocket.sendPromise({
                                    component: "orden_compra",
                                    type: "verificarPago",
                                    key: this.pk,
                                    qrid: this?.state?.qr?.id,
                                    key_usuario: Model.usuario.Action.getKey()
                                }).then(e => {
                                    let lbl = "";
                                    switch (e.data.statusId) {
                                        case 1: lbl = "Pendiente"; break;
                                        case 2:
                                            lbl = "Pagado";
                                            SNavigation.navigate("/ficha/pago", {})
                                            break;
                                        case 3: lbl = "Expirado"; break;
                                        case 4: lbl = "Con error"; break;
                                    }
                                    SNotification.send({
                                        title: "Estado del QR",
                                        body: lbl,
                                        time: 5000
                                    })
                                    ins.setLoading(false)
                                    // SNavigation.navigate("/ficha/pago", { data: e.data })
                                }).catch(e => {
                                    ins.setLoading(false)
                                    // console.error(e);
                                })
                            }} >VERIFICAR </Kolping.KButtom>
                            {/* <Kolping.KButtom secondary width={300} onPress={(ins) => {
                                ins.setLoading(true)
                                SSocket.sendPromise({
                                    component: "orden_compra",
                                    type: "confirmar",
                                    key: this.pk,
                                    key_usuario: Model.usuario.Action.getKey()
                                }).then(e => {
                                    ins.setLoading(false)
                                    SNavigation.navigate("/ficha/pago", { data: e.data })
                                }).catch(e => {
                                    ins.setLoading(false)
                                    console.error(e);
                                })
                            }} >ACEPTAR </Kolping.KButtom> */}
                        </SView>
                        <SView col={"xs-10 sm-8 md-8 lg-10 xl-10"} center>
                            <SHr height={30} />
                            <SText fontSize={11} center font={"Roboto-Bold"} color={STheme.color.white}>IMPORTANTE: Por favor tome en cuenta que no se aceptan cambios ni devoluciones una vez realizada la compra.</SText>
                            <SHr height={10} />
                        </SView>
                    </SView>
                    {/* </SView> */}
                </Container>
                <SHr height={10} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(qr);