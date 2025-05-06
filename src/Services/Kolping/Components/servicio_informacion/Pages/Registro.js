import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SNavigation, SPage, SText, SView, SLoad } from 'servisofts-component';
import Parent from '../index';
import SSocket from 'servisofts-socket';
import Model from '../../../../../Model';

class Registro extends Component {
 constructor(props) {
  super(props);
  this.state = {};
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
    titulo: { label: "Titulo", isRequired: true, defaultValue: this.data["titulo"] },
    descripcion: { label: "Descripción", isRequired: true, defaultValue: this.data["descripcion"], height: 80, type: "textArea"},
    horarios: { label: "Horarios", isRequired: true, defaultValue: this.data["horarios"], height: 60, type: "textArea", },
    telefono: { label: "Teléfono", type: "phone", isRequired: true, defaultValue: this.data["telefono"] },
    observacion: { label: "Observación", isRequired: true, defaultValue: this.data["observacion"], height: 60, type: "textArea", },
   }}
   onSubmitName={"Guardar"}
   onSubmit={(values) => {
    if (this.key) {
     Parent.Actions.editar({ ...this.data, ...values }, this.props);
    } else {
     console.log("values", values);
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
    reducer.estado = "";
    SNavigation.goBack();
   }
  }

  return (
   <SPage title={'Registro de servicios información'} center>
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