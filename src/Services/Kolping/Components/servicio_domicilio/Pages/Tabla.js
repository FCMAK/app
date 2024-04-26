import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import FloatButtom from '../../../../../Components/Kolping/FloatButtom';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../index'
import SSocket from 'servisofts-socket';
import usuario from '../../../../Usuario/Components/usuario';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.tipo_servicio = SNavigation.getParam("servicio");

    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        var usuarios = usuario.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        if (!usuarios) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                { key: "numero", label: "numero", width: 80, center: true, order: "desc" },
                { key: "tipo", label: "tipo", width: 120, center: true },
                { key: "fecha_acordada", label: "Estado", width: 120, render: (item) => { return item ? "Atendido" : "Pendiente" } },
                {
                    key: "key_usuario", label: "Paciente", width: 200, render: (item) => {
                        return `${usuarios[item]?.Nombres ?? "-"} ${usuarios[item]?.Apellidos ?? "-"}`
                    }
                },
                // { key: "direccion", label: "direccion", width: 200 },
                // { key: "latitude", label: "latitude", width: 100 },
                // { key: "longitude", label: "longitude", width: 100 },
                { key: "key-editar", label: "Editar", width: 50, center: true, component: (item) => { return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: item }) }}><SIcon name={"Edit"} width={35} /></SView> } },
                { key: "key-eliminar", label: "Eliminar", width: 70, center: true, component: (key) => { return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.key_servicio, this.props) } }) }}><SIcon name={'Delete'} /></SView> } },
                { key: "key-ver", label: "Ver", width: 70, center: true, component: (key) => { return <SView width={35} height={35} onPress={() => { SNavigation.navigate(Parent.component + "/perfil", { key: key }) }}><SIcon name={'Salir'} /></SView> } },

            ]}
            filter={(data) => {
                if (data.estado != 1) return false;
                if (this.tipo_servicio) {
                    if (data.tipo != this.tipo_servicio) return false;
                }
                return true;
            }}
            data={data}
        />
    }


    render() {
        return (
            <SPage title={'Lista de ' + Parent.component} disableScroll center>
                {this.getContent()}

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);