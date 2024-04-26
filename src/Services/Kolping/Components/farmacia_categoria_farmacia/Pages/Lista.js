import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import FloatButtom from '../../../../../Components/Kolping/FloatButtom';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../index'
import SSocket from 'servisofts-socket';
import categoria_farmacia from '../../categoria_farmacia';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_farmacia = SNavigation.getParam('key_farmacia');
        this.key_categoria_farmacia = SNavigation.getParam('key_categoria_farmacia');

    }

    getContent() {
        var data = Parent.Actions.getAll({
            key_farmacia: this.key_farmacia,
        }, this.props);
        var categorias = categoria_farmacia.Actions.getAll(this.props);
        if (!categorias) return <SLoad />;
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                // {
                //     key: "key-foto", label: "foto", width: 100,
                //     render: (item) => {
                //         // SSocket.api.root+'medico/key'
                //         return SSocket.api.root + Parent.component + "/" + item
                //     },
                //     component: (url) => {
                //         return <SImage src={url + "?time=" + new Date().getTime()} width={"100%"} height={"100%"} />
                //     }
                // },
                // { key: "key_farmacia", label: "key_farmacia", width: 250 },
                { key: "key_categoria_farmacia", label: "Categoria", width: 250, render: (item) => { return categorias[item]?.descripcion } },
                // { key: "precio", label: "Precio", width: 150, center:true,render: (item) => { return `Bs. ${parseFloat(item).toFixed(2)}` } },
                // { key: "key-editar", label: "Editar", width: 50, center: true, component: (item) => { return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key_farmacia: item, }) }}> <SIcon name={"Edit"} width={35} /></SView> } },
                { key: "key-eliminar", label: "Eliminar", width: 70, center: true, component: (key) => { return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.props) } }) }}><SIcon name={'Delete'} /></SView> } },

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
                    if (this.key_farmacia) {
                        SNavigation.navigate("categoria_farmacia/select", {
                            onSelect: (item) => {
                                Parent.Actions.registro({
                                    key_farmacia: this.key_farmacia,
                                    key_categoria_farmacia: item.key,
                                }, this.props);
                            }
                        })
                    } else {
                        SNavigation.navigate(Parent.component + "/registro", { key_farmacia: this.key_farmacia, key_categoria_farmacia: this.key_categoria_farmacia })
                    }
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