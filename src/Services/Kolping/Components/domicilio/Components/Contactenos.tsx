import React, { Component } from 'react';
import { SLoad, SText, STheme, SView } from 'servisofts-component';

type Contactenos_props = {
    primary?: boolean,
    secondary?: boolean,
    outline?: boolean,
    onPress?: (instance: Contactenos) => void,
    loading?: boolean,
    small?: boolean,
    styleA?: any,
    width?: number
    children?: any
}

export default class Contactenos extends Component<Contactenos_props> {
    state = {
        loading: false,
    }
    constructor(props: any) {
        super(props);
    }

    setLoading(bool) {
        this.state.loading = bool;
        this.setState({...this.state})
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
        const loading = this.state.loading || this.props.loading
        return (<SView row height={size.height} style={{
            borderRadius: 8,
            width: "100%",
            maxWidth: size.width,
            ...(this.props.outline ? { borderWidth: 1, borderColor: bgColor } : { backgroundColor: bgColor }),
            ...this.props.styleA
        }} center
            activeOpacity={loading ? 1 : 0.5}
            {...this.props}
            onPress={() => {
                if (loading) return;
                if (this.props.onPress) {
                    this.props.onPress(this);
                }
            }} >
            {loading ? <SLoad /> : <SText center fontSize={14} color={this.props.outline ? bgColor : STheme.color.white} font={"LondonTwo"} >{this.props.children}</SText>}
        </SView>);
    }
}
