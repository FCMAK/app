import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import FloatButtom from '../../../../../Components/Kolping/FloatButtom';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../index'

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onSelect = SNavigation.getParam('onSelect');
    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                { key: "smtur_desp", label: "Descripcion", width: 150 },
                { key: "smtur_cesp", label: "smtur_cesp", width: 50 },
                // { key: "smmed_cesp", label: "smmed_cesp", width: 150 },
                // { key: "descripcion", label: "Descripcion", width: 150 },
                // { key: "direccion", label: "direccion", width: 150 },
                // { key: "horario", label: "horario", width: 150 },

                {
                    key: "smtur_cesp-editar", label: "Seleccionar", width: 50, center: true, component: (item) => {
                        return <SView onPress={() => {
                            if (this.onSelect) {
                                this.onSelect(data[item]);
                            }
                            SNavigation.goBack();
                        }}> <SIcon name={"Salir"} width={35} /></SView>
                    }
                },


                // { key: "key-eliminar", label: "Eliminar", width: 70, center: true, component: (key) => { return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.key_servicio, this.props) } }) }}> <SIcon name={'Delete'} /> </SView> } },


            ]}
            // filter={(data) => {
            //     if (data.estado != 1) return false;
            //     return true;
            // }}
            data={data}
        />
    }

    render() {
        return (
            <SPage title={'Select de ' + Parent.component} disableScroll center>
                {this.getContent()}


                <FloatButtom onPress={() => {
                    SNavigation.navigate(Parent.component + "/registro")
                }} />


                {/* <Kolping.KButtom onPress={() => {
                    SNavigation.navigate(Parent.component + "/registro", { key: null })
                }}>Registrar nuevo</Kolping.KButtom> */}


            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Select);