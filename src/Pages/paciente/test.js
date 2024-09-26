import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SForm, SPage, SThread } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import { Container } from '../../Components';
import Model from '../../Model';

export default class root extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <SPage title={"Paciente"}>
            <Container>
                <SForm
                    inputProps={{
                        customStyle: "kolping",
                        color: "#000",
                    }}
                    ref={(ref) => {
                        new SThread(200, "focus", true).start(() => {
                            if (ref) ref.focus("ci")
                        })
                    }}
                    inputs={{
                        "ci": { label: "ci", customStyle: "calistenia" },
                    }}
                    onSubmitName={"PROBAR"}
                    onSubmit={(t) => {
                        const obj = {
                            "GenPer": "M",
                            "CodPer": 215650,
                            "FecNac": "1989-04-10T00:00:00",
                            "NomCom": "Paz Demiquel Roy Ruddy",
                            "NroDoc": "6340999",
                            "TipDoc": "1",

                        }
                        const numSuc = "0";
                        SSocket.sendPromise({
                            component: "ficha",
                            type: "registro",
                            ci:"6392496"

                        })
                        // SSocket.sendPromise({
                        //     component: "paciente",
                        //     type: "getByCi",
                        //     key_usuario: Model.usuario.Action.getKey(),
                        //     ci: t.ci
                        // }).then(e => {
                        //     if (e.data) {
                        //         console.log("EXITO", e.data)
                        //     } else {
                        //         console.log("No se encontro paciente con este CI")
                        //     }
                        // }).catch(e => {

                        // })
                    }}
                />
            </Container>
        </SPage>
    }
}
