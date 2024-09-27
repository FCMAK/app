import React, { Component } from 'react';

import { SDate, SHr, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';


export default ({ medico , onPress  }) => {
    const { TitMed, NomMed, turnos } = medico;
    const active = turnos.length > 0;
    const especialidades = {}
    turnos.map((tur) => {
        especialidades[tur.CodEsp] = tur.NomEsp;
    })
    const color = STheme.color.primary
    return < SView col={"xs-12"} padding={8} row
        style={{
            opacity: active ? 1 : 0.5,
            justifyContent: "center",
            alignItems: "center",
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
            <SText bold>{`${TitMed} ${NomMed}`}</SText>
            {/* <SText>Cantida de turnos: {turnos.length}</SText> */}
            <SHr h={4} />
            <SView row>
                {Object.values(especialidades).map((esp) => <SView style={{
                    // padding: ,
                    paddingStart: 4,
                    paddingEnd: 4,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: color,
                    backgroundColor: color + "44",
                }}>
                    <SText fontSize={12} bold>{esp}</SText>
                </SView>)}
            </SView>
        </SView>
    </SView >
}
