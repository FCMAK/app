import React, { Component } from 'react';
import { SPage, SText, SThread, SView, SNavigation, STheme, SIcon, SLoad } from 'servisofts-component';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import DBF from '..';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    getTablas() {

        var tablas = DBF.getTablas(this.props);
        if (!tablas) {
            return <SText>Cargando</SText>
        }
        return tablas.map((tabla, index) => {
            return <SView col={"xs-4"} colSquare center style={{
                padding: 4,
            }}>
                <SView backgroundColor={STheme.color.danger} center height col={"xs-12"} style={{
                    borderRadius: 5,
                }} onPress={() => {
                    SNavigation.navigate("dbf/", {
                        key: tabla.name,
                    });
                }}>
                    <SText>{tabla.name}</SText>
                </SView>
            </SView>
        })
    }
    render() {

        return (
            <SPage
                title="DBF"
            >
                <SView
                    col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <SView row>
                        {this.getTablas()}
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);