import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';

class AgendaPacientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getCardDoctores({ url, nombre, especialidad, fecha, hora, fichas }) {
        return <SView col={"xs-12"} row height={70} style={{ borderWidth: 1, borderColor: STheme.color.primary, borderRadius: 8 }}
            backgroundColor={STheme.color.card}
            onPress={() => {
                //alert(title + '\n' + texto + '\n' + numero);
                this.props.navigation.navigate(url);
            }} row>
            <SView col={"xs-4"} center height >
                <SView style={{}}>
                    <SText font={"LondonTwo"} color={STheme.color.text} fontSize={15}>{nombre}</SText>
                    <SText font={"LondonBetween"} color={STheme.color.info} fontSize={14}>{especialidad}</SText>
                </SView>
            </SView>
            <SView col={"xs-4"} height center>
                <SView center col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SText color={STheme.color.darkGray} fontSize={12}>{fecha}</SText>
                    <SText color={STheme.color.text} fontSize={16}>{hora}</SText>
                </SView>

            </SView>
            <SView col={"xs-4"} center height>
                <SView center height={37} col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SText color={STheme.color.black} font={"LondonBetween"} fontSize={16}>( {fichas} )</SText>
                </SView>
            </SView>
        </SView>
    }

    getCardPaciente({ url, nombre, img, fecha, hora, ficha }) {
        return <SView col={"xs-12"} row height={50} style={{ borderRadius: 8 }}
            backgroundColor={STheme.color.card}
            onPress={() => {
                //alert(title + '\n' + texto + '\n' + numero);
                this.props.navigation.navigate(url);
            }} row>
            <SView col={"xs-4"} center height>
                <SView center col >
                    <SText color={STheme.color.text} font={"LondonBetween"} fontSize={18}> # {ficha} </SText>
                </SView>
            </SView>
            <SView col={"xs-4"} height center>
                <SView center height={30} col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SText color={STheme.color.darkGray} fontSize={12}>{fecha}</SText>
                    <SText color={STheme.color.text} fontSize={16}>{hora}</SText>
                </SView>
            </SView>
            <SView col={"xs-4"} center height >
                <SView height={30} col={"xs-12"} row center style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SView width={30} height={30} style={{ borderRadius: 20 }}>
                        <SImage src={img} style={{
                            borderRadius: 30,
                            resizeMode: "cover"
                        }} />
                    </SView>
                    <SView width={10}></SView>
                    <SView>
                        <SText font={"LondonBetween"} color={STheme.color.black} fontSize={14}>{nombre}</SText>
                    </SView>
                </SView>
            </SView>

        </SView>
    }
    getVacio() {
        return <SView col={"xs-12"} row height={50} style={{ borderRadius: 8 }}
            backgroundColor={STheme.color.card}
            onPress={() => {
                //alert(title + '\n' + texto + '\n' + numero);
                //this.props.navigation.navigate(url);
            }} row>
            <SView col={"xs-4"} center height>
                <SView center col >
                    <SText color={STheme.color.text} font={"LondonBetween"} fontSize={18}> # 3 </SText>
                </SView>
            </SView>
            <SView col={"xs-4"} height center>
                <SView center height={30} col style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                </SView>
            </SView>
            <SView col={"xs-4"} center height >
                <SView height={30} col={"xs-12"} row center style={{ borderLeftWidth: 2, borderColor: STheme.color.lightGray }}>
                    <SView>
                        <SText font={"LondonBetween"} color={STheme.color.black} fontSize={14}>Bs. 45</SText>
                    </SView>
                    <SView width={10}></SView>
                    <SView>
                        <SIcon name={'IconCartTrue'} fill={STheme.color.info} height={17} width={17} />
                    </SView>
                </SView>
            </SView>

        </SView>
    }
    getAgenda() {
        return <SView col={"xs-12"} center >
            <SHr height={10} />
            <SView col={"xs-12"} >
                {this.getCardDoctores({
                    url: "",
                    nombre: 'Dr.Shah',
                    especialidad: 'Cardiología',
                    fecha: '07/01/2022',
                    hora: '09:00 AM',
                    fichas: '2 / 10'
                })}
            </SView>
        </SView>
    }
    getPacientes() {
        return <SView col={"xs-12"} center >
            <SHr height={10} />
            <SView col={"xs-12"} >
                {this.getCardPaciente({
                    img: require('../../../../../Assets/img/doctor.jpg'),
                    url: "",
                    nombre: 'Juana',
                    fecha: '07/01/2022',
                    hora: '09:00 AM',
                    ficha: '1'
                })}
                <SHr height={10} />
                {this.getCardPaciente({
                    img: require('../../../../../Assets/img/doctor.jpg'),
                    url: "",
                    nombre: 'María',
                    fecha: '07/01/2022',
                    hora: '09:00 AM',
                    ficha: '2'
                })}
                <SHr height={10} />

            </SView>
        </SView>
    }

    render() {
        return (
            <SPage title={'Lista de Pacientes'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <Kolping.KBuscador />
                    {this.getAgenda()}
                    {this.getPacientes()}
                    {this.getVacio()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(AgendaPacientes);