import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SBuscador } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'
import sucursal from '../../../../../Services/Kolping/Components/sucursal';

class ListaDoctores extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_e = SNavigation.getParam("key"); //key por navegador
        this.key_sucursal = SNavigation.getParam("keysuc"); //key por navegador
    }
    getCardDoctores({ img, url, nombre, especialidad, centro, key, keysuc }) {
        return <SView col={"xs-12"} row height={100} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }} onPress={() => {
            //alert(title + '\n' + texto + '\n' + numero);
            this.props.navigation.navigate(url, { key: key , keysuc: keysuc});
        }}>
            <SView col={"xs-3"} center height >
                <SView width={60} height={60} style={{ borderRadius: 20 }}>
                    <SImage src={img} style={{
                        borderRadius: 30,
                        resizeMode: "cover"
                    }} />
                </SView>
            </SView>
            <SView col={"xs-8"} height >
                <SHr height={5} />
                <SText font={"LondonTwo"} color={STheme.color.text} fontSize={20}>{nombre}</SText>
                <SView col={"xs-12"} row >
                    <SView col={"xs-12"} >
                        <SText font={"LondonBetween"} color={STheme.color.info} fontSize={18}>{especialidad}</SText>
                    </SView>
                </SView>
                <SHr height={5} />
                <SView col={"xs-12"} row center>
                    <SView col={"xs-12"} >
                        <SText font={"LondonMM"} fontSize={16} >{centro}</SText>
                    </SView>
                </SView>
            </SView>
            <SView col={"xs-1"} center height>
                <SIcon name={"flecha2"} width={12} fill={"transparent"} />
            </SView>
        </SView>
    }
    getDoctores() {
        var data = Parent.Actions.getAll(this.props);
        var dataEspecial = Especialidad_.Actions.getAll(this.props);
        if (!dataEspecial) return <SLoad />;
        if (!data) return <SLoad />;
        //alert(this.key_e)
        var sucursales = sucursal.Actions.getAll(this.props);
        if (!sucursales) return <SLoad />
        return Object.keys(data).map((key) => {
            var keyEspecialidad = data[key].smmed_cesp
            var especialidad = dataEspecial[keyEspecialidad];
            if (this.key_e) {
                if (this.key_e != keyEspecialidad) return null
            }
            var obj = data[key];
            obj["especialidad"] = especialidad;
            obj["sucursal"] = sucursales[this.key_sucursal].nombre;
            if (!SBuscador.validate(obj, this.state.find)) {
                return null;
            }
            return <SView col={"xs-12"} center >
                <SView col={"xs-12"} >
                    {this.getCardDoctores({
                        // img: require('../Assets/img/ts1.jpg'),
                        //img: require('../../../../../Assets/img/doctor.jpg'),
                        img: (SSocket.api.root + Parent.component + "/" + key),
                        url: "ficha/horarios",
                        nombre: data[key].smmed_dmed,
                        especialidad: especialidad?.smtur_desp, //? si no existe especialidad retorna null
                        centro: obj.sucursal,
                        key: key,
                        keysuc: this.key_sucursal
                    })}
                    <SHr height={10} />
                </SView>
            </SView>
        })
    }

    render() {
        return (
            <SPage title={'Lista de Médicos'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    {this.getDoctores()}
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ListaDoctores);