import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { SDate, SHr, SInput, SNavigation, SPage, SText, SView, SBuscador, SLoad } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import { Container } from '../../Components';
import MedicoItem from './Components/MedicoItem';
import { getAllMedicos } from './Actions';
import SelectFecha from './Components/SelectFecha';
import Kolping from '../../Components/Kolping';
import NoData from './Components/NoData';

export default class medicos extends Component {
    constructor(props) {
        super(props);

        this.nrosuc = SNavigation.getParam("nrosuc")
        this.state = {
            loading: false,
            fecha: SNavigation.getParam("fecha", new SDate().toString("yyyy-MM-dd"))
        };
    }

    componentDidMount() {
        getAllMedicos({ fecha: this.state.fecha, nrosuc: this.nrosuc }).then(medicos => {
            let filteredMedicos = medicos.filter(item => item.TurMed.length > 0 && item.turnos.length > 0);
            this.setState({ medicos: filteredMedicos })
        })
    }

    handleFilter(arr) {
        const find = this.state.find;
        if (arr && find) {
            const fu = find.toUpperCase()
            return arr.filter(a => {
                if ((JSON.stringify(a).toUpperCase().indexOf(fu) > -1)) {
                    return true;
                }
                return false;
            })
        }
        return arr;
    }
    render() {
        // if (!this.state.medicos) return <SLoad />
        let dataMedicos = this.state.medicos;
        let nroMedicos = 0;
        if (dataMedicos) nroMedicos = dataMedicos.length;
        return <SPage>
            <SelectFecha defaultValue={this.state.fecha} onChange={(e) => {
                this.state.fecha = e;
                this.setState({ medicos: null })
                this.componentDidMount();
            }} />
            <SHr height={10} />
            
            {(nroMedicos === 0) ? <NoData mensaje={"No hay médicos disponibles en la fecha indicada. Por favor, selecciona otra fecha o vuelve a intentarlo más tarde."} />
                :
                <Container loading={!this.state.medicos}>
                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    <FlatList
                        style={{ width: "100%" }}
                        data={this.handleFilter((this.state.medicos ?? []))}
                        ItemSeparatorComponent={() => <SHr />}
                        renderItem={({ item }) => <MedicoItem medico={item} onPress={() => {
                            SNavigation.navigate("/ficha/horarios", { nrosuc: this.nrosuc, codmed: item.CodMed, fecha: this.state.fecha })
                        }} />}
                    />
                </Container>
            }
            <SHr height={25} />
        </SPage>
    }
}
