import React, { Component } from 'react';

import { SDate, SHr, SInput, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';


export default ({ defaultValue, onChange }) => {
    return <SView width={100}>
        <SInput type='date' customStyle={"kolping"} defaultValue={defaultValue} onChangeText={onChange} />
    </SView>
}
