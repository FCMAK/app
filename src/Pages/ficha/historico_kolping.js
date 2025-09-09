import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { SDate, SHr, SInput, SNavigation, SPage, SText, SView, SBuscador, SImage, STheme, SIcon } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import { Container } from '../../Components';
import { getAllHistorico } from './Actions';
import SelectFecha from './Components/SelectFecha';
import Kolping from '../../Components/Kolping';
import Model from '../../Model';

export default class historico extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

        this.getHistorico();
    }

    getHistorico = async () => {
        // var historico = await getAllHistorico()
        var resp = await SSocket.sendPromise({
            component: "orden_compra",
            type: "historyPreOrden",
            key_usuario: Model.usuario.Action.getKey()
        })
        var historico = resp.data;
        // var historico = await getAllHistorico("d51b11f5-005c-42d8-b1a5-6a7c4f128e7b")
        if (Object.keys(historico).length === 0) {
            SNavigation.navigate("/ficha/mensajeSinFicha")
        } else {
            let dataHistorico = Object.values(historico)
            dataHistorico = dataHistorico.filter(a => {
                return a.estado_pago != "pendiente"
            })
            let dataH = dataHistorico.sort((a, b) => {
                // const dateA = new SDate(a.fecReg, "yyyy-MM-ddThh:mm:ss").date
                const dateA = new SDate(a?.solApp?.solSer?.[0]?.fecSol, "yyyy-MM-ddThh:mm:ss").date
                // const dateB = new SDate(b.fecReg, "yyyy-MM-ddThh:mm:ss").date
                const dateB = new SDate(b?.solApp?.solSer?.[0]?.fecSol, "yyyy-MM-ddThh:mm:ss").date
                return dateB - dateA;
                // return dateA - dateB;
            });

            this.setState({ historico: dataH })
        }
    }

    formatDateToYYYYMMDD(fecha) {
        // Crear un objeto de fecha a partir del input
        const date = new Date(fecha);

        // Validar si la fecha es válida
        if (isNaN(date)) {
            throw new Error("Formato de fecha inválido");
        }

        // Obtener los componentes de la fecha en UTC
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mes (0-11) -> (1-12)
        const day = String(date.getUTCDate()).padStart(2, '0'); // Día del mes

        // Retornar en el formato deseado
        return `${year}-${month}-${day}`;
    }

    historicoItem({ item, index }) {
        let estado = "";
        let colorTexto = STheme.color.warning;

        switch (item.codEst) {
            case "PAG":
                estado = "PAGADO";
                colorTexto = STheme.color.success;
                break;
            case "PEN":
                estado = "PENDIENTE PAGO";
                colorTexto = STheme.color.warning;
                break;
            case "ANU":
                estado = "ANULADO";
                colorTexto = STheme.color.danger;
                break;
            default:
                estado = "--";
                colorTexto = STheme.color.danger;
        }

        // console.log("item", item)
        return <SView col={"xs-12"} card padding={8} row onPress={() => {
            // if (item.codEst == "PAG") {
            //     SNavigation.navigate("/ficha/pago", { key: item?.key })
            // } else {
            //     SNavigation.navigate("/ficha/qr", { key: item?.key })
            // }


        }}>
            <SView col={"xs-7"} row>
                <SView width={40} height={40} >
                    <SImage source={require("../../Assets/img/nofoto.jpg")} width={40} height={40} style={{
                        borderRadius: 100,
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "#ccc",
                        resizeMode: "contain"
                    }} />
                </SView>
                <SView width={8} />
                <SView col={"xs-9"}>
                    <SText font='LondonTwo' fontSize={12}>{item?.solApp?.solSer?.[0]?.nomMed}</SText>
                    <SText font='LondonBetween' color={STheme.color.info}>{item?.solApp?.solSer?.[0]?.nomEsp}</SText>


                </SView>
                <SHr height={3} />
                <SHr height={1} color={STheme.color.lightGray} />
                <SHr height={5} />
                <SText font='LondonBetween' center fontSize={10.5} color={colorTexto}>{estado}</SText>
                {/* <SHr height={5} /> */}

                {item.idePag != null ? <SView col={"xs-12"} row style={{ alignItems: "center" }}>
                    <SIcon name={"iconqr"} width={10} height={10} fill={STheme.color.gray} />
                    <SView width={5} />
                    <SText font='LondonBetween' fontSize={11} color={STheme.color.gray}>ID: {item.idePag}</SText>
                </SView> : null}

            </SView>
            <SView col={"xs-2"} center style={{
                padding: 5,
                borderLeftWidth: 1,
                borderColor: STheme.color.lightGray
            }}>
                <SText font='LondonTwo' fontSize={10}>FICHA</SText>
                <SText font='LondonTwo' fontSize={20}>{item?.solApp?.solSer?.[0]?.codTur}</SText>

            </SView>
            <SView col={"xs-3"} center style={{
                padding: 5,
                borderLeftWidth: 1,
                borderColor: STheme.color.lightGray
            }}>
                {item.estado == 0 ? <SView height={18} width={80} style={{
                    borderTopRightRadius: 4,
                    borderBottomLeftRadius: 4,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: STheme.color.danger + "40",
                    position: "absolute",
                    top: -8,
                    right: -7
                }}>
                    <SText font='LondonBetween' fontSize={10}>ANULADO</SText>
                </SView> : null}

                {/* <SText font='LondonBetween' fontSize={12}>{this.formatDateToYYYYMMDD(item.data?.fecha)}</SText> */}
                <SText font='LondonBetween' fontSize={12}>{(item?.solApp?.solSer?.[0]?.fecSol || "").substring(0, 10)}</SText>
                <SText font='LondonBetween' fontSize={16}>{item?.solApp?.solSer?.[0]?.horTur}</SText>
            </SView>
            {/* <SText>{item.key}</SText> */}
        </SView>

    }

    render() {
        return <SPage title={"Mis fichas"}>
            <SHr height={25} />
            <Container loading={!this.state?.historico}>
                <FlatList
                    style={{ width: "100%" }}
                    data={this.state.historico}

                    // keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <SHr />}
                    renderItem={this.historicoItem.bind(this)}
                />
            </Container>
            <SHr height={30} />
        </SPage>
    }
}
