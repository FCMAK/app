import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SDate, SHr, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView } from 'servisofts-component';
import NavBar from '../../NavBar';
import SSocket from "servisofts-socket"
// import { getAllHistorico } from './../../Actions';
import { getAllHistorico } from './../../../Pages/ficha/Actions';
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
        var historico = await getAllHistorico(Model.usuario.Action.getKey())
        this.setState({ historico: Object.values(historico) })
    }

    renderItem({ index, item }) {
        console.log(item);
        console.log(item?.data?.fecha)
        let fechac = item?.data?.fecha
        // console.log(fechac.getDate())
        let partes = fechac.split("-");
        let date = new Date(Date.UTC(partes[0], partes[1] - 1, partes[2])); // Restar 1 al mes


        let mesesAbreviados = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        return <SView width={265} height={85} onPress={() => {

        }}>
            <SView col={"xs-12"} padding={8} row style={{
                backgroundColor: "#279AA2",
                borderRadius: 16
            }}>
                <SView col={"xs-3"} height padding={10} style={{
                    borderRadius: 10,
                    backgroundColor: STheme.color.info
                }} center>
                    {/* <SText fontSize={20} font='LondonTwo' color={STheme.color.white}>{new SDate(item?.data?.fecha).toString("dd")}</SText> */}
                    <SText fontSize={20} font='LondonTwo' color={STheme.color.white}>{date.getUTCDate()}</SText>
                    <SText fontSize={15} font='LondonTwo' color={STheme.color.white}>{mesesAbreviados[new Date(item?.data?.fecha).getMonth()]}</SText>

                </SView>
                <SView col={"xs-0.5"} />
                <SView col={"xs-8.5"}>
                    <SText fontSize={13} font='LondonMM' color={STheme.color.white}>{diasDeLaSemana[new Date(item?.data?.fecha).getDay()]}, {item?.data?.hortur}</SText>
                    <SText fontSize={13} font='LondonTwo' color={STheme.color.white}>{item?.data?.nommed}</SText>
                    <SText fontSize={13} font='LondonMM' color={STheme.color.white}>{item?.data?.nomesp}</SText>


                </SView>
            </SView>

            {/* <SView width={220} height padding={5} style={{
                borderRadius: 15,
                backgroundColor: STheme.color.card
            }} row center>
                <SView width={214} height style={{ borderRadius: 16, overflow: "hidden" }} center>
                    <SImage src={SSocket.api.root + "novedades/" + item.key} style={{
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        maxWidth: "100%", minWidth: "100%", overflow: "hidden",
                        resizeMode: "cover",
                        height: 165
                    }} />
                </SView>
                <SView center col={'xs-12'} height={25} style={{
                    backgroundColor: STheme.color.primary + "90",
                    position: "absolute",
                    top: 65,
                    overflow: "hidden"
                }}>
                    <SText fontSize={18} font='LondonTwo' color={STheme.color.white}>{item?.titulo}</SText>
                </SView>
            </SView> */}
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
            data={data}
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