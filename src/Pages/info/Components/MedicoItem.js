import React, { Component } from 'react';

import { SDate, SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';



export default ({ medico, onPress }) => {
    const { TitMed, NomMed, turnos } = medico;
    const active = turnos.length > 0;

    // Cambio Ruddy temporal
    if(!active) return true;

    const especialidades = {}
    turnos.map((tur) => {
        especialidades[tur.CodEsp] = tur.NomEsp;
    })
    const codmed = SNavigation.getParam("codmed")
    const color = STheme.color.primary
    // console.log("especialidades", codmed)
    return < SView col={"xs-12"} padding={8} row
        style={{
            opacity: active ? 1 : 0.5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: STheme.color.white,
            borderBottomWidth: 1,
            borderBottomColor: STheme.color.primary,
        }}
        onPress={onPress}
    >
        <SView width={50} height={50} padding={4}>
            <SView style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                backgroundColor: STheme.color.card
            }}>
            </SView>

        </SView>
        <SView flex>
            <SText font='LondonTwo' fontSize={15} >{`${TitMed} ${NomMed}`}</SText>
            {/* <SText>Cantida de turnos: {turnos.length}</SText> */}
            <SHr h={4} />
            <SView row>
                {Object.values(especialidades).map((esp) => <SView style={{
                    // paddingStart: 4,
                    // paddingEnd: 4,
                    // borderRadius: 16,
                    // borderWidth: 1,
                    // borderColor: color,
                    // backgroundColor: color + "44",
                }}>
                    <SText color={STheme.color.info} font='LondonBetween' fontSize={16} >{esp}</SText>
                </SView>)}
            </SView>

        </SView>
        {(!codmed) ? <SView row>
            <SIcon width={11} height={16} name={"arrowR"} />
        </SView> : null}

    </SView >
}
