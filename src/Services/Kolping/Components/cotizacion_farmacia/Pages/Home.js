import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import Parent from '../index'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getButtom({ label, url, params, icon }) {
        return <SView col={"xs-4"} height={130} style={{
            padding: 5,
        }}>
            <SView col={"xs-12"} height center style={{
                overflow: "hidden",
            }} onPress={() => {
                SNavigation.navigate(url, params)
            }}>
                <SView center col={"xs-12"}>
                    <SIcon name={icon} height={80} width={80} />
                </SView>
                <SView col={"xs-12"} height={34} center flex>
                    <SText center font={"LondonMM"} fontSize={15}>{label}</SText>
                </SView>
            </SView>
        </SView>
    }
    render() {
        return (
            <SPage title={"Servicios a domicilio"} disableScroll center>
                <SHr />
                <SView row col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    {this.getButtom({ label: "Óptica", url: "admin/servicio_domicilio/lista", icon: "SDoptica", params: { servicio: "optica" } })}
                    {this.getButtom({ label: "Laboratorio", url: "admin/servicio_domicilio/lista", icon: "SDlaboratorio", params: { servicio: "laboratorio" } })}
                </SView>
                <SView flex />

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Home);