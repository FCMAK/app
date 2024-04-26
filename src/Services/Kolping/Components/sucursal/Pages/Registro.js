import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SNavigation, SPage, SText, SView, SLoad } from 'servisofts-component';
import Parent from '../index';
import Kolping from '../../../../../Components/Kolping';
import SSocket from 'servisofts-socket';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    getContent() {
        this.data = {};
        if (this.key) {
            this.data = Parent.Actions.getByKey(this.key, this.props);
            if (!this.data) return <SLoad />
        } else {
            this.data = {};
        }
        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                foto_p: { type: "image", isRequired: false, defaultValue: `${SSocket.api.root}sucursal/${this.key}?time=${new Date().getTime()}`, col: "xs-4 sm-3.5 md-3 lg-2.5 xl-2.5", style: { borderRadius: 8, overflow: 'hidden', width: 130, height: 130, borderWidth: 0 } },
                nombre: { label: "nombre", isRequired: true, defaultValue: this.data["nombre"] },
                descripcion: { label: "descripcion", isRequired: true, defaultValue: this.data["descripcion"] },
                direccion: { label: "direccion", isRequired: true, defaultValue: this.data["direccion"] },
                horario: { label: "horario", isRequired: true, defaultValue: this.data["horario"] },
                telefono_fijo: { label: "# fijo", type: "phone", isRequired: true, defaultValue: this.data["telefono_fijo"] },
                interno: { label: "# Interno",  isRequired: false, defaultValue: this.data["interno"] },
                telefono_wp: { label: "# whatsApp", type: "phone", isRequired: true, defaultValue: this.data["telefono_wp"] },
                telefono_wp: { label: "# whatsApp", type: "phone", isRequired: true, defaultValue: this.data["telefono_wp"] },
                lat: { label: "latitud", isRequired: true, defaultValue: this.data["lat"] },
                lng: { label: "longitud", isRequired: true, defaultValue: this.data["lng"] },
            }}


            onSubmitName={"Guardar"}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({ ...this.data, ...values }, this.props);
                } else {
                    Parent.Actions.registro(values, this.props);
                }
            }}
        />
    }

    render() {
        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
                if (this.form) {
                    this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
                }
                // if (!this.key) {
                //     this.key = reducer.lastRegister.key;
                // }
                reducer.estado = "";
                SNavigation.goBack();
            }
        }

        return (
            <SPage title={'Registro de ' + Parent.component} center>
                <SView height={30}></SView>
                {this.getContent()}
                <SHr />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);