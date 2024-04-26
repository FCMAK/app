import React, { Component } from 'react';
import { SHr, SIcon, SImage, SText, STheme, SView } from 'servisofts-component';
import { Linking } from 'react-native'

export default class KFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getCardFooter({ svg, link }) {
        return <SView col={"xs-1"} style={{ margin: 7, }} onPress={() => {
            //alert(svg);
            Linking.openURL(link);
        }}>
            <SIcon name={svg} fill={STheme.color.secondary} width={20} height={20} />
        </SView>
    }

    render() {
        return (
            <SView col={"xs-12"} row height={70} backgroundColor={STheme.color.text} center>
                <SView col={"xs-11"} row>
                    <SView col={"xs-6"} center>
                        <SHr height={12} />
                        <SIcon name={"logowhite"} height={45} fill={STheme.color.secondary} />
                    </SView>
                    <SView col={"xs-5"} flex center row style={{alignItems: "flex-end"}}>
                        <SHr height={12} />
                        {this.getCardFooter({ svg: "facebook", link: "https://www.facebook.com/centrokolping" })}
                        {this.getCardFooter({ svg: "instagram", link: "https://www.instagram.com/kolping_sc_oficial/?hl=es-la" })}
                        {this.getCardFooter({ svg: "tiktok", link: "https://www.tiktok.com/@kolping_sc_oficial" })}
                        {this.getCardFooter({ svg: "youtube", link: "https://www.youtube.com/channel/UCAPZ2-fZUdN7rd6t3POzJaQ" })}
                        {this.getCardFooter({ svg: "linkedin", link: "https://www.linkedin.com/company/fundación-centro-multifuncional-adolfo-kolping" })}
                    </SView>
                    <SHr height={12} />
                </SView>
            </SView>
        );
    }
}
