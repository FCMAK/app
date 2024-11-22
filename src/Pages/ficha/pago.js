import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SForm, SDate, SLoad } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import { Linking } from 'react-native';
import { Container } from '../../Components';
import Model from '../../Model';
import SSocket from 'servisofts-socket';
import SShared from '../../Components/SShared';

class Pago extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.key = SNavigation.getParam("key");
    }
    componentDidMount() {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "verificarPago",
            key: this.key,
            key_usuario: Model.usuario.Action.getKey()
        }).then(e => {
            this.setState({ data: e.data })

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

        }).catch(e => {
            console.log(e);
        })
    }
    getContentForm() {
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};
        // }
        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12 sm-9 md-8 lg-8 xl-10"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                nombre: { label: "NIT/CI", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                descripcion: { label: "Nombre completo", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}


        />
    }
    render() {
        if (!this.state.data) return
        const { confirmacion, fecha_on, paciente, data } = this.state?.data;
        console.log(this.state?.sucursal)
        return (
            <SPage title={'Pago de Ficha'} >
                <SHr height={30} />
                <Container>
                    <SView col={"xs-12"} center>
                        <SView col={"xs-12"} center >
                            <SView width={180} height={180} center style={{
                                borderRadius: 100,
                                // backgroundColor: STheme.color.primary,
                                borderWidth: 3,
                                borderColor: STheme.color.primary,
                            }}>
                                <SIcon fill={STheme.color.info} name={"ok"} width={120} height={120} />
                            </SView>
                            <SHr height={50} />
                            <SText font={"LondonTwo"} center fontSize={24} color={STheme.color.text}>GRACIAS POR SU COMPRA </SText>
                            <SHr height={30} />
                            <SText center font={"LondonMM"} fontSize={20}>Su ficha ha sido reservada correctamente. A continuación puede descargar su recibo y acceder a la factura a través de la plataforma de impuestos SIAT</SText>
                            <SHr height={20} />
                            <SView col={"xs-12"} card padding={20} row>
                                <SView col={"xs-6"} row>
                                    <SText color={STheme.color.darkGray} font='LondonBetween'>Nro. de transacción: </SText>
                                    <SText bold font='LondonBetween'>{confirmacion?.NroGrl}</SText>
                                </SView>
                                <SView col={"xs-6"} flex style={{ alignItems: 'flex-end' }}>
                                    <SView row >
                                        <SText color={STheme.color.darkGray} font='LondonBetween'>Fecha: </SText>
                                        <SText font='LondonBetween' bold>{new SDate(fecha_on).toString("dd-MM-yyyy hh:mm")}</SText>
                                    </SView>
                                </SView>
                                <SView col={"xs-12"} />
                                <SHr />
                                <SView col={"xs-6"} row>
                                    <SText color={STheme.color.darkGray} font='LondonBetween'>Paciente: </SText>
                                    <SText style={{ textTransform: "uppercase" }} bold font='LondonBetween'>{paciente?.alias}</SText>
                                </SView>
                                <SHr height={15} />
                                <SText color={STheme.color.darkGray} fontSize={16} font='LondonBetween'>Descripción Servicio: </SText>
                                <SHr h={1} color={STheme.color.lightGray} />
                                <SHr height={10} />
                                <SText color={STheme.color.darkGray} font='LondonBetween'>Turno: </SText>
                                {/* <SText style={{textTransform:"uppercase"}} bold font='LondonBetween'>{data?.codtur}{data?.comtur} | {data?.hortur} | {(new SDate(data?.fecha).toString("dd-MM-yyyy"))}</SText> */}
                                <SText style={{ textTransform: "uppercase" }} bold font='LondonBetween'>{data?.codtur}{data?.comtur} | {data?.hortur} | {data?.fecha}</SText>
                                <SHr />
                                <SText color={STheme.color.darkGray} font='LondonBetween'>Sucursal: </SText>
                                <SText style={{ textTransform: "uppercase" }} bold font='LondonBetween'>{this.state?.sucursal?.NomSuc}</SText>
                                <SHr />
                                <SView row col={"xs-12"}>
                                    <SText color={STheme.color.darkGray} font='LondonBetween'>Médico: </SText>
                                    <SText style={{ textTransform: "uppercase" }} bold font='LondonBetween'>{data?.nommed} </SText>
                                    <SText center fontSize={12} color={STheme.color.info} style={{ textTransform: "uppercase" }} bold font='LondonBetween'>({data?.nomesp}) </SText>
                                </SView>
                                <SHr height={15} />
                                <SView row col={"xs-12"} >
                                    <SText col={"xs-6"} bold fontSize={16} font='LondonBetween'>{data?.detalle[0]?.CodPro} {data?.detalle[0]?.NomPro}</SText>
                                    <SText col={"xs-6"} style={{ alignItems: "flex-end" }} bold fontSize={18} font='LondonBetween'>Bs. {data?.detalle[0]?.PreV01}</SText>
                                </SView>
                                <SHr h={1} color={STheme.color.lightGray} />
                            </SView>

                            <SHr height={20} />
                            <SView col={"xs-12"} row center >
                                <SView width={150} height={50} style={{
                                    borderRadius: 8,
                                    backgroundColor: STheme.color.primary,

                                }} row center
                                    onPress={() => {
                                        SShared.sharedB64(`data:application/pdf;base64,${this.state?.data?.confirmacion?.OdaPdf}`,
                                            {
                                                titulo: "com", message: "com",
                                                name: "fact.pdf"

                                            })
                                        // const base64Data = `data:application/pdf;base64,${this.state?.data?.confirmacion?.OdaPdf}`
                                        // const link = document.createElement("a");
                                        // link.href = base64Data;
                                        // link.download = "file.pdf"; // Nombre del archivo
                                        // link.click();
                                    }}>
                                    <SHr height={10} />
                                    <SIcon name={"descargar"} width={30} height={30} fill={STheme.color.white} />
                                    <SView width={5} />
                                    <SText font='LondonTwo' fontSize={16} color={STheme.color.white} >Descargar</SText>
                                    <SHr height={10} />

                                </SView>
                                <SView width={20} />

                                <SView width={150} height={50} style={{
                                    borderRadius: 8,
                                    backgroundColor: STheme.color.info,

                                }} row center
                                    onPress={() => {
                                        Linking.openURL(this.state?.data?.confirmacion?.FacUrl)
                                    }}>
                                    <SHr height={10} />
                                    <SIcon name={"factura"} width={30} height={30} fill={STheme.color.white} />
                                    <SView width={5} />
                                    <SText font='LondonTwo' fontSize={16} color={STheme.color.white} >Factura</SText>
                                    <SHr height={10} />
                                </SView>

                            </SView>


                            {/* <SText>Nro. de transacción: {this.state.NroGrl}</SText>
                            <SView onPress={() => {
                                Linking.openURL(this.state.FacUrl)
                            }}><SText style={{ color: STheme.color.link }}>{this.state.FacUrl}</SText></SView>
                            <SText width={800} onPress={() => {
                                const base64Data = `data:application/pdf;base64,${this.state.OdaPdf}`
                                const link = document.createElement("a");
                                link.href = base64Data;
                                link.download = "file.pdf"; // Nombre del archivo
                                link.click();
                            }}>OdaPdf: {this.state.OdaPdf}</SText> */}
                        </SView>
                    </SView>
                </Container>

                <SView col={"xs-12"} center>
                    <SHr height={65} />
                    <Kolping.KButtom primary onPress={() => {
                        SNavigation.navigate("/")
                    }} >ACEPTAR </Kolping.KButtom>
                    <SHr height={30} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Pago);