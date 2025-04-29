import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Parent from '../index'
class DomicilioDescripcion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

   
    render() {
        return (
           <SText font={"LondonBetween"} fontSize={15}>{this.props.dato}</SText>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DomicilioDescripcion);