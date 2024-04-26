import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SLoad, SBuscador } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../especialidad/index'
import Medicos from '../../medico/index'

class ListaEspecialidad extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_sucursal = SNavigation.getParam("keysuc"); //key por navegador
    }
    getEspecialidades() {
        var data = Parent.Actions.getAll(this.props);
        var dataMedicos = Medicos.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        if (!dataMedicos) return <SLoad />;

        return Object.keys(data).map((key) => {
           
            if (!SBuscador.validate(data[key], this.state.find)) {
                return null;
            }
            var isActive = true;
            var data_filtrada = Object.values(dataMedicos).filter(o => o["smmed_cesp"] == key)
            if (data_filtrada.length <= 0) {
                isActive = false;
            }
          
            return <SView col={"xs-12"} center style={{
                opacity: isActive ? 1 : 0.7
            }} >
                <SView disabled={!isActive} onPress={() => {
                    SNavigation.navigate("ficha/horarios", { key: dataMedicos[key].smmed_cmed, keysuc: this.key_sucursal });
                }} col={"xs-12"} row backgroundColor={STheme.color.card} height={52} center style={{ borderRadius: 8 }}>
                    <SView col={"xs-1"}  ><SIcon name={isActive ? "logoLista" : "logoListaGray"} width={26} fill={"#018992"} /></SView>
                    <SView col={"xs-10"} ><SText font={"LondonTwo"} color={isActive ? STheme.color.text : STheme.color.gray} fontSize={17} style={{ paddingLeft: 10 }} style={{ textTransform: "uppercase" , }}>{data[key].smtur_desp}</SText></SView>
                    <SView col={"xs-1"} style={{ textAlign: "right" }} ><SIcon name={"flecha1"} width={33} fill={isActive ? STheme.color.info : STheme.color.gray} style={{ right: 10 }} /></SView>
                </SView>
                <SHr height={15} />
            </SView>
        })
    }
    render() {
        return (
            <SPage title={'Lista Especialidades'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    <SHr height={10} />
                    {this.getEspecialidades()}
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ListaEspecialidad);