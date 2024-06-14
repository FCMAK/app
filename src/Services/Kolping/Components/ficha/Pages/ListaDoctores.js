import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SBuscador } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'
import sucursal from '../../../../../Services/Kolping/Components/sucursal';
import Model from '../../../../../Model';

class ListaDoctores extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.codesp = SNavigation.getParam("codesp") //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc").toString(); //key por navegador
    }

    componentDidMount() {
        if (!this.codesp) {
            // SNavigation.navigate("ficha/listaEspecialidad", { nrosuc: this.nrosuc });
            this.codesp = "999";
        }
        SSocket.sendPromise({
            component: "medico",
            type: "getAll",
            version: Parent.version,
            estado: "cargando",
            nrosuc: this.nrosuc,
            //nrosuc: "999",
            codesp: this.codesp,
            //codesp: "999",
            // key_usuario: props.state.usuarioReducer.usuarioLog.key,
        }).then(e => {
            if (!e.data) return;
            this.setState({ data: e.data })
        }).catch(e => {
            console.error(e)
        })

        SSocket.sendPromise({
            component: "especialidad",
            type: "getAll",
            version: Especialidad_.version,
            estado: "cargando",
            nrosuc: this.nrosuc,
            //nrosuc: "999",
            // key_usuario: props.state.usuarioReducer.usuarioLog.key,
        }).then(e => {
            if (!e.data) return;
            this.setState({ dataEspecialidad: e.data })
        }).catch(e => {
            console.error(e)
        })

    }

    getCardDoctores({ img, url, nombre, especialidad, centro, key, keysuc }) {
        return <SView col={"xs-12"} row height={100} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }} onPress={() => {
            //alert(title + '\n' + texto + '\n' + numero);
            // console.log( { codmed: key, nrosuc: this.nrosuc, codesp: this.codesp })

            this.props.navigation.navigate(url, { codmed: key, nrosuc: this.nrosuc, codesp: this.codesp });
        }}>
            <SView col={"xs-3"} center height >
                <SView width={60} height={60} style={{ borderRadius: 40, backgroundColor: STheme.color.card, borderWidth: 1, borderColor: STheme.color.lightGray }}>
                    <SImage src={img} style={{
                        borderRadius: 30,
                        resizeMode: "cover"
                    }} />
                </SView>
            </SView>
            <SView col={"xs-8"} height >
                <SHr height={5} />
                <SText font={"LondonTwo"} color={STheme.color.text} fontSize={17}>{nombre}</SText>
                <SView col={"xs-12"} row >
                    <SView col={"xs-12"} >
                        <SText font={"LondonBetween"} color={STheme.color.info} fontSize={15}>{especialidad}</SText>
                    </SView>
                </SView>
                <SHr height={5} />
                <SView col={"xs-12"} row center>
                    <SView col={"xs-12"} >
                        <SText font={"LondonMM"} fontSize={14} >{centro}</SText>
                    </SView>
                </SView>
            </SView>
            <SView col={"xs-1"} center height>
                <SIcon name={"flecha2"} width={12} fill={"transparent"} />
            </SView>
        </SView>
    }
    getDoctores() {
        // var data = Parent.Actions.getAll(this.props, { codesp: this.codesp, nrosuc: this.nrosuc });

        // var dataEspecial = Especialidad_.Actions.getAll(this.props,);
        // if (!dataEspecial) return <SLoad />;

        if (!this.state.data) return <SLoad />;
        if (!this.state.dataEspecialidad) return <SLoad />;
        var data = this.state.data;

        // if (!data) return <SLoad />;
        //alert(this.key_e)
        var dataEspecial = this.state.dataEspecialidad;
        var dataEspecialOk = dataEspecial.filter(e => e.CodEsp == this.codesp);
        var objEspecialidad = dataEspecialOk[0];



        var sucursales = sucursal.Actions.getAll(this.props);
        if (!sucursales) return <SLoad />
        return Object.keys(data).map((key) => {
            var keyEspecialidad = data[key].smmed_cesp
            var CodMed = data[key].CodMed;
            // var especialidad = dataEspecial[keyEspecialidad];
            if (this.key_e) {
                if (this.key_e != keyEspecialidad) return null
            }
            var obj = data[key];
            // obj["especialidad"] = especialidad;
            obj["sucursal"] = sucursales[this.nrosuc].NomSuc;
            if (!SBuscador.validate(obj, this.state.find)) {
                return null;
            }
            return <SView col={"xs-12"} center >
                <SView col={"xs-12"} >
                    {this.getCardDoctores({
                        // img: require('../Assets/img/ts1.jpg'),
                        //img: require('../../../../../Assets/img/doctor.jpg'),
                        img: (SSocket.api.root + Parent.component + "/" + key),
                        // url: "ficha/horarios",
                        url: "servicio/lista",
                        nombre: (data[key].TitMed != "") ? data[key].TitMed + " " + data[key].NomMed : data[key].NomMed,
                        // especialidad: especialidad?.smtur_desp, //? si no existe especialidad retorna null
                        especialidad: objEspecialidad?.NomEsp,
                        //centro: obj.sucursal,
                        centro: data[key].sucursal,
                        key: CodMed,
                        keysuc: this.key_sucursal
                    })}
                    <SHr height={10} />
                </SView>
            </SView>
        })
    }

    render() {
        return (
            <SPage title={'Lista de Médicos'} >
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                        <Kolping.KBuscador onChangeText={(text) => {
                            this.setState({
                                find: text
                            })
                        }} />
                        {this.getDoctores()}
                        <SHr height={40} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ListaDoctores);