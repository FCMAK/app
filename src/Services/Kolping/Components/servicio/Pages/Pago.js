import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class Pago extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getContentForm() {
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};
        // }
        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-12 sm-9 md-8 lg-8 xl-10"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                nombre: { label: "NIT/CI", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
                descripcion: { label: "Nombre completo", isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}


        // onSubmitName={"Guardar"}
        // onSubmit={(values) => {
        //     if (this.key) {
        //         Parent.Actions.editar({ ...this.data, ...values }, this.props);
        //     } else {
        //         Parent.Actions.registro(values, this.props);
        //     }
        // }}
        />
    }
    render() {
        return (
            <SPage title={'Pago de Ficha'} center>
                <SHr height={30} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SView col={"xs-7"} >
                        <SText fontSize={18} font={"Roboto"} color={STheme.color.lightGray}>1 producto en el carrito</SText>
                    </SView>
                    <SView col={"xs-5"} center>
                        <SText fontSize={18} font={"Roboto"} color={STheme.color.lightGray}>Total</SText>
                        <SText fontSize={18} font={"Roboto"} color={STheme.color.darkGray}>100 Bs.</SText>
                    </SView>
                    <SHr height={60} />
                    <SView col={"xs-12"} row>
                        <SView col={"xs-7"} >
                            <SText fontSize={18} font={"LondonTwo"} color={STheme.color.darkGray}>Tipo de Pago</SText>
                        </SView>
                        <SView col={"xs-5"} center onPress={() => {
                            //SNavigation.navigate("ficha/pago")
                        }}>
                            <SText fontSize={18} font={"LondonBetween"} color={STheme.color.info}>+ Añadir</SText>
                        </SView>
                    </SView>
                    <SHr height={20} />
                    <SView col={"xs-12"} row center style={{ borderWidth: 1, borderRadius: 8, borderColor: STheme.color.lightGray }}>
                        <SView col={"xs-11"} row>
                            <SHr height={15} />
                            <SView col={"xs-2"} row>
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Ptarjeta.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-7"} center>
                                <SText fontSize={18} font={"Roboto"} color={STheme.color.darkGray}>Tarjeta de Crédito</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.info}>*</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} row>
                            <SHr height={15} />
                            <SView col={"xs-2"} row>
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Pfassil.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-7"} center>
                                <SText fontSize={18} font={"Roboto"} color={STheme.color.darkGray}>Banco FASSIL</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.info}>*</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} row>
                            <SHr height={15} />
                            <SView col={"xs-2"} row>
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Ptransferencia.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-7"} center>
                                <SText fontSize={18} font={"Roboto"} color={STheme.color.darkGray}>Transferencia QR</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.info}>*</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} row>
                            <SHr height={15} />
                            <SView col={"xs-2"} row>
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Ptigo.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-7"} center>
                                <SText fontSize={18} font={"Roboto"} color={STheme.color.darkGray}>Tigo Money</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SText fontSize={20} font={"Roboto"} color={STheme.color.info}>*</SText>
                            </SView>
                        </SView>
                        <SHr height={15} />
                    </SView>
                    <SHr height={35} />
                    <SView col={"xs-12"} row>
                        <SView col={"xs-12"} >
                            <SText fontSize={18} font={"LondonTwo"} color={STheme.color.darkGray}>Datos de Facturación</SText>
                        </SView>
                        <SHr height={15} />
                        <SView col={"xs-12"} center>
                            {this.getContentForm()}
                        </SView>

                    </SView>
                    <SView col={"xs-12"} center>
                        <SHr height={65} />
                        <Kolping.KButtom primary onPress={() => {
                            SNavigation.navigate("ficha/mensaje")
                        }} >PAGAR </Kolping.KButtom>
                        <SHr height={30} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Pago);