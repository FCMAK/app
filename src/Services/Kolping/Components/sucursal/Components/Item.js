import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';

type _props = {
    onPress?: Function
}
class Item extends Component<_props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-12"} row height={135} backgroundColor={STheme.color.card} style={{ borderRadius: 24, }} onPress={this.props.onPress}>
                <SView col={"xs-3"} center height >
                    <SView width={65} height={65} style={{
                        borderRadius: 8,
                        backgroundColor: STheme.color.card,
                        overflow: 'hidden',
                    }}>
                        {/* <SImage enablePreview src={SSocket.api.root + "sucursal/" + this.props.obj?.NroSuc} width={"100%"} height={"100%"}
                            style={{
                                resizeMode: 'cover',
                            }}
                        /> */}
                        <SImage enablePreview src={require('../../../../../Assets/img/noimage.jpg')}  width={"100%"} height={"100%"}
                            style={{
                                resizeMode: 'cover',
                            }}
                        />
                    </SView>
                </SView>
                <SView col={"xs-8"} height >
                    <SHr height={16} />
                    <SText font={"LondonMM"} fontSize={18}  >{this.props.obj?.NomSuc}</SText>
                    <SView col={"xs-12"} row flex={2} center  >
                        <SView col={"xs-1"} style={{
                            justifyContent: 'center',
                        }}>
                            <SIcon name={"map"} width={10} />
                        </SView>
                        <SView col={"xs-11"}  >
                            <SText font={"LondonMM"} fontSize={12}>{this.props.obj?.DirSuc}</SText>
                        </SView>
                    </SView>

                    <SView col={"xs-12"} row flex={2} center  >
                        <SView col={"xs-1 sm-1 md-1 lg-1 xl-1"}    >
                            <SIcon name={"cellphone"} width={13} height={13} fill={STheme.color.info} />
                        </SView>
                        <SView col={"xs-11"}  >
                            <SText font={"LondonBetween"} fontSize={14} color={STheme.color.info}>
                                {this.props.obj?.TelSuc}
                            </SText>
                        </SView>
                        <SHr height={3} />
                        {/* {} */}
                        <SView col={"xs-1 sm-1 md-1 lg-1 xl-1"}  >
                            <SIcon name={"whatsApp"} width={14} height={14} fill={STheme.color.info} />
                        </SView>
                        <SView col={"xs-11"} style={{ paddingTop: 2 }}  >
                            <SText font={"LondonBetween"} fontSize={14} color={STheme.color.primary}>{this.props.obj?.MsgSuc}</SText>
                        </SView>
                    </SView>



                    <SHr height={16} />

                </SView>
                <SView col={"xs-1"} center height>
                    <SIcon name={"arrowRight"} width={30} fill={"transparent"} />
                </SView>
            </SView >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Item);