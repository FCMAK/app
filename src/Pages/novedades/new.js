import React, { Component } from 'react';
import DPA, { connect } from 'servisofts-page';
import { Parent } from '.';
import { SNavigation, SPopup } from 'servisofts-component';
import Model from '../../Model';

class index extends DPA.new {
    constructor(props) {
        super(props, {
            Parent: Parent,
            excludes: ["key", "fecha_on", "key_usuario", "estado", "url", "params"]
        });
    }
    $allowAccess() {
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "new" })
    }

    $inputs() {
        var inp = super.$inputs();
        inp.inputProps = {
           customStyle: "kolping",

        }
       
        inp.busqueda = {
            label: "Busqueda",
            type: "text",
            defaultValue: "",
        }
        return inp;
    }

    $onSubmit(data) {
        if (data?.busqueda) {
            data.url = "/buscar"
            data.params = { "busqueda": data.busqueda }
        }

        if (!data.tiempo_reinicio) {
            data.tiempo_reinicio = 0;
        }

        if (!data.tiempo_reinicio) {
            data.tiempo_reinicio = 0;
        }

        Parent.model.Action.registro({
            data: data,
            key_usuario: "",
        }).then((resp) => {
            SNavigation.goBack();
        }).catch(e => {
            console.error(e);
        })
    }
}

export default connect(index);