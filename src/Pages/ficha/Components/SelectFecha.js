import React, { Component } from 'react';

import { SDate, SHr, SInput, SNavigation, SPage, SText, STheme, SView, SIcon, SImage } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import Kolping from '../../../Components/Kolping';


export default ({ defaultValue, onChange }) => {
    const date = new SDate(defaultValue, "yyyy-MM-dd");
    const isCurrentDate = date.equalDay(new SDate())
    return <>
        <SView col={"xs-12"} center style={{
            position: 'relative',
            top: 5,
        }}>
            <SView width={220} height={100} center>
                <SImage source={require("../../../Assets/img/boxHeader.png")} width={220} height={100} style={{ position: "absolute" }} />
                {/* <SView col={"xs-12"} height style={{ position: "absolute", }}><SIcon name={"homeBox"} fill={"#01899233"} width={"100%"} height={"100%"} /></SView> */}
                {/* <SHr height={5} /> */}
                <SText font={"LondonTwo"} center color={STheme.color.white} fontSize={15}>{`Seleccione la fecha de su ficha`}</SText>
                {/* <SHr height={14} /> */}
                {/* <SText font={"LondonBetween"} color={STheme.color.white} fontSize={16} width={220}>{`Reserva tu cita con nuestros especialistas!`}</SText> */}
                <SHr height={5} />
                <SView col={"xs-12"} center row>
                    <SView height flex onPress={() => {
                        if (isCurrentDate) {
                            return;
                        }
                        date.addDay(-1);
                        if (onChange) onChange(date.toString("yyyy-MM-dd"))
                    }} center>
                        <SView width={30} height={30}>
                            {isCurrentDate ? null : <SIcon fill={"#fff"} name='Arrow' />}
                        </SView>
                    </SView>
                    <SView width={100} >
                        <SInput disabled customStyle={"kolping"} value={date.toString("yyyy-MM-dd")} onChangeText={onChange} style={{
                            backgroundColor: STheme.color.white,
                            overflow: "hidden",

                            textAlign: "center",
                            // paddingTopt:16,
                            justifyContent: "center",
                            height: 40,
                        }} />
                        <SHr height={10} />
                    </SView>
                    <SView height flex onPress={() => {
                        date.addDay(+1);
                        if (onChange) onChange(date.toString("yyyy-MM-dd"))
                    }} center>
                        <SView width={30} height={30} style={{
                            transform: [{ rotate: "180deg" }]
                        }}>
                            <SIcon name='Arrow' fill={"#fff"} />
                        </SView>
                    </SView>
                </SView>
                {/* <SView style={{
                    position: "absolute",
                    right: -13,
                    bottom: 30,
                }} width={87} height={145}><SIcon name={"Enfermera6"} /></SView> */}
            </SView>
        </SView>

    </>
}
