import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import WhatsApp from '../../../../../Components/WhatsApp';
import servicio_domicilio from '../../servicio_domicilio';
import Params from "../params.json"
import { Container } from '../../../../../Components';
import SSocket from 'servisofts-socket';
import Model from '../../../../../Model';
import DomicilioTitulo from '../Components/Titulo';
import DomicilioDescripcion from '../Components/Descripcion';
import DomicilioHorario from '../Components/Horario';
import DomicilioPromociones from '../Components/Promociones';
import DomicilioBanner from '../Components/Banner';
import DomicilioWhatsApp from '../Components/WhatsApp';
import Contactenos from '../Components/Contactenos';
import servicio_informacion from '../../servicio_informacion';

class Laboratorio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.load_data();
  }

  load_data() {
    SSocket.sendPromise({
      component: "servicio_informacion",
      type: "getByKey",
      key_usuario: Model.usuario.Action.getKey(),
      key: "890",
    }).then(e => {
      this.setState({ informacion: e.data })
    }).catch(e => {
      console.log(e);
    })
  }

  render() {

    var data_informacion = servicio_informacion.Actions.getByKey("laboratorio", this.props);
    if (!data_informacion) return <SView col={"xs-12"} flex center> <SLoad /></SView>;


    return (
      <SPage title={'A domicilio'} >
        <Container>
          <SHr height={20} />
          <SView col={"xs-12"} style={{ padding: 8 }} center >
            <SView col={"xs-12"}>
              <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>{data_informacion.titulo}</SText>
              <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
              <SHr height={10} />
              <SText font={"LondonBetween"} fontSize={15}>{data_informacion.descripcion}</SText>
            </SView>
            <SHr height={20} />
            <SView col={"xs-12"}>
              <SText color={STheme.color.text} font={"LondonTwo"} fontSize={16} >Horario de atención:   </SText>
              <SHr height={8} />
              <SText font={"LondonBetween"} fontSize={15}>{data_informacion.horarios}</SText>
            </SView>
            <SHr height={20} />
            <SView col={"xs-12"} center>
              <SHr height={25} />
            </SView>


            <Contactenos primary onPress={(btn) => {
              var usuario = Model.usuario.Action.getUsuarioLog();
              if (!usuario) {
                SNavigation.navigate("login")
                return;
              } else {
                btn.setLoading(true)
                SSocket.sendPromise({
                  component: "servicio_domicilio",
                  type: "registro",
                  estado: "cargando",
                  key_usuario: Model.usuario.Action.getKey(),
                  data: {
                    tipo: "laboratorio"
                  }
                }).then(e => {
                  // console.log(e);
                  const obj = e.data;
                  var usuario = Model.usuario.Action.getUsuarioLog();
                  var mensaje = `Hola, Mi nombre es ${usuario.Nombres} ${usuario.Apellidos} estoy interesado(a) en el servicio de Laboratorio a domicilio.
                                                    Solicitud #${obj.numero}
                                                    ${Params.url}${obj.numero}/`;
                  WhatsApp.send({ phone: data_informacion.telefono, menssage: mensaje })
                  SNavigation.navigate("domicilio/request", { numero: obj.numero });
                  btn.setLoading(false)
                }).catch(e => {
                  btn.setLoading(false)
                })
              }

            }} ><SView col={"xs-12"} row center><SIcon name='iWhatsApp' height={35} width={35} />
                <SView width={10} />
                <SText
                  font='LondonTwo'
                  style={{
                    color: STheme.color.white,
                  }}
                  fontSize={14}>
                  {"CONTÁCTENOS POR WHATSAPP"}
                </SText>
              </SView>
            </Contactenos>
            <SHr height={30} />
            <DomicilioPromociones key_servicio={"laboratorio"} />
            <SHr height={20} />
            <DomicilioBanner />
            <SHr height={20} />
          </SView>
          {/* </SView> */}
        </Container>
      </SPage >
    );
  }
}
const initStates = (state) => {
  return { state }
};
export default connect(initStates)(Laboratorio);