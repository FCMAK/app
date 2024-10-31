import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { SDate, SHr, SInput, SNavigation, SPage, SText, SView, SBuscador, SImage, STheme } from 'servisofts-component';
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
        var historico = await getAllHistorico(Model.usuario.Action.getKey())
        if (Object.keys(historico).length === 0) {
            SNavigation.navigate("/ficha/mensajeSinFicha")
        } else {
            let dataHistorico = Object.values(historico)
            let dataH = dataHistorico.sort((a, b) => {
                const dateA = new Date(`${a.data.fecha}T${a.data?.hortur?.split(' - ')[0]}`);
                const dateB = new Date(`${b.data.fecha}T${b.data?.hortur?.split(' - ')[0]}`);
                return dateA - dateB;
            });
            this.setState({ historico: dataH })
        }
    }

    historicoItem({ item, index }) {
        console.log("item", item)
        return <SView col={"xs-12"} card padding={8} row>
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
                    <SText font='LondonTwo' fontSize={12}>{item.data?.nommed}</SText>
                    <SText font='LondonBetween' color={STheme.color.info}>{item.data?.nomesp}</SText>

                </SView>
            </SView>
            <SView col={"xs-2"} center style={{
                padding: 5,
                borderLeftWidth: 1,
                borderColor: STheme.color.lightGray
            }}>
                <SText font='LondonTwo' fontSize={10}>FICHA</SText>
                <SText font='LondonTwo' fontSize={20}>{item.data?.codtur}{item.data?.comtur}</SText>
            </SView>
            <SView col={"xs-3"} center style={{
                padding: 5,
                borderLeftWidth: 1,
                borderColor: STheme.color.lightGray
            }}>
                <SText font='LondonBetween' fontSize={12}>{item.data?.fecha}</SText>
                <SText font='LondonBetween' fontSize={16}>{item.data?.hortur}</SText>
            </SView>
            {/* <SText>{item.key}</SText> */}
        </SView>

    }

    render() {
        return <SPage>
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
        </SPage>
    }
}
