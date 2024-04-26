import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Parent from '../index'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <SView width={160} height={196} backgroundColor={STheme.color.background} style={{ borderRadius: 8, overflow: 'hidden', borderColor: STheme.color.card, borderWidth: 1, overflow: 'hidden', }}>
                <SView col={"xs-12"} row center >

                    <SView col={"xs-12"} height={100} center  >
                        <SImage src={SSocket.api.root + Parent.component + "/" + this.props.obj?.key} enablePreview />
                    </SView>

                    <SView col={"xs-10.5"}   >


                        <SView col={"xs-12"} height={58} row center>
                            <SText col={"xs-12"} fontSize={12} font={"LondonMM"}  >
                                {this.props.obj?.descripcion}</SText>
                        </SView>


                        <SView center height={32} onPress={() => {
                            SNavigation.navigate("farmacia/agregarCarrito", { key_farmacia: this.props.obj?.key });
                        }}>
                            <SView col={"xs-12"} height={28} row center>
                                <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                                    <SText fontSize={14} font={"LondonMM"} bold >Bs. {this.props.obj?.precio}</SText>
                                </SView>
                                <SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }} >
                                    <SIcon name={'IconCartTrue'} fill={STheme.color.primary} height={24} width={24} />
                                </SView>
                            </SView>
                        </SView>
                    </SView>
                </SView >
            </SView >

        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Item);