import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import FloatButtom from '../../../../../Components/Kolping/FloatButtom';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../index'
import SSocket from 'servisofts-socket';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_servicio = SNavigation.getParam('key_servicio');

    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                {
                    key: "key-foto", label: "foto", width: 100,
                    render: (item) => {
                        // SSocket.api.root+'medico/key'
                        return SSocket.api.root + Parent.component + "/" + item
                    },
                    component: (url) => {
                        return <SImage enablePreview src={url + "?time=" + new Date().getTime()} width={"100%"} height={"100%"} />
                    }
                },
                { key: "descripcion", label: "Descripcion", fontSize: 12, font: "LondonMM", width: 250 },
                { key: "precio", label: "Precio", width: 150, center: true, fontSize: 14, font: "LondonMM", render: (item) => { return `Bs. ${parseFloat(item).toFixed(2)}` } },
                {
                    key: "key-editar", label: "Editar", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: item }) }}>
                            <SIcon name={"Edit"} width={35} />
                        </SView>
                    }
                },
                {
                    key: "key-eliminar", label: "Eliminar", width: 70, center: true,
                    component: (key) => {
                        return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.key_servicio, this.props) } }) }}>
                            <SIcon name={'Delete'} />
                        </SView>
                    }
                },
                {
                    key: "key-cat", label: "Categorias", width: 70, center: true,
                    component: (key) => {
                        return <SView width={35} height={35} onPress={() => { SNavigation.navigate("admin/farmacia_categoria_farmacia", { key_farmacia: key }) }}><SIcon name={'Ajustes'} /></SView>
                    }
                },

            ]}
            filter={(data) => {
                if (data.estado != 1) return false;
                return true;
            }}
            data={data}
        />
    }


    render() {
        return (
            <SPage title={'Lista de ' + Parent.component} disableScroll center>
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
export default connect(initStates)(Lista);