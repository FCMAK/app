import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SHr, SPage, SText } from 'servisofts-component';
import Kolping from '../Components/Kolping';
import SSocket from 'servisofts-socket';
import Container from '../Components/Container';

export default class test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handlePress = () => {
        this.setState({ loading: true })
        SSocket.sendPromise({
            component: "servicio_kolping",
            type: "getAll",
            nrosuc: "0",
            CodEsp: "999",
            CodMed: "999"
        }).then(e => {
            this.setState({ loading: false, data: e.data })
        }).catch(e => {
            this.setState({ loading: false })
        })
    }
    render() {
        return <SPage >
            <Container>
                <SHr />
                <Kolping.KButtom primary loading={this.state.loading} onPress={this.handlePress}>primary</Kolping.KButtom>
                <SHr />
                <SText>{JSON.stringify(this.state.data, "\n", "\t")}</SText>
            </Container>
        </SPage>
    }
}
