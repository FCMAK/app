import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { SDate, SHr, SInput, SNavigation, SPage, SText, SView, SBuscador } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import { Container } from '../../Components';
import MedicoItem from './Components/MedicoItem';
import { getAllMedicos } from './Actions';
import SelectFecha from './Components/SelectFecha';
import Kolping from '../../Components/Kolping';

export default class medicos extends Component {
    constructor(props) {
        super(props);

        this.nrosuc = SNavigation.getParam("nrosuc")
        this.state = {
            fecha: SNavigation.getParam("fecha", new SDate().toString("yyyy-MM-dd"))
        };
    }

    componentDidMount() {
        getAllMedicos({ fecha: this.state.fecha, nrosuc: this.nrosuc }).then(medicos => {
            this.setState({ medicos: medicos })
        })
    }
    render() {
        return <SPage>
            <SelectFecha defaultValue={this.state.fecha} onChange={(e) => {
                this.state.fecha = e;
                this.setState({ medicos: null })
                this.componentDidMount();
            }} />
            <SHr height={10} />
            <Container loading={!this.state.medicos}>
                <Kolping.KBuscador onChangeText={(text) => {
                    this.setState({
                        find: text
                    })
                }} />
                <FlatList
                    style={{ width: "100%" }}
                    data={this.state.medicos ?? []}
                    
                    ItemSeparatorComponent={() => <SHr />}
                    renderItem={({ item }) => <MedicoItem medico={item} onPress={() => {
                        SNavigation.navigate("/ficha/horarios", { nrosuc: this.nrosuc, codmed: item.CodMed, fecha: this.state.fecha })
                    }} />}
                />
            </Container>
        </SPage>
    }
}