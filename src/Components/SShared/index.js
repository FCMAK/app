import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SShared extends Component {

    static sharedB64(b64, { titulo = "titulo", message = "mensaje", name }) {
        var a = document.createElement("a"); //Create <a>
        a.href = b64; //Image Base64 Goes here
        a.download = name ?? "Image.png"; //File name Here
        a.click(); //Downloaded file
    }
    static saveB64(b64) {
        var a = document.createElement("a"); //Create <a>
        a.href = b64; //Image Base64 Goes here
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> index </Text>
            </View>
        );
    }
}
