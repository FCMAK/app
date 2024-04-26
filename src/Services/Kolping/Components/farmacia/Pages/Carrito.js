import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SForm, SInput } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import MensajeCarritoVacio from './MensajeCarritoVacio';
import SSocket from 'servisofts-socket';


class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dato: "hola"
        };
    }




    getDetalle(obj) {
        return <>
            <SView col={"xs-12 "} center >
                <SView height={10} />
                <SView col={"xs-11 md-8 lg-8 xl-6"}>

                    <SView col={"xs-12"} height={120} row    >

                        <SView col={"xs-3"} height  >
                            <SImage src={SSocket.api.root + "farmacia/" + obj.key} />
                        </SView>
                        <SView col={"xs-9"} height style={{ padding: 4, }} >
                            <SView col={"xs-12"} height={40} row >
                                <SView col={"xs-9.5"} style={{ justifyContent: 'flex-start' }}>
                                    <SText fontSize={12} color={STheme.color.text} font={"LondonMM"} col={"xs-11"}>{obj.descripcion} </SText>
                                </SView>

                                <SView col={"xs-2.5"} style={{ justifyContent: 'flex-start' }} row   >
                                    <SView col={"xs-6"} row style={{ justifyContent: 'flex-start' }} onPress={() => {
                                        this.props.dispatch({
                                            component: "carrito",
                                            type: "eliminar",
                                            estado: "exito",
                                            data: {
                                                ...obj,
                                            }
                                        });
                                    }}>
                                        <SIcon name={'IconBtnDelete'} height={20} width={20} />
                                    </SView>
                                    <SView col={"xs-6"} row style={{ justifyContent: 'flex-end' }} onPress={() => { alert('favorito'); }}>
                                        <SIcon name={'IconFavFalse'} height={20} width={20} />
                                    </SView>
                                </SView>
                            </SView>
                            <SView col={"xs-12"} height={20} center  >
                                <SText fontSize={12} bold color={STheme.color.primary} font={"LondonMM"} col={"xs-12"}>En stock</SText>
                            </SView>
                            <SView col={"xs-12"} height={50} row center   >

                                <SView col={"xs-6"} height center style={{ paddingTop: 15 }}   >
                                    <SText fontSize={20} bold color={STheme.color.text} font={"LondonMM"} col={"xs-12"}>{obj.precio} Bs</SText>
                                </SView>

                                <SView col={"xs-6"} height center      >
                                    <SView col={"xs-7"} height={30} row center backgroundColor={'#F0F3F6'} style={{ borderRadius: 20, }}  >
                                        <SView style={{ position: "absolute", left: -15, }} onPress={() => {
                                            if (obj.cantidad <= 1) return;
                                            this.props.dispatch({
                                                component: "carrito",
                                                type: "registro",
                                                estado: "exito",
                                                data: {
                                                    ...obj,
                                                    cantidad: -1,
                                                }
                                            });
                                        }}>
                                            <SIcon name={'IconBtnMinus'} height={34} width={34} />
                                        </SView>
                                        <SText fontSize={18} bold color={'#111111'} >{obj.cantidad}</SText>
                                        <SView style={{ position: "absolute", right: -15, }} onPress={() => {
                                            this.props.dispatch({
                                                component: "carrito",
                                                type: "registro",
                                                estado: "exito",
                                                data: {
                                                    ...obj,
                                                    cantidad: 1,
                                                }
                                            });
                                        }}>
                                            <SIcon name={'IconBtnPlus'} height={34} width={34} />
                                        </SView>
                                    </SView>
                                </SView>

                            </SView>


                        </SView>
                    </SView>
                    <SView col={"xs-12"} height={2} style={{ borderTopWidth: 1, borderColor: '#D7D8D9', }}></SView>

                    <SView height={5} />
                </SView>
            </SView>
        </>
    }
    getBotonFlotante() {
        var total = 0;
        Object.keys(this.data).map((key, index) => {
            var obj = this.data[key];
            total += (obj.precio * obj.cantidad);
        })
        // total = parseFloat(total).toFixed(2);
        return <>
            <SView height={250} col={"xs-12"} style={{
                position: "absolute",
                bottom: 0
            }}>
                <SGradient colors={[
                    STheme.color.background,
                    STheme.color.background,
                    STheme.color.background,
                    STheme.color.background,
                    STheme.color.background,
                    STheme.color.background + "00",
                ]} />
            </SView>
            <SView col={"xs-12"} height={190} center row style={{
                position: "absolute",
                bottom: 0
            }}>


                <SView col={"xs-11 md-8 lg-8 xl-6"}>
                    <SView col={"xs-12"} height={50} row center  >
                        <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }} >
                            <SText fontSize={14} color={'#666666'} font={"LondonMM"}>Total</SText>
                            <SView col={"xs-12"} height={5} />
                            {/* <SText fontSize={14} color={'#666666'} font={"LondonMM"}>Código promocional</SText> */}
                            {/* <SView col={"xs-12"} height={5} /> */}
                            <SText fontSize={14} color={'#666666'} font={"LondonMM"}>Envío</SText>
                        </SView>
                        <SView col={"xs-6"} style={{ justifyContent: 'flex-end', }} row center>
                            <SView style={{ justifyContent: 'flex-end', }}  >
                                <SText fontSize={14} color={STheme.color.text} font={"LondonMM"}>Bs. {total.toFixed(2)}</SText>
                                <SView col={"xs-12"} height={5} />
                                {/* <SText fontSize={14} color={'#111111'} font={"LondonMM"}>0.00</SText> */}
                                {/* <SView col={"xs-12"} height={5} /> */}
                                <SText fontSize={14} color={STheme.color.text} font={"LondonMM"}>Bs. 0.00</SText>
                            </SView>
                        </SView>
                    </SView>
                    <SView col={"xs-12"} height={10} />
                    <SView col={"xs-12"} height={2} style={{ borderTopWidth: 1, borderColor: '#D7D8D9', }}></SView>


                    {/* <SView col={"xs-12"} height={2} style={{ borderBottomWidth: 1, borderColor: '#666666', }}></SView> */}
                    <SView col={"xs-12"} height={25} row center >
                        <SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', }} >
                            <SText fontSize={16} color={STheme.color.text} font={"LondonMM"}>Total</SText>
                        </SView>
                        <SView col={"xs-6"} row center style={{ justifyContent: 'flex-end', }}  >
                            <SText fontSize={16} color={STheme.color.text} font={"LondonMM"}>Bs. {total.toFixed(2)}</SText>
                        </SView>
                    </SView>
                    <SView col={"xs-12"} height={10} />
                    <SView col={"xs-12"} center height={50}>
                        <Kolping.KButtom primary onPress={() => {



                            this.props.navigation.navigate('farmacia/mensajeCarritoVacio');

                        }}  >REALIZAR PEDIDO</Kolping.KButtom>
                    </SView>
                    <SView col={"xs-12"} height={20} />
                </SView>
            </SView>
        </>
    }


    getItems() {
        return Object.keys(this.data).map((key, index) => {
            var obj = this.data[key];
            return this.getDetalle(obj)

        })
    }

    render() {
        this.data = this.props.state.carritoReducer.data;
        if (Object.keys(this.data).length <= 0) return <MensajeCarritoVacio />
        return (
            <SPage title={'Carrito'} disableScroll>
                <SView col={"xs-12 "} center height>
                    <SScrollView2 disableHorizontal={true}>
                        <SView height={20} />
                        {this.getItems()}
                        <SHr height={200} />
                    </SScrollView2>
                    {this.getBotonFlotante()}
                </SView >
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Carrito);