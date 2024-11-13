import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import { Linking } from 'react-native';

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
                <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                    <SText center fontSize={60} bold>POR DEFINIR</SText>
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                        <SText>Nro. de transacción: {this.state.NroGrl}</SText>
                        <SView onPress={()=>{
                            Linking.openURL(this.state.FacUrl)
                        }}><SText style={{color:STheme.color.link}}>{this.state.FacUrl}</SText></SView>
                        <SText width={800}>OdaPdf: {this.state.OdaPdf}</SText>
                        
                    </SView>
                    
                </SView>
                <SView col={"xs-12"} center>
                    <SHr height={65} />
                    <Kolping.KButtom primary onPress={() => {
                        SNavigation.navigate("ficha/mensaje")
                    }} >PAGAR </Kolping.KButtom>
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