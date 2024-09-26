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
            // data: [
            //     { test: "asdas" }
            // ]
        };
    }

    componentDidMount() {
        SSocket.sendPromise({
            component: "paciente_usuario",
            type: "getAll",
            key_usuario: Model.usuario.Action.getKey()
            // ci: "6392496"
        }).then(e => {
            console.log(e);
            this.setState({ data: e.data });
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
        }} row card>
            <SView width={50} height={50}>
                <SImage src={require("../../Assets/img/noimage.jpg")} />
            </SView>
            <SView width={8} />
            <SView flex>
                <SText fontSize={18} font='LondonBetween'>{item?.alias}</SText>
                {/* <SHr /> */}
                <SView row flex>
                    <SText font='LondonBetween' color={STheme.color.success}>COD: {item?.codper}</SText>
                    {/* <SView width={8} /> */}
                    {/* <SText font='LondonBetween' color={STheme.color.success}>COD: {item?.codper}</SText> */}
                </SView>
                <SText font='LondonBetween' color={STheme.color.gray}>{item?.ci}</SText>

                {/* <SText font='LondonBetween' color={STheme.color.gray}>{"nombre@gmail.com"}</SText> */}
            </SView>
        </SView>
    }
    render() {
        if (!this.state.data) return <SLoad />
        let data = Object.values(this.state.data)
        return <SPage title={"Mis favoritos"}>
            <Container>
                <SView col={"xs-12"}>
                    <SHr />
                    <SText onPress={() => SNavigation.navigate("/paciente/buscar")}>{"Agregar"}</SText>
                    <SHr />
                    <FlatList
                        data={data}
                        renderItem={this.renderItem.bind(this)}
                    />
                </SView>
                {/* <FloatButtomCart/> */}
            </Container>
        </SPage>
    }
}
