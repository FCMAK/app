import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Container from '../../../../../Components/Container';

type _props = {
    onPress?: Function
}
class Header2 extends Component<_props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Container>
                    <SView col={"xs-12"} style={{ alignItems: "flex-end" }}>
                        <SHr height={30} />
                        <SIcon name={"Logo"} height={56} width={240} fill={STheme.color.white} />
                        <SHr height={30} />

                    </SView>
                </Container>

                <SView col={"xs-12"} backgroundColor={"#279BA2"} style={{
                    borderBottomWidth: 3,
                    borderColor: STheme.color.info,
                }} >
                    <Container>
                        <SHr height={30} />
                        <SText col={"xs-12"} font='LondonTwo' color={STheme.color.white} fontSize={24}>{this.props?.titulo}</SText>
                        <SHr height={30} />
                        {/* <SText col={"xs-12"} center font='LondonTwo' color={STheme.color.white} fontSize={16}>{this.props?.descripcion}</SText> */}
                    </Container>
                </SView>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Header2);