import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SForm, SDate, SLoad, SMath } from 'servisofts-component';
import Kolping from '../../Components/Kolping';
import { Linking } from 'react-native';
import { Container } from '../../Components';
import Model from '../../Model';
import SSocket from 'servisofts-socket';
import SShared from '../../Components/SShared';

class Pago_nulo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.key = SNavigation.getParam("key");
    }
    componentDidMount() {
        // SSocket.sendPromise({
        //     component: "orden_compra",
        //     type: "getPreOrden",
        //     key: this.key,
        // }).then(e => {
        //     this.setState({ data: e.data })

        //     if (e.data?.nroSuc) {
        //         SSocket.sendPromise({
        //             component: "sucursal",
        //             type: "getAll",
        //             key_usuario: Model.usuario.Action.getKey(),
        //         }).then(b => {
        //             const suc = b.data.find(c => c.NroSuc == e.data?.nroSuc)
        //             this.setState({ sucursal: suc })
        //         })
        //     }

        // }).catch(e => {
        //     console.log(e);
        // })
    }
    

   

    render() {
        // if (!this.state.data) return
        // const { confirmacion, fecReg, paciente, data, nroGrl, solApp } = this.state?.data;
        // console.log("DATA", this.state?.data)
        return (
            <SPage title={'Pago de Ficha Anulado'} center>
                <SHr height={30} />
                <Container>
                    <SView col={"xs-12"} center>
                        <SView col={"xs-12"} center >
                            <SView width={180} height={180} center style={{
                                borderRadius: 100,
                                // backgroundColor: STheme.color.primary,
                                borderWidth: 3,
                                borderColor: STheme.color.primary,
                            }}>
                                <SIcon fill={STheme.color.danger} name={"nulo"} width={120} height={120} />
                            </SView>
                            <SHr height={50} />
                            <SText font={"LondonTwo"} center fontSize={24} color={STheme.color.text}>SOLICITUD ANULADA</SText>
                            <SHr height={30} />
                            <SText center font={"LondonMM"} fontSize={20}>Lamentamos informarle que su solicitud de ficha ha sido anulada. Le invitamos cordialmente a realizar una nueva compra.</SText>
                            <SHr height={20} />
                            
                        
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
                        SNavigation.reset("/")
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
export default connect(initStates)(Pago_nulo);