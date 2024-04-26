import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../medico/index';
import Especialidad_ from '../../especialidad/index';
import SSocket from 'servisofts-socket'

class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.key_doctor = SNavigation.getParam("key"); //key por navegador
        this.key_sucursal = SNavigation.getParam("keysuc"); //key por navegador

        this.dia = SNavigation.getParam("dia");
        this.hora = SNavigation.getParam("hora");
        this.fecha = SNavigation.getParam("fecha");
        this.fecha_final = new SDate(this.fecha + "-" + this.dia, "yyyy-MM-dd");

       
    }
    getContentForm() {
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};
        // }
        var usuario = this.props.state.usuarioReducer.usuarioLog;
        this.usuario = usuario;
        if (!usuario) {
            SNavigation.navigate('login');
            return <SView />
        }

        return <SForm
            center
            ref={(form) => { this.form = form; }}
            col={"xs-11"}
            inputProps={{
                customStyle: "kolping"
            }}
            inputs={{
                nombre: { label: "Nombre Completo", defaultValue: usuario.Nombres + " " + usuario.Apellidos, isRequired: true, icon: <SIcon name={"InputUser"} width={40} height={30} /> },
            }}


        // onSubmitName={"Guardar"}
        // onSubmit={(values) => {
        //     if (this.key) {
        //         Parent.Actions.editar({ ...this.data, ...values }, this.props);
        //     } else {
        //         Parent.Actions.registro(values, this.props);
        //     }
        // }}
        />
    }
    render() {
        var data = Parent.Actions.getAll(this.props);

        var dataDoctor = data[this.key_doctor];
        var data2 = Especialidad_.Actions.getAll(this.props);

        if (!data) return <SLoad />;
        if (!data2) return <SLoad />;
        var dataEspecialidad = data2[dataDoctor.smmed_cesp];

        return (
            <SPage title={'Datos Paciente'} center >
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={30} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >Paciente</SText>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-12"} row center>
                        <SView col={"xs-10"} >
                            <SView center>
                                {this.getContentForm()}
                            </SView>
                        </SView>
                        <SView col={"xs-2"} >
                            <SView center width={50} height={50} backgroundColor={STheme.color.primary} style={{ borderRadius: 30 }}
                                onPress={() => {

                                }} >
                                <SIcon name={'lapiz'} width={30} height={30} />
                            </SView>
                        </SView>
                        <SHr height={30} />
                    </SView>
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                        <SText font={"LondonBetween"} fontSize={20} >Cita Programada</SText>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }}>
                        <SHr height={20} />
                        <SView col={"xs-9"} center>
                            <SView col={"xs-12"}  row style={{borderRightWidth: 1, borderColor: STheme.color.lightGray}}>
                                <SView col={"xs-3"} center height >
                                    <SView width={60} height={60} style={{ borderRadius: 20 }}>
                                        <SImage src={SSocket.api.root + Parent.component + "/" + this.key_doctor} style={{
                                            borderRadius: 30,
                                            resizeMode: "cover"
                                        }} />
                                    </SView>
                                </SView>
                                <SView col={"xs-9"} height >
                                    <SHr height={5} />
                                    <SText font={"LondonTwo"} color={STheme.color.black} fontSize={24}>{dataDoctor?.smmed_dmed}</SText>
                                    <SView col={"xs-12"} row >
                                        <SView col={"xs-12"} >
                                            <SText font={"LondonBetween"} color={STheme.color.info} fontSize={18}>{dataEspecialidad?.smtur_desp}</SText>
                                        </SView>
                                    </SView>
                                    <SHr height={5} />
                                </SView>
                            </SView>
                        </SView>
                        <SView col={"xs-3"} center>
                            <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={30}>{this.dia}</SText>
                            <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={13} style={{textTransform: "uppercase"}}>{this.fecha_final.toString("MONTH")}</SText>
                            <SText font={"LondonTwo"} color={STheme.color.primary} fontSize={14} >{this.hora}</SText>
                        </SView>
                        <SHr height={20} />
                    </SView>


                    <SHr height={25} />


                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <Kolping.KButtom secondary onPress={() => {
                            
                            SNavigation.navigate("ficha/confirmacion", { key: this.key_doctor, fecha: this.fecha.toString("yyyy-MM"), dia: this.dia, hora: this.hora, keysuc: this.key_sucursal })
                        }}  >CONTINUAR</Kolping.KButtom>
                        <SHr height={30} />
                    </SView>

                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Paciente);