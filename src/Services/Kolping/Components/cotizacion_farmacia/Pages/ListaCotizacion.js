import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SDate, SHr, SIcon, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Parent from '../index';
import SSocket from 'servisofts-socket';
import Kolping from '../../../../../Components/Kolping';

class ListaUsuario extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	getEstadoColor(obj) {
		if(!obj.monto) return "#DAA047"
		return "#018992"
		switch (tipo) {
			case 1:
				return "#DAA047";
			case 2:
				return "#018992";
			default:
				return "#DAA047";
		}
	}

	getEstadoTexto(obj) {
		if(!obj.monto) return "espera"
		return "aceptada"
		switch (tipo) {
			case 1:
				return "espera";
			case 2:
				return "aceptada";
			default:
				return "none";
		}
	}

	getListaAlvaro() {
		var data = Parent.Actions.getAll(this.props);
		if (!data) return <SLoad />;
		var misDatas = Object.values(data).filter(itm => itm.key_usuario == this.props.state.usuarioReducer.usuarioLog.key)
		if (misDatas.length <= 0) return this.getVacio();
		return misDatas.map((obj) => {
			return (
				this.getLista(obj)
				// <SText> {JSON.stringify(data[key])} </SText>
			)
		})
	}




	getLista(obj) {


		return (<>
			<SView col={'xs-11 md-8 lg-6 xl-4'} row center backgroundColor={'#EEEEEE'} style={{ borderRadius: 8, overflow: 'hidden' }}  >

				{/* <SView style={{
					borderBottomStartRadius: 7,
					borderTopStartRadius: 7,
					backgroundColor: "red",
					width: 80, height: '100%'
				}} row center > */}

				<SView width={90} height style={{ backgroundColor: STheme.color.primary, borderRadius: 7, }} row center >

					<SImage src={SSocket.api.root + "cotizacion_farmacia" + "/" + obj.key} style={{ resizeMode: "cover" }} />
				</SView>

				{/* <SView width={8} /> */}

				<SView flex row center style={{ padding: 4, }} >
					<SView col={"xs-12"} row style={{ justifyContent: 'flex-start' }} >
						<SText col={"xs-12"} fontSize={16} font={"LondonTwo"} color={'#000000'} Bold >COTIZACIÓN: {obj.monto} Bs</SText>
						<SText col={"xs-12"} fontSize={12} font={"LondonTwo"} color={'#666666'} >GLOSA:  {obj.observacion} Nro: {obj.numero}</SText>
						<SText col={"xs-12"} fontSize={12} font={"LondonTwo"} color={'#666666'} >FECHA:  {new SDate(obj.fecha_on).toString("yyyy MON, dd hh:mm")} </SText>
					</SView>
					<SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }} center>
						<SView style={{ borderRadius: 50, width: 12, height: 12 }} backgroundColor={this.getEstadoColor(obj)} />
						<SText fontSize={12} font={"LondonTwo"} color={'#018992'} > Cotización {this.getEstadoTexto(obj)} </SText>
					</SView>
				</SView>

				{/* <SView col={"xs-12"} height={4} /> */}

			</SView>

			<SView col={'xs-12'} height={18} />

		</>
		);
	}

	getPrueba() {
		return (<>
			<SView col={'xs-11 md-8 lg-6 xl-4'} row center backgroundColor={'#EEEEEE'} style={{ borderRadius: 8, }}  >
				<SView width={90} height style={{ backgroundColor: STheme.color.primary, borderRadius: 7, }} row center >
					{/* <SImage src={SSocket.api.root + "cotizacion_farmacia" + "/" + obj.key} style={{ resizeMode: "cover" }} /> */}
				</SView>
				<SView width={8} />
				<SView flex style={{ backgroundColor: "#9d9", }} center >
					<SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>On 12 October 2018, Saleh was released, under the figure of exile (despite being a figure that does not exist in the laws of the Bolivarian Republic of Venezuela), supposedly to prevent him from committing suicide. He arrived at the Madrid Barajas Airport on 13 October at 10:15 in the morning</SText>
				</SView>
			</SView>
			<SView col={'xs-12'} height={18} />
			<SView col={'xs-11 md-8 lg-6 xl-4'} row center backgroundColor={'#EEEEEE'} style={{ borderRadius: 8, }}  >
				<SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>On 12  , und g</SText>
			</SView>
			<SView col={'xs-12'} height={18} />
			<SView col={'xs-11 md-8 lg-6 xl-4'} row center backgroundColor={'#EEEEEE'} style={{ borderRadius: 8, }}  >
				<SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>On 12 October 2018, Saleh was released, under the figure of exile (despite being a figure that does not exist in the laws of the Bolivarian Republic of Venezuela), supposedly to prevent him from committing suicide. He arrived at the Madrid Barajas Airport on 13 October at 10:15 in the morning</SText>
			</SView>
		</>
		);
	}

	getVacio() {
		return (<SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row  >
			<SHr height={20} />
			<SView col={"xs-12"} style={{ padding: 8 }} center  >
				<SView col={"xs-12"} center  >
					<SText font={"LondonMM"} bold center fontSize={24} color={STheme.color.text}>No hay cotizacion</SText>
					<SHr height={30} />
					<SText center fontSize={18} color={'#666666'}>Añada una cotización:</SText>
					<SText center fontSize={18} color={'#666666'}>¡El Centro Médico está siempre a mano!</SText>
				</SView>
				<SHr height={70} />
				<SView col={"xs-12"} center height={300}>
					<SIcon name={"Enfermera19"} />
				</SView>
				<SHr height={70} />
				<Kolping.KButtom primary onPress={() => {
					SNavigation.navigate("cotizacion_farmacia/registro");
				}}>COTIZA TU RECETA</Kolping.KButtom>
				<SHr height={30} />
			</SView>
		</SView>);
	}

	render() {
		return (
			<SPage title={'Lista contización'}>

				<SView col={'xs-12'} height={50} />
				<SView col={'xs-12'} center >

					{/* {(!this.state.foto) ? this.getVacio() : null} */}

					{this.getListaAlvaro()}
					{/* {this.getPrueba()} */}


					{/* {this.getLista(Parent.g, 'glosa', 'fecha', 'aceptada')} */}
					{/* {this.getLista('12', 'Prueba detallada Nro 58', '02/08/2021', 'aceptada')}
					{this.getLista('12', 'Prueba detallada Nro 58', '02/08/2021', 'en espera')}
					{this.getLista('12', 'Prueba detallada Nro 58', '02/08/2021', 'aceptada')} */}
				</SView>
			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(ListaUsuario);