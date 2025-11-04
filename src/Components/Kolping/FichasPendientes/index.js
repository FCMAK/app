import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SDate, SHr, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView } from 'servisofts-component';
import NavBar from '../../NavBar';
import SSocket from "servisofts-socket"
// import { getAllHistorico } from './../../Actions';
import { getActivas, getAllHistorico, getActivasKolping } from './../../../Pages/ficha/Actions';
import Model from '../../../Model';
import { FlatList } from 'react-native';

class FichasPendientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.getHistorico();
    }

    getHistorico = async () => {
        try {
            // var historico = await getActivas(Model.usuario.Action.getKey())
            var historico = await getActivasKolping(Model.usuario.Action.getKey())
            this.setState({ historico: Object.values(historico) })
        } catch (error) {

        }

    }

    renderItem_({ index, item }) {

        let fechac = item?.data?.fecha
        const sdate = new SDate(fechac, "yyyy-MM-ddThh:mm:ss");
        let estado = "";
        let colorTexto = STheme.color.warning;

        switch (item.estado_pago) {
            case "pagado":
                estado = "PAGADO";
                colorTexto = STheme.color.success;
                break;
            case "esperando_pago":
                estado = "PENDIENTE PAGO";
                colorTexto = STheme.color.warning;
                break;
            case "esperando_confirmacion":
                estado = "ESPERANDO CONFIRMACIÓN";
                colorTexto = STheme.color.warning;
                break;
            case "pendiente":
                estado = "PENDIENTE";
                colorTexto = STheme.color.warning;
                break;
            default:
                estado = "--";
                colorTexto = STheme.color.danger;
        }
        console.log(item)
        return <SView width={275} style={{
            height: 110
        }} onPress={() => {
            if (item.estado_pago == "pagado") {
                SNavigation.navigate("/ficha/pago", { key: item?.key })
            } else {
                SNavigation.navigate("/ficha/qr", { key: item?.key })
            }

        }}>
            <SView col={"xs-12"} padding={8} height row style={{
                backgroundColor: "#279AA2",
                borderRadius: 16
            }}>
                <SView col={"xs-3"} height padding={10} style={{
                    borderRadius: 8,
                    backgroundColor: STheme.color.info
                }} center>
                    {/* <SText fontSize={20} font='LondonTwo' color={STheme.color.white}>{new SDate(item?.data?.fecha).toString("dd")}</SText> */}
                    <SText fontSize={20} font='LondonTwo' color={STheme.color.white}>{item?.data?.codtur} {item?.data?.comtur}</SText>
                    <SText fontSize={12} font='LondonTwo' color={STheme.color.white}>{sdate.toString("dd MON")}</SText>
                </SView>
                <SView col={"xs-0.5"} />
                <SView col={"xs-8.5"}>
                    <SText fontSize={13} font='LondonMM' color={STheme.color.white}>{sdate.toString("DAY")} {item?.data?.hortur}</SText>
                    <SText fontSize={13} font='LondonTwo' color={STheme.color.white}>{item?.data?.nommed}</SText>
                    <SView flex />
                    <SText fontSize={13} font='LondonMM' color={STheme.color.white}>{item?.data?.nomesp}</SText>
                    <SText font='LondonTwo' center fontSize={10} color={STheme.color.white} style={{
                        backgroundColor: colorTexto,
                        borderRadius: 3,
                        padding: 1.5
                    }}>{estado}</SText>
                </SView>
            </SView>
        </SView>
    }


    renderItem({ index, item }) {

        let fechac = item?.solApp?.solSer?.[0]?.fecSol
        const sdate = new SDate(fechac, "yyyy-MM-ddThh:mm:ss");
        let estado = "";
        let colorTexto = STheme.color.warning;
        console.log("aquiii", item)
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
        return <SView width={275} style={{
            height: 110
        }} onPress={() => {
            if (item.codEst == "PAG") {
                SNavigation.navigate("/ficha/pago_kolping", { key: item?.nroOrd })
            } else {
                SNavigation.navigate("/ficha/qr_kolping", { key: item?.nroOrd })
            }

        }}>
            <SView col={"xs-12"} padding={8} height row style={{
                backgroundColor: "#279AA2",
                borderRadius: 16
            }}>
                <SView col={"xs-3"} height padding={10} style={{
                    borderRadius: 8,
                    backgroundColor: STheme.color.info
                }} center>
                    {/* <SText fontSize={20} font='LondonTwo' color={STheme.color.white}>{new SDate(item?.data?.fecha).toString("dd")}</SText> */}
                    <SText fontSize={20} font='LondonTwo' color={STheme.color.white}>{item?.solApp?.solSer?.[0]?.codTur}</SText>
                    <SText fontSize={12} font='LondonTwo' color={STheme.color.white}>{sdate.toString("dd MON")}</SText>
                </SView>
                <SView col={"xs-0.5"} />
                <SView col={"xs-8.5"}>
                    <SText fontSize={13} font='LondonMM' color={STheme.color.white}>{sdate.toString("DAY")} {item?.solApp?.solSer?.[0]?.horTur}</SText>
                    <SText fontSize={13} font='LondonTwo' color={STheme.color.white}>{item?.solApp?.solSer?.[0]?.nomMed}</SText>
                    <SView flex />
                    <SText fontSize={13} font='LondonMM' color={STheme.color.white}>{item?.solApp?.solSer?.[0]?.nomEsp}</SText>
                    <SText font='LondonTwo' center fontSize={10} color={STheme.color.white} style={{
                        backgroundColor: colorTexto,
                        borderRadius: 3,
                        padding: 1.5
                    }}>{estado}</SText>
                </SView>
            </SView>
        </SView>
    }

    render() {
        // var usuario = this.props.state.usuarioReducer.usuarioLog ?? {
        //     Nombres: "SIN USUARIO"
        // }

        var usuario = this.props.state.usuarioReducer.usuarioLog;
        var data = this.state.historico ?? [];

        // if (!usuario) {
        //     // SNavigation.navigate("login");
        //     return <SView />
        // }

        console.log("usuario", usuario);

        return (<FlatList
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
            data={data.sort((a, b) => a.fecha_on > b.fecha_on ? 1 : -1)}
            keyExtractor={item => item.key}
            renderItem={this.renderItem.bind(this)}
        />

        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(FichasPendientes);