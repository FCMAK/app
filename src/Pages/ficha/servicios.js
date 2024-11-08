import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView, SList, SHr, SDate, SInput, SBuscador, SNotification } from 'servisofts-component';
import STheme from 'servisofts-component/Component/STheme';
import KButtom from '../../Components/Kolping/KButtom';
import SSocket from 'servisofts-socket';
import Container from '../../Components/Container';
import carrito from '../../Services/Kolping/Components/carrito';
import Model from '../../Model';
import NoData from './Components/NoData';
import Kolping from '../../Components/Kolping';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "Pendiente", // Pendiente, Historial
            check: false,
            dataSelect: [],
        };
        this.params = SNavigation.getAllParams();
        // this.tipo_servicio = SNavigation.getParam("servicio");
        this.codesp = SNavigation.getParam("codesp");
        this.codmed = SNavigation.getParam("codmed");
        this.nrosuc = SNavigation.getParam("nrosuc");



    }

    componentDidMount() {
        SSocket.sendPromise({
            component: "servicio_kolping",
            type: "getAll",
            // nrosuc: "0",
            // CodEsp: "999",
            // CodMed: "999",
            nrosuc: this.nrosuc,
            CodEsp: this.codesp,
            CodMed: this.codmed
        }).then(e => {
            (e.data ?? []).sort((a, b) => {
                const isConsultaA = a.NomPro.includes("CONSULTA") || a.NomPro.includes("RE-CONSULTA");
                const isConsultaB = b.NomPro.includes("CONSULTA") || b.NomPro.includes("RE-CONSULTA");
                return isConsultaB - isConsultaA;
            });
            this.setState({ loading: false, data: e.data ?? [] })
        }).catch(e => {
            this.setState({ loading: false })
        })
    }

    getFilter() {
        return <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} height={50} row>
            <SView col={"xs-6"} height card>
                <KButtom outline={this.state.filter != "Pendiente"} onPress={() => { this.setState({ filter: "Pendiente" }) }}>Pendientes</KButtom>
            </SView>
            <SView col={"xs-6"} height card>
                <KButtom outline={this.state.filter != "Historial"} onPress={() => { this.setState({ filter: "Historial" }) }}>Historial</KButtom>
            </SView>
        </SView>
    }
    getEstado(obj) {
        if (obj.fecha_rechazo) {
            return "Rechazado"
        }
        if (obj.fecha_acordada) {
            return "Aprobado"
        }
        return "Pendiente"
    }
    getEstadoText(obj) {
        switch (obj) {
            case "Rechazado":
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.info}>{"Rechazado"}</SText>
            case "Aprobado":
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.primary}>{"Aprobado"}</SText>
            default:
                return <SText font='LondonTwo' fontSize={14} color={STheme.color.gray}>{"Pendiente"}</SText>
        }
    }
    getEstadoColor(obj) {
        switch (obj) {
            case "Rechazado":
                return STheme.color.info;
            case "Aprobado":
                return STheme.color.primary;
            default:
                return STheme.color.card;
        }
    }
    getContent() {

        if (!this.state.data) return <SLoad />
        let data = this.state.data ?? [];
        if (data.length === 0) return <NoData mensaje={"No hay servicios disponibles"} />
        // <SView col={"xs-12"} center >
        //     <SHr height={45} />
        //     <SIcon name={"noData"} width={150} height={174} fill={STheme.color.info} />
        //     <SHr height={25} />
        //     <SView col={"xs-11 sm-6"} center card padding={15}>
        //         <SText fontSize={18} color={STheme.color.text} center font='LondonMM' >No hay servicios disponibles</SText>
        //     </SView>
        // </SView>
        let dataSelect = []
        return <>
            {/* <SHr height={15} /> */}
            <SList
                initSpace={10}
                flex
                // buscador
                // limit={8}
                data={this.state.data}
                // order={[{ key: "prdnom", order: "asc" }]}

                render={(obj, key) => {
                    if (!SBuscador.validate(obj, this.state.find)) {
                        return null;
                    }
                    return <>
                        <SView center col={"xs-12"} row style={{
                            borderLeftWidth: 3,
                            borderLeftColor: STheme.color.info,
                        }}
                        // onPress={() => {
                        //     this.setState({ check: !this.state.check })
                        // }}
                        >
                            <SView col={"xs-9"} style={{
                                alignItems: "flex-start",
                                padding: 15,
                                backgroundColor: STheme.color.card,
                            }} >
                                <SText font={"LondonTwo"} fontSize={15} color={STheme.color.text} >{obj.NomPro}</SText>
                            </SView>
                            <SView col={"xs-3"} row height>
                                <SView col={"xs-8"} center height backgroundColor={STheme.color.primary} padding={5}>
                                    <SText font={"LondonTwo"} fontSize={14} color={STheme.color.white} >Bs. {obj.PreV01}</SText>
                                </SView>
                                <SView col={"xs-4"} center height >
                                    {/* <SHr height={2}/> */}
                                    <SView col={"xs-12"} center height={42} style={{
                                        borderWidth: 2,
                                        borderLeftWidth: 0,
                                        borderColor: STheme.color.primary,
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 8,
                                        backgroundColor: STheme.color.white,
                                        overflow: "hidden"
                                    }}  >
                                        {/* {this.state.check ? <SIcon name={"chek"} height={20} /> : null} */}
                                        <SInput
                                            col={""}
                                            type={"checkBox"}
                                            style={{
                                                width: 42,
                                                height: 42,
                                                borderWidth: 0,
                                            }}
                                            defaultValue={!!this.state.check}
                                            // disabled={!allowEdit || !!this.props.disabled}
                                            onChangeText={(e) => {
                                                console.log(obj)
                                                if (e) {
                                                    dataSelect.push(obj)
                                                    console.log("check")
                                                    this.setState({ dataSelect: dataSelect })
                                                    console.log(dataSelect)

                                                    // carrito.Actions.addToCard({
                                                    //     key: key,
                                                    //     ...obj
                                                    // }, this.props)

                                                } else {
                                                    dataSelect = dataSelect.filter((item) => item.NomPro !== obj.NomPro)
                                                    console.log("NO check")
                                                    this.setState({ dataSelect: dataSelect })
                                                    console.log(dataSelect)
                                                    // carrito.Actions.removeItem(key, this.props);
                                                }
                                            }}
                                        />
                                    </SView>
                                    {/* <SHr height={2}/> */}
                                </SView>
                            </SView>
                        </SView>

                    </>
                }}
            />
        </>
    }

    hanldeSubmit() {
        if (this.state?.dataSelect.length == 0) {
            SPopup.alert("Debe seleccionar al menos un servicio")
            return;
        }

        if (!Model.usuario.Action.getKey()) {
            SNotification.send({
                title: "Porfavor inicia session para realizar la reserva.",
                time: 5000,
                color: STheme.color.warning
            })
            SNavigation.navigate("login");
        }
        if (this.state.loading) return;
        this.state.loading = true;
        SSocket.sendPromise({
            component: "orden_compra",
            type: "registro",
            key_usuario: Model.usuario.Action.getKey(),
            data: {
                ...this.params,
                detalle: this.state.dataSelect
            }
        }).then(e => {
            SNavigation.navigate("/ficha/orden", { key: e.data?.key });
            this.state.loading = false;
        }).catch(e => {
            this.state.loading = false;
        })

    }
    getBtnFooter() {
        if (this.state.dataSelect.length == 0) return null;
        let total = 0;
        let cantidad = 0;
        this.state.dataSelect.map((obj) => {
            total += parseFloat(obj.PreV01);
            cantidad += 1;
        });

        return <SView col={"xs-12"} center backgroundColor={STheme.color.primary}
            style={{
                // height: 70,
            }}>
            <Container>
                <SHr height={10} />
                <SView col={'xs-12'} row center>
                    <SView flex height={47}>
                        <SText
                            color={STheme.color.secondary}
                            font={'LondonMM'}
                            fontSize={16}>{`${cantidad} items`}</SText>
                        <SText
                            color={STheme.color.secondary}
                            font={'LondonMM'}
                            fontSize={22}>{`Bs. ${total.toFixed(2)}`}</SText>
                    </SView>
                    <SView flex height={40} style={{
                        backgroundColor: STheme.color.info,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: '#eeeeee',
                    }} onPress={() => {
                        this.hanldeSubmit()
                    }} center>
                        <SText
                            center
                            color={STheme.color.white}
                            font={'LondonMM'}
                            fontSize={17} bold>
                            SOLICITAR
                        </SText>
                    </SView>
                </SView>
                <SHr height={10} />
            </Container >
            {/* <KButtom secondary onPress={() => {
                if (this.state?.dataSelect.length == 0) {
                    SPopup.alert("Debe seleccionar al menos un servicio")
                    return;
                }
                SNavigation.navigate("ficha/horarios", { dataSelect: this.state.dataSelect, codesp: this.codesp, codmed: this.codmed, nrosuc: this.nrosuc });
            }}>SOLICITAR</KButtom><SHr /> */}
        </SView >
    }


    render() {
        // if (!this.state.data) return <SLoad />
        return (
            <SPage title={'Lista de servicios'}
                footer={this.getBtnFooter()}
            >
                <Container loading={!this.state.data}>
                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    {this.getContent()}
                    <SHr height={25} />
                </Container>
            </SPage>
        );
    }
}
// const initStates = (state) => {
//     return { state }
// };
// export default connect(initStates)(Lista);