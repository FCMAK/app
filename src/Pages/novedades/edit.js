import React, { Component } from 'react';
import DPA, { connect } from 'servisofts-page';
import { Parent } from '.';
import { SNavigation, SPopup } from 'servisofts-component';
import Model from '../../Model';

class index extends DPA.edit {
    constructor(props) {
        super(props, {
            Parent: Parent,
            excludes: ["key", "fecha_on", "key_usuario", "estado", "url"]
        });
    }
    $allowAccess() {
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "edit" })
    }
    $getData() {
        return Parent.model.Action.getByKey(this.pk);
    }

    $inputs() {
        var inp = super.$inputs();
        // inp.inputProps = {
        //     customStyle: "kolping",
        //  }
        inp["params"]
        inp.busqueda = {
            label: "Busqueda",
            type: "text",
            required: false,
        }

        if (inp["params"]?.defaultValue) {
            let params = inp["params"]?.defaultValue;
            inp["busqueda"].defaultValue = params?.busqueda;
        }

        delete inp["params"];
        return inp;
    }

    $onSubmit(data) {
        if (data.busqueda) {
            data.url = "/buscar"
            data.params = { "busqueda": data.busqueda }
        } else {
            data.url = ""
            data.params = {}
        }

        Parent.model.Action.editar({
            data: {
                ...this.data,
                ...data
            },
            key_usuario: ""
        }).then((resp) => {
            SNavigation.goBack();
        }).catch(e => {
            console.error(e);

        })
    }
}

export default connect(index);