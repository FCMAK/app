import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon,SWebView } from 'servisofts-component';
import { WebView } from 'react-native';
class Kolping extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SPage title={'Sobre Kolping'}>
                <SView col={"xs-12"} center>
                    <SView col={"xs-11"}>
                        

                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Kolping);