import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SForm, SInput, SBuscador } from 'servisofts-component';
import Parent from '../index'
import SSocket from 'servisofts-socket'
import categoria_farmacia from '../../categoria_farmacia';
import Item from '../Component/Item';
import Kolping from '../../../../../Components/Kolping';
import farmacia_categoria_farmacia from '../../farmacia_categoria_farmacia';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getProductoByCategoria(key_categoria) {
        var data = Parent.Actions.getAll(this.props);
        var f_c_f = farmacia_categoria_farmacia.Actions.getAll({
            key_categoria_farmacia: key_categoria
        }, this.props);
        if (!data) return null;
        if (!f_c_f) return null;
        return Object.keys(f_c_f).map((key, index) => {
            var obj = f_c_f[key];
            var producto = data[obj.key_farmacia];
            // if(!f_c_f[key]){ return null; }
            if (!producto) { return null; }
            if (!SBuscador.validate(producto, this.state.find)) {
                return null;
            }
            return <>
                {/* <SView width={18} /> */}
                <Item key={key} obj={producto} />
                <SView width={18} />
            </>
        })

    }
    getProductosCategorias() {
        var data = Parent.Actions.getAll(this.props);
        var f_c_f = farmacia_categoria_farmacia.Actions.getAll({}, this.props);
        var categorias = categoria_farmacia.Actions.getAll(this.props);
        if (!categorias) return <SLoad />;
        if (!f_c_f) return <SLoad />;
        if (!data) return <SLoad />;

        return Object.keys(categorias).map((key, index) => {
            var obj = categorias[key];
            if (this.state.categoria) {
                if (this.state.categoria.key != key) return null;
            }
            var productos_de_categoria = farmacia_categoria_farmacia.Actions.getAll({
                key_categoria_farmacia: key
            }, this.props);
            if (!productos_de_categoria) return null;
            if (Object.keys(productos_de_categoria).length <= 0) return null;
            var ELM = this.getProductoByCategoria(key);
            if (!ELM) return null;
            if (ELM.filter(e => e).length <= 0) return null;
            return <>
                <SView col={"xs-12"} row>
                    <SView width={18} />
                    <SView flex height  >
                        <SText fontSize={18} font={"LondonMM"} bold>{obj.descripcion}</SText>
                    </SView>

                    <SView col={"xs-2.5 md-1 lg-1 xl-0.7"} height row style={{ alignItems: 'center', }} onPress={() => { this.setState({ categoria: obj }) }} >


                        <SView col={"xs-10 "}  >
                            <SText fontSize={12} font={"LondonMM"} style={{ fontWeight: "bold", }}>Ver todos</SText>
                        </SView>

                        <SView col={"xs-2"} height center >

                            <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
                        </SView>

                    </SView>
                    <SView width={18} />
                </SView>

                <SHr height={10} />
                <SView col={"xs-12 "} height={205}   >
                    <SScrollView2 >
                        <SView row >
                            <SView width={18} />
                            {ELM}
                        </SView>
                    </SScrollView2>
                </SView>

                <SHr height={24} />
            </>
        })
    }
    getBotonFlotante() {
        var carritoItems = this.props.state.carritoReducer.data;
        var total = 0;
        var cantidad = 0;
        Object.keys(carritoItems).map((key, index) => {
            total += carritoItems[key].precio * carritoItems[key].cantidad;
            cantidad += 1;
        })
        return <>
            <SView center row style={{
                width: 117,
                height: 54,
                position: "absolute",
                bottom: 60, right: 0,
            }}
                onPress={() => {
                    this.props.navigation.navigate('farmacia/carrito');
                }}
            >
                <SIcon name={'IconCarritoFlotante'}
                    style={{
                        width: '100%', height: '100%',
                        position: "absolute",
                    }}
                />
                <SView col={"xs-4"} center height style={{ alignItems: 'flex-end', }}>
                    <SIcon name={'IconCartTrue'} height={29} width={29} fill='white' />
                </SView>
                <SView col={"xs-8"} center height style={{ alignItems: 'flex-start', paddingLeft: 8 }} >
                    <SText fontSize={12} color={'white'} font={"LondonMM"}   >{`Bs. ${total.toFixed(2)}`}</SText>




                    <SText fontSize={12} color={'#ffffffbb'} font={"LondonMM"} bold >{cantidad} items</SText>
                </SView>
            </SView>
        </>
    }
    render() {
        return (
            <>
                <SPage title={'Catálogo'} backgroundColor>
                    <SHr height={8} />
                    <SView col={"xs-12"}>
                        <SView col={"xs-12"} center>
                            <SView col={"xs-12"} center >
                                <Kolping.KButtom secondary height={50} center onPress={() => {
                                    SNavigation.navigate('cotizacion_farmacia/registro');
                                }}>COTIZA TU RECETA</Kolping.KButtom>
                            </SView>
                            <SHr />
                            <SView col={"xs-11 sm-10"}>
                                <Kolping.KBuscador placeholder={"100.000 medicamentos y prod.."} fill={STheme.color.info} onChangeText={(text) => {
                                    this.setState({
                                        find: text
                                    })
                                }} />
                            </SView>
                            <SView col={"xs-11 sm-10 md-10 lg-10 xl-10"} center>
                                <categoria_farmacia.Filtro
                                    value={this.state.categoria}
                                    onChange={(items) => {
                                        if (this.state.categoria?.key == items?.key) {
                                            this.setState({
                                                categoria: null
                                            })
                                        } else {
                                            this.setState({
                                                categoria: items
                                            })
                                        }

                                    }} />
                                <SView height={8} />
                            </SView>
                            <SView col={"xs-12 sm-10 md-10 lg-10 xl-10"} center>
                                {this.getProductosCategorias()}
                            </SView>
                        </SView>
                    </SView>
                </SPage >
                {this.getBotonFlotante()}
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Catalogo);