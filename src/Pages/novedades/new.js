import React, { Component } from 'react';
import DPA, { connect } from 'servisofts-page';
import { Parent } from '.';
import { SNavigation, SPopup, STheme } from 'servisofts-component';
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
        // inp.inputProps = {
        //    customStyle: "kolping",

        // }
        inp.style = {
            borderWith: 1,
            borderColor: STheme.color.black,
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

        console.log("dataRegister", data)

        Parent.model.Action.registro({
            data: data,
            key_usuario: "",
        }).then((resp) => {
            this.$submitFile(resp.data.key);
            SNavigation.goBack();
        }).catch(e => {
            console.error(e);
        })

    }
}

export default connect(index);