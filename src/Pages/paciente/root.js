import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SForm, SHr, SImage, SLoad, SNavigation, SPage, SText, STheme, SThread, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import { Container } from '../../Components';
import Model from '../../Model';
import FloatButtomCart from '../../Components/Kolping/FloatButtomCart';

export default class root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
            // data: [
            //     { test: "asdas" }
            // ]
        };
        this.onSelect = SNavigation.getParam("onSelect");
    }

    componentDidMount() {
        SSocket.sendPromise({
            component: "paciente_usuario",
            type: "getAll",
            key_usuario: Model.usuario.Action.getKey()
            // ci: "6392496"
        }).then(e => {
            this.setState({ data: Object.values(e.data) })
            console.log(e);
            // this.setState({ data: e.data });
        }).catch(e => {
            console.log(e);
        })
    }
    renderItem({ index, item }) {
        return <SView col={"xs-12"} padding={16} border style={{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: STheme.color.card,
            marginBottom: 8
        }} row card onPress={() => {
            if (this.onSelect) {
                this.onSelect(item)
                SNavigation.goBack();
            }
        }}>
            <SView width={60} height={60} >
                <SImage src={require("../../Assets/img/noimage.jpg")} style={{ borderRadius: 50, borderWidth: 1, borderColor: STheme.color.primary }} />
            </SView>
            <SView width={8} />
            <SView flex>
                <SText fontSize={18} font='LondonBetween' color={STheme.color.black}>{item.alias}</SText>
                <SHr />
                <SView row flex>
                    <SText font='LondonBetween' color={STheme.color.info}>Nro doc: </SText>
                    <SText font='LondonBetween' color={STheme.color.darkGray}>{item.ci}</SText>
                    <SText font='LondonBetween' color={STheme.color.info}>{"    "}</SText>
                    {/* <SView width={8} /> */}
                    {/* <SText font='LondonBetween' color={STheme.color.gray}>{"59175395848"}</SText> */}
                    <SText font='LondonBetween' color={STheme.color.info}>Código: </SText>
                    <SText font='LondonBetween' color={STheme.color.primary}>{item.codper}</SText>
                </SView>
                {/* <SText font='LondonBetween' color={STheme.color.gray}>{item.codper}</SText> */}
                <SHr />
                {/* <SText font='LondonBetween' color={STheme.color.danger} onPress={() => {
                    SSocket.sendPromise({
                        component: "paciente_usuario",
                        type: "editar",
                        data: {
                            ...item,
                            estado: 0,
                        }
                    }).then(e => {
                        console.error(e);
                    }).catch(e => {
                        console.log(e);
                    })
                }}>{"BORRAR"}</SText> */}

                {/* <SText font='LondonBetween' color={STheme.color.gray}>{"nombre@gmail.com"}</SText> */}
            </SView>
        </SView>
    }
    render() {
        if (!this.state.data) return <SLoad />
        // let data = Object.values(this.state.data)
        return <SPage title={"Mis favoritos"}>
            <Container>
                <SView col={"xs-12"}>
                    <SHr height={15} />
                    <SView flex style={{ alignItems: "flex-end" }} onPress={() => SNavigation.navigate("/paciente/buscar", { nav: 2 })} >
                        <SText width={80} center height={40} backgroundColor={STheme.color.primary} color={STheme.color.white}
                            style={{
                                borderRadius: 8,
                            }}>{"+ Agregar"}</SText>

                    </SView>
                    <SHr height={35} />
                    <FlatList
                        data={this.state.data}
                        ItemSeparatorComponent={() => <SHr />}
                        renderItem={this.renderItem.bind(this)}
                    />
                </SView>
                {/* <FloatButtomCart/> */}
            </Container>
        </SPage>
    }
}
