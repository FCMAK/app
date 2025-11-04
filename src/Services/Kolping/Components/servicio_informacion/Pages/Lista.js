import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import FloatButtom from '../../../../../Components/Kolping/FloatButtom';
import Model from '../../../../../Model';
import Parent from '../index'

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getContent() {
        var data_informacion = Parent.Actions.getAll(this.props);
        if (!data_informacion) return <SView col={"xs-12"} flex center> <SLoad /></SView>;
        return <STable2
            header={[
                { key: "index", label: "#", width: 20, center: true },
                // { key: "key", label: "key", width: 70 },
                // { key: "key_usuario", label: "key_usuario", width: 150 },
                // { key: "fecha_on", label: "fecha_on", width: 180 },
                // { key: "estado", label: "estado", width: 40 },
                { key: "titulo", label: "titulo", width: 150 },
                { key: "descripcion", label: "Descripcion", width: 450 },
                { key: "horarios", label: "horarios", width: 200 },
                { key: "telefono", label: "telefono", width: 120 },
                // { key: "observacion", label: "observacion", width: 90 },
                {
                    key: "key-editar", label: "Editar", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate("servicio_informacion/registro", { key: item }) }} >
                            <SIcon name={"Edit"} width={35} />
                        </SView>
                    }
                },
                // {
                //     key: "key-eliminar", label: "Eliminar", width: 70, center: true,
                //     component: (key) => {
                //         return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data_informacion[key], this.props) } }) }}>
                //             <SIcon name={'Delete'} />
                //         </SView>
                //     }
                // },
                {
                    key: "key-editar", label: "Promos", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate("/servicio_informacion_promo", { key: item }) }} >
                            <SView width={35} height={35} center style={{ backgroundColor: STheme.color.warning, borderRadius: 8 }}>
                                <SIcon name={"promos2"} width={28} fill={STheme.color.white} />
                            </SView>
                        </SView>
                    }
                },
            ]}
            filter={(data_informacion) => {
                if (data_informacion.estado != 1) return false;
                return true;
            }}
            data={data_informacion}
        />
    }

    render() {
        return (
            <SPage title={'Lista de Servicio e información'} disableScroll center>
                {this.getContent()}
                <FloatButtom onPress={() => {
                    SNavigation.navigate("servicio_informacion/registro")
                }} />

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);