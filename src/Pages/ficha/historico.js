import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { SDate, SHr, SInput, SNavigation, SPage, SText, SView, SBuscador } from 'servisofts-component';
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
        var historico = await getAllHistorico(Model.usuario.Action.getKey())
        this.setState({ historico: Object.values(historico) })
    }

    historicoItem({ item, index }) {
        return <SView col={"xs-12"} card padding={8}>
            <SText>{item.key}</SText>
        </SView>

    }

    render() {
        return <SPage>
            <Container loading={!this.state?.historico}>
                <FlatList
                    style={{ width:"100%" }}
                    data={this.state.historico}
                    ItemSeparatorComponent={() => <SHr />}
                    renderItem={this.historicoItem.bind(this)}
                />
            </Container>
        </SPage>
    }
}
