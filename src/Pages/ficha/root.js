import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SLoad, SImage, SBuscador } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import sucursal from '../../Services/Kolping/Components/sucursal';



class ListaCentros extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getSucursales() {
        var sucursales = sucursal.Actions.getAll(this.props);
        if (!sucursales) return <SLoad />
        return Object.keys(sucursales).map((key) => {
            if (!SBuscador.validate(sucursales[key], this.state.find)) {
                return null;
            }
            return <>
                <sucursal.Item obj={sucursales[key]} onPress={() => {
                    SNavigation.navigate("/ficha/opciones", { nrosuc: key })
                    // SNavigation.navigate("/ficha/medicos", { nrosuc: key })
                }} />
                <SHr height={16} />
            </>
        })
    }

    render() {
        return (
            <SPage title={'Selecciona un Centro Médico'} >
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row> 

                        <Kolping.KBuscador onChangeText={(text) => {
                            this.setState({
                                find: text
                            })
                        }} />
                        <SHr height={10} />
                        <SView col={"xs-12"} >
                            <SText font={"LondonBetween"} fontSize={20}>Elija el centro médico de su preferencia:</SText>
                        </SView>
                        <SView col={"xs-12"} center >
                            <SHr height={20} />
                            {this.getSucursales()}
                            <SHr height={35} />
                        </SView>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ListaCentros);