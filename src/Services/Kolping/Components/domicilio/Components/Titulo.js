import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Parent from '../index'
class DomicilioTitulo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.titulo = "Óptica Kolping"
        // if(this.props.dato){
        //     this.titulo = this.props.dato
        // }
    }


   
    render() {
        return (
           <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>{this.props.dato}</SText>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DomicilioTitulo);