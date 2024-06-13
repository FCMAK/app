import React, { Component } from 'react';
import { SLoad, SText, STheme, SView } from 'servisofts-component';

type KButtom_props = {
    primary?: boolean,
    secondary?: boolean,
    outline?: boolean,
    onPress?: () => void,
    loading?: boolean,
    small?: boolean,
    styleA?: any,
    width?: number
}

export default class KButtom extends Component<KButtom_props> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        var bgColor = this.props.primary ? STheme.color.primary : this.props.secondary ? STheme.color.info : STheme.color.primary;
        var width = this.props.width ? this.props.width : 350;
        var size = {
            width: width,
            height: 50
        }
        if (this.props.small) {
            size.width = 130;
            size.height = 30;
        }
        return (<SView height={size.height} style={{
            borderRadius: 8,
            width: "100%",
            maxWidth: size.width,
            ...(this.props.outline ? { borderWidth: 1, borderColor: bgColor } : { backgroundColor: bgColor }),
            ...this.props.styleA
        }} center
            activeOpacity={this.props.loading ? 1 : 0.5}
            {...this.props}
            onPress={() => {
                if (this.props.loading) return;
                if (this.props.onPress) {
                    this.props.onPress();
                }
            }} >
            {this.props.loading ? <SLoad /> : <SText color={this.props.outline ? bgColor : STheme.color.white} font={"Roboto-Bold"} >{this.props.children}</SText>}
        </SView>);
    }
}
