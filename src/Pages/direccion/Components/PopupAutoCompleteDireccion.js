import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SInput, SList, SLoad, SPage, SScroll, SText, STheme, SThread, SView } from 'servisofts-component';
import Model from '../../../Model';

class PopupAutoCompleteDireccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: null,
        };
    }

    render_data() {
        if (this.state.loading) return <SLoad />
        if (!this.state.locations) return <SText col={"xs-12"} fontSize={16} font='LondonMM' center>Sin resultados</SText>

        return <SList
            col={"xs-12"}
            data={this.state.locations}
            limit={5}
            render={(obj) => {
                return <SView col={"xs-12"} height={64} row center border={"transparent"}>
                    <SView width={50} height={64} center>
                        <SView height={36} width={36} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center>
                            <SIcon name={'Marker'} height={24} width={40} fill={'#484848'} />
                        </SView>
                    </SView>
                    <SView width={8} />
                    <SView flex height={64} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray, justifyContent: 'center', }}
                        onPress={() => {
                            Model.locationGoogle.Action.detail({ place_id: obj.place_id }).then(resp => {
                                if (this.props.callback) {
                                    this.props.callback({
                                        direccion: obj.direccion,
                                        latitude: resp.data.latitude,
                                        longitude: resp.data.longitude,
                                    })
                                }
                            }).catch(e => {
                                console.error(e);
                            })
                            // var aux = this.setState({ place_id: obj.place_id, direccion: obj.direccion });
                        }} >
                        <SText fontSize={12} color={STheme.color.text} >{obj.direccion}</SText>
                        <SText fontSize={12} color={STheme.color.text} font='LondonBetween' >{obj.direccion}</SText>
                    </SView>
                </SView>
            }} />
    }
    render() {
        return (<SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} backgroundColor={STheme.color.background}
            style={{
                borderRadius: 16,
                overflow: "hidden",
                padding: 8,
            }} withoutFeedback>
            <SHr />
            <SInput customStyle={"kolping"} col={"xs-12"} placeholder={"Mi dirección..."} style={{  height: "100%" }}
                color={STheme.color.text} placeholderTextColor={STheme.color.gray} height={40} fontSize={12}
                onChangeText={(text) => {
                    // this.setState({ find: text })
                    if (text.length <= 3) {
                        this.setState({ locations: null })
                        return;
                    }

                    new SThread(600, "hilo_auto_complete_location", true).start(() => {
                        this.setState({ loading: true })
                        Model.locationGoogle.Action.autocomplete({
                            ...this.props.region,
                            direccion: text,
                            radius: 10000000
                        }).then(resp => {
                            this.state.locations = resp.data;
                            this.setState({ loading: false })
                            console.log(resp);
                        }).catch(e => {
                            this.setState({ loading: false })
                            console.error(e);
                        })
                    })

                }}
            />
            <SHr />
            <SView col={"xs-12"} height={350}>
                <SScroll>
                    {this.render_data()}
                </SScroll>
            </SView>
        </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(PopupAutoCompleteDireccion);