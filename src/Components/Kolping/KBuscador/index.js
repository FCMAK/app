import React, { Component } from 'react';
import { SHr, SIcon, SImage, SText, STheme, SView, SInput, } from 'servisofts-component';

export default class KBuscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <SView col={"xs-12"} row height={70} center>
                <SView col={"xs-12"} center height>
                    <SView row col={"xs-12"} height={40} center backgroundColor={STheme.color.card} style={{ borderRadius: 8 }}>
                        <SView col={"xs-1.5"} height center>
                            <SIcon name={"IconSearch"} width={20} fill={this.props.fill ?? STheme.color.primary} />
                        </SView>
                        <SView col={"xs-9"} center>
                            <SInput col={"xs-12"}
                                placeholder={this.props.placeholder ?? "Busqueda personalizada..."} style={{
                                    borderWidth: 0,
                                    height: "100%",
                                }} color={STheme.color.text} placeholderTextColor={STheme.color.gray}  onChangeText={(txt) => {
                                    this.props.onChangeText(txt);
                                }} />
                        </SView>
                        <SView col={"xs-1.5"} center height >
                            <SIcon name={"IconSearchFilter"} width={20} fill={this.props.fill ?? STheme.color.primary} />
                        </SView>
                    </SView>
                </SView>
            </SView>
        );
    }
}