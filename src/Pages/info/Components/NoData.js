import React, { Component } from 'react';

import { SDate, SHr, SInput, SNavigation, SPage, SText, STheme, SView, SIcon, SImage } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import Kolping from '../../../Components/Kolping';


export default ({ mensaje }) => {
    return <>
        <SView col={"xs-12"} center >
            <SHr height={45} />
            <SIcon name={"noData"} width={150} height={174} fill={STheme.color.info} />
            <SHr height={25} />
            <SView col={"xs-11 sm-6"} center card padding={15}>
                <SText fontSize={18} color={STheme.color.text} center font='LondonMM' >{mensaje}</SText>
            </SView>
        </SView>
    </>
}
