import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SLoad, SImage, SBuscador } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../sucursal/index';
import SSocket from 'servisofts-socket'

class ListaCentros extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getCardSucursales({ img, url, title, texto, telefono, celular }) {
        return <SView col={"xs-12"} row height={110} backgroundColor={STheme.color.card} style={{ borderRadius: 24, }} onPress={() => {
            //alert(title + '\n' + texto + '\n' + numero);
            SNavigation.navigate(url)
        }}>
            <SView col={"xs-3"} center height >
                <SView width={60} height={60} style={{ borderRadius: 18 }}>
                    <SImage src={img} style={{
                        borderRadius: 18,
                        resizeMode: "cover"
                    }} />
                </SView>
            </SView>
            <SView col={"xs-8"} height >
                <SHr height={8} />
                <SText font={"LondonMM"} fontSize={18}>{title}</SText>
                <SHr height={8} />
                <SView col={"xs-12"} row flex>
                    <SView col={"xs-1"} height style={{
                        justifyContent: 'center',
                    }}>
                        <SIcon name={"map"} width={10} />
                    </SView>
                    <SView col={"xs-11"} height={50}>
                        <SText font={"LondonMM"} fontSize={12}>{texto}</SText>
                    </SView>
                </SView>
                <SHr height={8} />
                <SView col={"xs-12"} row flex center>
                    <SView col={"xs-1"} style={{
                        justifyContent: 'center',
                    }}>
                        <SIcon name={"cellphone"} width={10} fill={STheme.color.info} />
                    </SView>
                    <SView col={"xs-11"} row>
                        <SView col={"xs-6"} >
                            <SText font={"LondonBetween"} fontSize={14} color={STheme.color.info}>{telefono}</SText>
                        </SView>
                        {/* <SView col={"xs-6"} row>
                            <SIcon name={"whatsApp"} width={10} fill={STheme.color.info} />
                            <SText font={"LondonBetween"} fontSize={14} color={STheme.color.primary}>  {celular}</SText>
                        </SView> */}
                    </SView>
                </SView>
            </SView>
            <SView col={"xs-1"} center height>
                <SIcon name={"arrowRight"} width={30} fill={"transparent"} />
            </SView>
        </SView>
    }
    getSucursales() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return Object.keys(data).map((key) => {
            if (!SBuscador.validate(data[key], this.state.find)) {
                return null;
            }
            return <>
                {
                    this.getCardSucursales({
                        img: (SSocket.api.root + Parent.component + "/" + key),
                        url: "ficha/opciones",
                        title: data[key].nombre,
                        texto: data[key].direccion,
                        telefono: data[key].telefono_fijo,
                        //celular: data[key].telefono_wp,
                    })
                }
                <SHr height={20} />
            </>
        })
    }

    render() {
        return (
            <SPage title={'Selecciona un Centro Médico'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>

                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    <SHr height={10} />
                    <SView col={"xs-12"} >
                        <SText font={"LondonBetween"} fontSize={20}>Elija el centro médico de su preferencia:</SText>
                    </SView>
                    <SView col={"xs-12"} center >
                        <SHr height={20} />
                        {this.getSucursales()}
                        <SHr height={35} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ListaCentros);