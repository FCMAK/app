import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Container from '../../../../../Components/Container';

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
                <SView col={"xs-12"} center backgroundColor={"#279BA2"} style={{
                    top: -15,
                    borderBottomWidth: 3,
                    borderColor: STheme.color.info,
                    overflow: "hidden",
                    zIndex: 9
                }} >
                    <SView col={"xs-12"} center style={{
                        position: "absolute",
                        top: 15,
                        overflow: "hidden"
                    }}>
                        <SIcon name='fondo1' height={"100%"} width={"100%"} style={{}} />
                    </SView>
                    <Container>
                        <SHr height={50} />
                        <SText col={"xs-12"} center font='LondonTwo' color={STheme.color.white} fontSize={20}>{this.props?.titulo}</SText>
                        <SHr height={20} />
                        <SView width={150} height={150} style={{
                            backgroundColor: STheme.color.info,
                            borderRadius: 8,
                        }} center>
                            <SIcon name={this.props.icon} height={76} width={76} fill={STheme.color.white} />
                        </SView>
                        <SHr height={10} />
                        <SText col={"xs-12"} center font='LondonTwo' color={STheme.color.white} fontSize={16}>{this.props?.descripcion}</SText>
                        <SHr height={55} />
                    </Container>

                </SView>
                <SView col={"xs-12"} center style={{
                    top: -55,
                    zIndex: 10,
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