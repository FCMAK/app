import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SLoad, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
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
        }} backgroundColor={STheme.color.background}>
            <Item obj={data} />
        </SView>
    }
    render() {
        var data = sucursal.Actions.getByKey(this.key, this.props);
        if (!data) return <SLoad />

        return (
            <SPage title={'¿Cómo llegar?'} disableScroll center>
                <SMapView initialRegion={
                    {
                        latitude: data.lat,
                        longitude: data.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    preventCenter>
                        <SMarker lat={data.lat} lng={data.lng}/>
                </SMapView>
                {this.getCard()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Mapa);