import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { SGradient, SIcon, SImage, SView } from 'servisofts-component';
type type = {
    source: Object,
    contraste: String

}
export default class BackgroundImage extends Component<type> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getBackground = () => {
        var source = this.props.source;
        if (!source) {
            source = require("./background.png");
        }
        return <View  style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            right: 0,
            justifyContent: 'flex-end',
            ...this.props.style,
        }}>
            <SIcon name={"Bg1"} />
            {/* <SIcon name={"Bg1"} height={118}  /> */}
        </View>
    }
    render() {
        // if (!this.props.source) {
        //     return <View />
        // }
        return this.getBackground()
    }
}
