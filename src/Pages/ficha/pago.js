import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SForm } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import { Linking } from 'react-native';
import { Container } from '../../Components';

class Pago extends Component {
    constructor(props) {
        super(props);

        this.state = props.route.params?.data[0];
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


        />
    }
    render() {
        return (
            <SPage title={'Pago de Ficha'} center>
                <SHr height={30} />
                <Container>
                    <SView col={"xs-12"} center>
                        <SView col={"xs-12"} center>
                            <SIcon name={"ok"} width={150} height={150} />
                            <SHr height={50} />
                            <SText font={"LondonTwo"} center fontSize={24} color={STheme.color.text}>GRACIAS POR SU COMPRA </SText>
                            <SHr height={30} />
                            <SText center font={"LondonMM"} fontSize={20}>Su ficha ha sido reservada correctamente. A continuación puede descargar su recibo y acceder a la factura a través de la plataforma de impuestos SIAT</SText>
                            <SHr height={20} />
                            <SText>Nro. de transacción: {this.state.NroGrl}</SText>
                            <SHr height={20} />
                            <SView col={"xs-12"} row center>
                                <SView width={150} height={50} style={{
                                    borderRadius: 8,
                                    backgroundColor: STheme.color.primary,
                                   
                                }} row center
                                    onPress={() => {
                                        const base64Data = `data:application/pdf;base64,${this.state.OdaPdf}`
                                        const link = document.createElement("a");
                                        link.href = base64Data;
                                        link.download = "file.pdf"; // Nombre del archivo
                                        link.click();
                                    }}>
                                    <SIcon name={"descargar"} width={40} height={30} fill={STheme.color.white} />
                                    <SText font='LondonTwo' fontSize={16} color={STheme.color.white} >Descargar</SText>
                                </SView>
                                <SView width={20} />
                                
                                    <SView width={150} height={50} style={{
                                        borderRadius: 8,
                                        backgroundColor: STheme.color.info,
                                   
                                    }} row center
                                        onPress={() => {
                                            Linking.openURL(this.state.FacUrl)
                                        }}>
                                        {/* <SIcon name={"descargar"} width={40} height={30} fill={STheme.color.white} /> */}
                                        <SText font='LondonTwo' fontSize={16} color={STheme.color.white} >Factura</SText>
                                    </SView>
                                
                            </SView>


                            {/* <SText>Nro. de transacción: {this.state.NroGrl}</SText>
                            <SView onPress={() => {
                                Linking.openURL(this.state.FacUrl)
                            }}><SText style={{ color: STheme.color.link }}>{this.state.FacUrl}</SText></SView>
                            <SText width={800} onPress={() => {
                                const base64Data = `data:application/pdf;base64,${this.state.OdaPdf}`
                                const link = document.createElement("a");
                                link.href = base64Data;
                                link.download = "file.pdf"; // Nombre del archivo
                                link.click();
                            }}>OdaPdf: {this.state.OdaPdf}</SText> */}
                        </SView>
                    </SView>
                </Container>

                <SView col={"xs-12"} center>
                    <SHr height={65} />
                    <Kolping.KButtom primary onPress={() => {
                        SNavigation.navigate("/")
                    }} >ACEPTAR </Kolping.KButtom>
                    <SHr height={30} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Pago);