import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';

type _props = {
    onPress?: Function
}
class Header extends Component<_props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <SView col={"xs-12"} center backgroundColor={STheme.color.primary + "90"} style={{
                    top: -15,
                    borderBottomWidth: 3,
                    borderColor: STheme.color.info
                }} >
                    <SHr height={50} />
                    <SText col={"xs-8"} center font='LondonTwo' color={STheme.color.white} fontSize={20}>{this.props?.titulo}</SText>
                    <SHr height={15} />
                    <SView width={120} height={120} style={{
                        backgroundColor: STheme.color.info,
                        borderRadius: 8
                    }}></SView>
                    <SHr height={10} />
                    <SText col={"xs-8"} center font='LondonTwo' color={STheme.color.white} fontSize={16}>{this.props?.descripcion}</SText>
                    <SHr height={55} />
                </SView>
                <SView col={"xs-12"} center style={{
                    top: -55,
                    // position:"absolute"
                }}>
                    <SView width={80} height={80} style={{
                        borderRadius: 100,
                        borderColor: STheme.color.primary,
                        borderWidth: 3,
                        backgroundColor: STheme.color.white
                    }} center>
                        <SIcon name='logoLista' height={50} width={50} />
                    </SView>
                </SView>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Header);