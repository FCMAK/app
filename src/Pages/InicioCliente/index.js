import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SPage, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Kolping from '../../Components/Kolping';

class InicioCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getCard() {
        return <SView col={"xs-12"} center style={{
            position: 'absolute',
            top: 80
        }}>
            <SView width={300} height={185}>
                <SView col={"xs-12"} height style={{ position: "absolute", }}>
                    <SIcon name={"homeBox"} fill={"#01899233"} width={"100%"} />
                </SView>
                <SView height={150} style={{
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingTop: 24,
                }}>
                    <SText font={"LondonTwo"} fontSize={18}>{`¿Necesitas un Doctor?`}</SText>
                    <SHr height={14} />
                    <SText font={"LondonBetween"} fontSize={16} width={160}>{`Reserva tu cita con nuestros especialistas!`}</SText>
                    <SHr height={16} />
                    <SView col={"xs-12"} center style={{
                        marginTop: -5,
                    }}>
                        <Kolping.KButtom secondary small >Reservar</Kolping.KButtom>
                    </SView>
                </SView>
                <SView style={{
                    position: "absolute",
                    right: -16,
                    top: -48,
                }} width={115} height={200}>
                    <SIcon name={"Enfermera7"} />
                </SView>
            </SView>
        </SView>
    }

    getCardServices({ svg, title }) {
        return <SView col={"xs-4"} center>
            <SView center style={{ height: 100, width: 146 }} onPress={() => {
                if (title == 'Enfermería') {
                    SNavigation.navigate('Servicios');
                } else {
                    alert(title);
                }
            }}>
                <SIcon name={svg} fill={"#01899233"} width={80} />
            </SView>
            <SView center style={{ textAlign: "center", height: 20 }}>
                <SText font={"LondonMM"} fontSize={18} color={"#000"} >{title}</SText>
            </SView>
        </SView>
    }
    getServices() {
        return <SView col={"xs-12"} center style={{
            top: 150
        }}>
            <SView col={"xs-11"}>
                <SHr height={14} />
                <SText font={"LondonMM"} fontSize={18} color={"#000"}>{'Nuestros servicios!'}</SText>
            </SView>
            <SHr height={20} />
            <SView col={"xs-11"} row >
                {this.getCardServices({ svg: 'sfarmacia', title: 'Farmacia' })}
                {this.getCardServices({ svg: 'soptica', title: 'Óptica' })}
                {this.getCardServices({ svg: 'slaboratorio', title: 'Laboratorio' })}
            </SView>
            <SHr height={30} />
            <SView col={"xs-11"} row >
                {this.getCardServices({ svg: 'senfermeria', title: 'Enfermería' })}
                {this.getCardServices({ svg: 'simagenologia', title: 'Imagenología y electromedicina' })}
                {this.getCardServices({ svg: 'scontrol', title: 'Control prenatal' })}
            </SView>
            <SHr height={30} />
            <SView col={"xs-11"} row >
                {this.getCardServices({ svg: 'svacunacion', title: 'Vacunación' })}
                {this.getCardServices({ svg: 'scirugias', title: 'Cirugías oftalmológicas' })}
                {this.getCardServices({ svg: 'splanificacion', title: 'Planificación familiar' })}
            </SView>
            <SHr height={30} />
            <SView col={"xs-8"} center row >
                {this.getCardServices({ svg: 'sbiopsias', title: 'Biopsias' })}
                <SView width={50} />
                {this.getCardServices({ svg: 'sservicios', title: 'Servicios a domicilio' })}
            </SView>
            <SHr height={50} />
            <SView col={"xs-10"} center>
                <SIcon name={"Logo"} width={300} />
            </SView>
            <SHr height={30} />
        </SView>
    }

    getCardSucursales({ id, svg, title, texto, numero }) {
        return <SView col={"xs-12"} row height={100} backgroundColor={"#EEEEEE"} style={{ borderRadius: 24, }} onPress={() => {
            alert(title);
        }}>
            <SView col={"xs-3"} center >
                <SIcon name={svg} fill={"#01899233"} width={60} />
            </SView>
            <SView col={"xs-8"} style={{ top: 10 }}>
                <SText font={"LondonMM"} fontSize={18} color={"#000"}>{title}</SText>
                <SHr height={5} />
                <SView col={"xs-12"} row>
                    <SView col={"xs-1"} center>
                        <SIcon name={"map"} fill={"#01899233"} width={10} />
                    </SView>
                    <SView col={"xs-10"} style={{ left: 10 }}>
                        <SText font={"LondonMM"} fontSize={12} color={"#000"}>{texto}</SText>
                    </SView>
                </SView>
                <SHr height={5} />
                <SView col={"xs-12"} row>
                    <SView col={"xs-1"} center>
                        <SIcon name={"cellphone"} fill={"#01899233"} width={10} />
                    </SView>
                    <SView col={"xs-10"} style={{ left: 10 }}>
                        <SText font={"LondonBetween"} fontSize={14} color={STheme.color.info}>{numero}</SText>
                    </SView>
                </SView>
            </SView>
            <SView col={"xs-1"} center>
                <SIcon name={"arrowRight"} fill={"#eeeeee"} width={30} />
            </SView>
        </SView>
    }
    getSucursales() {
        return <SView col={"xs-12"} center style={{
            top: 150
        }}>
            <SView col={"xs-11"}>
                <SHr height={14} />
                <SText font={"LondonMM"} fontSize={18} color={"#000"}>{'Visita nuestro centro médico'}</SText>
            </SView>
            <SHr height={20} />
            <SView col={"xs-11"} >
                {this.getCardSucursales({
                    svg: "sservicios",
                    title: 'Kolping "PARAISO"',
                    texto: 'Barrio El Paraiso Av. Bernabe Sosa esq. Luis Lavadenz entre 1er y 2ndo anillo',
                    numero: '346-9946'
                })}
                <SHr height={20} />
                {this.getCardSucursales({
                    svg: "sservicios",
                    title: 'Kolping "LOS CHACOS"',
                    texto: 'Barrio El Paraiso Av. Bernabe Sosa esq. Luis Lavadenz entre 1er y 2ndo anillo',
                    numero: '346-9946'
                })}
                <SHr height={20} />
                {this.getCardSucursales({
                    svg: "sservicios",
                    title: 'Kolping "15 DE DICIEMBRE"',
                    texto: 'Barrio El Paraiso Av. Bernabe Sosa esq. Luis Lavadenz entre 1er y 2ndo anillo',
                    numero: '346-9946'
                })}

                <SHr height={35} />
            </SView>
        </SView>
    }

    getContactanos() {
        return <SView col={"xs-12"} center style={{
            top: 150,
        }}>
            <SView col={"xs-11"} center>
                <SHr height={14} />
                <SText font={"Dancing Script"} fontSize={16} color={"#018992"} style={{
                    fontStyle: "italic",
                    fontWeight: "bold",
                    textAlign: "center"
                }}>
                    {'«Cuando se trata de hacer el bien, el hombre debe ser semejante a Dios o por lo menos tratar de serlo.»\n\(P.B. Adolfo Kolping)'}
                </SText>
                <SHr height={20} />
                <SView>
                    <Kolping.KButtom primary small>Contáctanos</Kolping.KButtom>
                </SView>
                <SHr height={20} />
            </SView>
        </SView>
    }

    getCardTrabajoSocial({ img, title, description }) {
        return <SView backgroundColor={"#EEEEEE"} height={200} width={150} style={{
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "#eeeeee",
        }}>
            <SView center style={{ height: 100, width: 146 }}>
                <SImage src={img} style={{
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                }} />
            </SView>
            <SView center backgroundColor={"#fff"} style={{ height: 66 }}>
                <SText font={"LondonMM"} style={{ padding: 3, }} fontSize={14} color={STheme.color.primary}>{title}</SText>
            </SView>
            <SView center style={{ height: 20 }} onPress={() => {
                alert(title);
            }}>
                <SText font={"LondonMM"} fontSize={14} textDecorationLine={"underline"} color={STheme.color.info}>{description}</SText>
            </SView>
        </SView>
    }
    getTrabajoSocial() {
        return <SView col={"xs-12"} center style={{
            top: 150,
        }}>
            <SView col={"xs-11"}>
                <SHr height={15} />
                <SText font={"LondonMM"} fontSize={18} color={"#000"}>{'Trabajo social'}</SText>
                <SHr height={15} />
            </SView>
            <SView col={"xs-11"} row>
                {this.getCardTrabajoSocial({ img: require('./ts2.jpg'), title: 'Campaña “Atención médica y Cirugías oftalmológicas”', description: 'Leer mas >' })}
                <SView width={10} />
                {this.getCardTrabajoSocial({ img: require('./ts1.jpg'), title: 'Campaña “Veo Veo”', description: 'Leer mas >' })}
            </SView>
            <SHr height={25} />
        </SView >
    }

    getLogo() {
        return <SView col={"xs-12"} center style={{
            top: 150,
        }}>
            <SHr height={25} />
            <SView col={"xs-11"} center>
                <SIcon name={"tuvidaesmejor"} fill={"#eeeeee"} width={300} />
            </SView>
            <SHr height={25} />
        </SView>
    }

    getCardFooter({ svg }) {
        return <SView col={"xs-1"} style={{ margin: 7, }} onPress={() => {
            alert(svg);
        }}>
            <SIcon name={svg} fill={"#fff"} width={20} height={20} />
        </SView>
    }
    getFooter() {
        return <SView col={"xs-12"} style={{
            top: 150,
        }}>
            <SView col={"xs-12"} >
                <SHr height={25} />
                <SView style={{ width: "100%" }} height={200}>
                    <SImage src={require('./Carrusel.png')} />
                </SView>
                <SView col={"xs-12"} row height={70} backgroundColor={"#000"} center>
                    <SView col={"xs-7"} row center>
                        <SIcon name={"logowhite"} fill={"#fff"} width={160} height={40} style={{}} />
                    </SView>
                    <SView col={"xs-5"} center row>
                        {this.getCardFooter({ svg: "facebook" })}
                        {this.getCardFooter({ svg: "instagram" })}
                        {this.getCardFooter({ svg: "tiktok" })}
                        {this.getCardFooter({ svg: "youtube" })}
                        {this.getCardFooter({ svg: "linkedin" })}
                    </SView>
                </SView>
            </SView>
        </SView>
    }

    render() {
        return (
            <SPage hidden>
                {this.getCard()}
                {this.getServices()}
                {this.getSucursales()}
                {this.getContactanos()}
                {this.getTrabajoSocial()}
                {this.getLogo()}
                {this.getFooter()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(InicioCliente);