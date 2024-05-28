import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import sucursal from '..';
import Item from '../Components/Item';

class Mapa extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    getCard = (item) => {
        var data = sucursal.Actions.getByKey(this.key, this.props);
        if (!data) return <SLoad />
        return <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} style={{
            position: "absolute",
            bottom: 16,
            borderRadius: 32,
        }} backgroundColor={STheme.color.background}
        >
            <Item obj={data} />
        </SView>
    }

    getOpciones = () => {
        return <SView col={"xs-12"} style={{
            position: "absolute",
            top: 20,
            // borderRadius: 32,
            alignItems: "flex-end"
        }} center>
            <SView width={130} height={45} backgroundColor={STheme.color.background}
                style={{
                    borderTopLeftRadius: 50,
                    borderBottomLeftRadius: 50,
                    padding: 5,
                }} row
                onPress={() => {
                    SNavigation.navigate("ficha/opciones", { keysuc: this.key })
                }}
            >
                <SView width={35} height={35} center style={{
                    borderRadius: 100,
                    backgroundColor: STheme.color.primary
                }}>
                    <SIcon name={"services"} width={20} height={20} fill={STheme.color.secondary} />
                </SView>
                <SView width={10} />
                <SText fontSize={16} center font='LondonMM'>Servicios</SText>
            </SView>

        </SView>
    }

    render() {
        var data = sucursal.Actions.getByKey(this.key, this.props);
        if (!data) return <SLoad />

        return (
            <SPage title={'¿Cómo llegar?'} disableScroll center>
                <SMapView initialRegion={
                    {
                        latitude: data.LatSuc,
                        longitude: data.LonSuc,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    preventCenter>
                    <SMapView.SMarker latitude={data.LatSuc} longitude={data.LonSuc} fill={STheme.color.primary}>
                        <SIcon name={"mapa"} width={70} height={60} fill={STheme.color.primary} />
                    </SMapView.SMarker>
                    {/* <SMarker lat={data.LatSuc} lng={data.LonSuc} /> */}
                </SMapView>
                {this.getOpciones()}
                {this.getCard()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Mapa);