import React, { Component } from 'react';
import { Linking, Platform } from 'react-native'

export default class WhatsApp {
    static send({ phone, menssage }) {
        var msn = encodeURIComponent(menssage);
        phone = phone.replace(/\s/g, '');
        const url = "https://wa.me/" + phone + "?text=" + msn;
        Linking.openURL(url);

        // if (Platform.OS == "web") {
        //     // window.open(url,)
        // } else {

        // }
    }
}
