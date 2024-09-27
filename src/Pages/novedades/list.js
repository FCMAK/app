import React, { Component } from 'react';
import DPA, { connect } from 'servisofts-page';
import { Parent } from "."
import Model from '../../Model';
import {SView, SImage, SText, SIcon, SNavigation, SPopup} from 'servisofts-component';
import SSocket from 'servisofts-socket';

class index extends DPA.list {
    constructor(props) {
        super(props, {
            Parent: Parent,
            excludes: ["key", "fecha_on", "key_usuario", "key_servicio", "estado"],
            // item: Item,

        });
    }
    $allowNew() {
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "new" });
    }
    onNew() {
        super.onNew({ key_empresa: this.empresa?.key })
    }

    $allowTable() {
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "table" });
    }
    $allowAccess() {
        return Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "ver" });
    }
    $filter(data) {
        return data.estado != 0
    }
    $getData() {
        // this.empresa = Model.empresa.Action.getSelect();
        // if (!this.empresa) return null;
        return Parent.model.Action.getAll();
    }

    $order() {
        return [{ key: "fecha", order: "desc" }]
    }

    onEdit(obj) {
        SNavigation.navigate(Parent.path + "/edit", { pk: obj.key })
    }

    onDelete(obj) {
        if (this.deletePermiso) {
            SPopup.confirm({
                title: "Eliminar Popup Inicio",
                message: "¿Seguro que desea remover Banner Slider Tapeke?",
                onPress: () => {
                    Parent.model.Action.editar({
                        data: {
                            // ...obj,  
                            key: obj.key,
                            estado: 0
                        },
                        key_usuario: Model.usuario.Action.getKey()
                    })
                }
            })
        } else {
            SPopup.alert("No tiene permisos para eliminar el Popup Inicio")
        }
    }

    $item(obj) {
        this.deletePermiso = Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "delete" });
        this.editPermiso = Model.usuarioPage.Action.getPermiso({ url: Parent.path, permiso: "edit" });

        return <>
            <SView card>
                <SView padding={10}>
                    <SView width={400} height={200} center
                        style={{
                            justifyContent: "flex-evenly",
                        }}
                    >
                        <SImage src={Parent.model._get_image_download_path(SSocket.api, obj.key)} />
                    </SView>

                    <SView>
                        <SView row>
                            <SView flex>
                                <SText>Titulo: {obj.titulo}</SText>
                                <SText>Descripción: {obj.descripcion}</SText>
                                <SText>Expira el: {obj.fecha}</SText>
                                <SText>URL: {obj.url ? obj.url : "No se le configuro ninguna busqueda"}</SText>
                                <SText>Búsqueda: {obj.params?.busqueda ? obj.params.busqueda : "No se le configuro ninguna busqueda"}</SText>
                            </SView>

                            <SView row>
                                <SView style={{ marginRight: "10px" }} onPress={() => this.onEdit(obj)}>
                                    {this.editPermiso ? <SIcon name={"Edit"} height={30} width={30}></SIcon> : <SView />}
                                </SView>

                                <SView onPress={() => this.onDelete(obj)}>
                                    {this.deletePermiso ? <SIcon name={"Delete"} height={30} width={30}></SIcon> : <SView />}
                                </SView>
                            </SView>
                        </SView>

                    </SView>
                </SView>
            </SView>
        </>
    }
}
export default connect(index);