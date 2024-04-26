import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../index';
import SSocket from 'servisofts-socket';
class AgregarCarrito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 1,
        };
        this.key_farmacia = SNavigation.getParam("key_farmacia");
    }

    getInputUnidades() {
        return <SView width={170} height={55} style={{
            borderRadius: 30,
            borderWidth: 1,
            borderColor: STheme.color.primary,
        }} row>
            <SView col={"xs-4"} center height onPress={() => {
                if (this.state.cantidad > 1) {
                    this.setState({ cantidad: this.state.cantidad - 1 });
                }
            }}>
                <SText fontSize={28} color={STheme.color.primary + (this.state.cantidad > 1 ? "" : "66")} center bold>{"-"}</SText>
            </SView>
            <SView col={"xs-4"} center height>
                <SText fontSize={20} color={STheme.color.primary}>{this.state.cantidad}</SText>
            </SView>
            <SView col={"xs-4"} center height onPress={() => {
                this.setState({ cantidad: this.state.cantidad + 1 })
            }}>
                <SText fontSize={28} color={STheme.color.primary} center bold>{"+"}</SText>
            </SView>
        </SView>
    }
    getUnidades() {
        return <SView col={"xs-11"}>
            <SText fontSize={18} font={"LondonMM"}>{"Unidades"}</SText>
            <SHr />
            <SHr height={1} color={STheme.color.card} />
            <SHr height={32} />
            <SView col={"xs-12"} center>
                {this.getInputUnidades()}
            </SView>
        </SView>
    }
    getProducto() {
        return <SView col={"xs-11"}>
            <SView col={"xs-12"} height={160} center >
                <SView width={150} height={150} style={{
                    borderRadius: 8,
                    overflow: 'hidden',
                }}>
                    <SImage src={SSocket.api.root + "farmacia/" + this.data.key} />
                </SView>
            </SView>
            <SHr height={32} />
            <SText fontSize={22} font={"LondonTwo"}>{this.data.descripcion}</SText>
            <SHr height={32} />
            <SText fontSize={24} bold>Bs. {this.data.precio}</SText>
        </SView>
    }
    render() {
        this.data = Parent.Actions.getByKey(this.key_farmacia, this.props);
        if (!this.data) { return <SLoad />; }
        return (
            <SPage title={'AgregarCarrito'} center>
                <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                    <SHr height={64} />
                    {this.getProducto()}
                    <SHr height={64} />
                    {this.getUnidades()}
                    <SHr height={64} />
                    <SHr height={1} color={STheme.color.card} />
                    <SHr />
                    <SView col={"xs-11"} center>
                        <Kolping.KButtom onPress={() => {
                            SNavigation.goBack();
                            this.props.dispatch({
                                component: "carrito",
                                type: "registro",
                                estado: "exito",
                                data: {
                                    ...this.data,
                                    cantidad: this.state.cantidad,
                                }
                            });
                            // SNavigation.navigate("farmacia/carrito",{});
                        }} >{`Agregar al carrito (Bs. ${(this.state.cantidad * this.data.precio).toFixed(2)})`}</Kolping.KButtom>
                    </SView>
                    <SHr height={64} />
                </SView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(AgregarCarrito);