import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SNavigation, SPage, SText, SView, SLoad, STheme, SImage,SMath } from 'servisofts-component';
import Parent from '../index';
import Kolping from '../../../../../Components/Kolping';
import KButtom from '../../../../../Components/Kolping/KButtom';
import SSocket from 'servisofts-socket';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: null,
        };
        // this.key = SNavigation.getParam("key");
    }




    sendFile(file, url) {
        if (!file) return; //aquiiiiiiiiiiiiiiiiiiii valkido si hay foto
        console.log(url)
        file.name = "img.png";
        file.type = "image/png";
        var body = new FormData();
        body.append('file', {
            uri: file.uri,
            type: file.type,
            name: file.name
        });
        console.log(file)

        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.send(body);
        this.setState({ ...this.state })
    }




    

    botones() {

        // valiando si existe foto



        return (
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>

 
                <KButtom onPress={() => {
                    // this.sendFile(this.state.foto, SSocket.api.root + "upload/camara/" + '1234567');
                    console.log("sadad");
                    if (!this.state.foto) return;
                    Parent.Actions.registro({ monto: 0 }, this.props)
                    // SNavigation.navigate("cotizacion_farmacia/listaCotizada")
                }} styleA={{ backgroundColor: (!this.state.foto) ? '#44444499' : '#018992', }} >COTIZAR</KButtom>
                <SHr />
                <SHr />
                <KButtom secondary onPress={() => { SNavigation.navigate("cotizacion_farmacia/listaCotizada") }}>CANCELAR</KButtom>
                <SHr />
                <SHr />

                <KButtom onPress={() => {
                    SNavigation.goBack()
                }} styleA={{ backgroundColor: '#018992' }} >MIS COTIZACIONES</KButtom>

            </SView >)

    }
    render() {



        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                if (reducer.lastRegister) {
                    console.log(reducer.lastRegister.key + " -------")
                    this.sendFile(this.state.foto, SSocket.api.root + "upload/" + Parent.component + "/" + reducer.lastRegister.key);
                }
                reducer.estado = "";
                // SNavigation.goBack();
            }
        }


        return (
            <SPage title={'Registro de ' + Parent.component} center>
                <SHr height={32} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>{"Adjunta tu receta (imagen nítida)"}</SText>
                    <SView col={"xs-12"} height={2} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary, }}></SView>
                </SView>
                <SHr height={32} />

                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    <SView col={"xs-11"} height={200} style={{ overflow: 'hidden', borderRadius: 16 }}>
                        <SView col={"xs-12"} height backgroundColor={STheme.color.lightGray + "99"} center border='red'
                        style={{
                            overflow: 'hidden'
                        }}
                            onPress={() => {


                                // SNavigation.navigate("camara", {
                                //     onChange: (foto) => {
                                this.setState({ foto: { uri: "" } })
                                //     }
                                // })
                            }}
                        >
                            <SIcon name={"Camera"} width={100} />
                            <SImage src={this.state.foto?.uri} style={{ resizeMode: "cover", position: 'absolute', top: 0 }} />
                        </SView>
                    </SView>
                </SView>

                <SHr height={32} />
                {this.botones()}
                <SHr height={32} />


            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);