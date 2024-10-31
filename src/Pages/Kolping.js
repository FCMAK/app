import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView } from 'servisofts-component';
import { WebView } from 'react-native';
import { Container } from '../Components';
class Kolping extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SPage title={'Sobre Kolping'} >
                <Container>
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ padding: 8 }}  >
                        <SView col={"xs-12"} row>
                            <SIcon name={"logoLista"} width={14} />
                            <SView width={10} />
                            <SView flex>
                                <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>Centro Multifuncional Adolfo Kolping</SText>
                            </SView>
                        </SView>
                        <SView col={"xs-12"} height={5} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}></SView>
                        <SHr height={30} />
                        <SView col={"xs-12"} center backgroundColor={"#01899220"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                            <SView col={"xs-11"} >
                                <SHr height={15} />
                                <SView col={"xs-12"} row>
                                    <SView col={"xs-10"}>
                                        <SText font={"LondonTwo"} fontSize={16}>QUIÉNES SOMOS </SText>
                                    </SView>
                                </SView>
                                <SHr height={10} />
                                <SText font={"LondonMM"} fontSize={16}>La Fundación Centro Multifuncional Adolfo Kolping es una fundación nacional sin ánimo de lucro. La cual tiene sus raíces espirituales en la voluntad y la obra del sacerdote católico y reformador social Adolfo Kolping (1813-1865), cuyos principios y objetivos comparte.</SText>
                                <SHr height={10} />
                                <SText font={"LondonMM"} fontSize={16}>Brindamos servicios integrales de salud en nuestros centros médicos.</SText>
                                <SHr height={10} />
                                <SText font={"LondonMM"} fontSize={16}>Iniciamos nuestras actividades en el año 1989, y desde entonces tenemos el compromiso de brindar servicios de calidad con profesionalismo, ética y responsabilidad a un costo accesible a toda la población. Trabajamos con el objetivo de aportar un mundo más justo y poder dar a las personas la posibilidad de una vida digna a partir de sus propias fuerzas.</SText>
                                <SHr height={15} />
                            </SView>
                        </SView>
                        <SHr height={30} />

                        <SView col={"xs-12"} center backgroundColor={"#DE573820"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                            <SView col={"xs-11"} >
                                <SHr height={15} />
                                <SView col={"xs-12"} row>
                                    <SView col={"xs-10"}>
                                        <SText font={"LondonTwo"} fontSize={16}>MISIÓN </SText>
                                    </SView>
                                </SView>
                                <SHr height={10} />
                                <SText font={"LondonMM"} fontSize={16}>“Somos una Fundación auto sostenible con raíces católicas, comprometida con el bienestar social de toda la población, brindando servicios accesibles en áreas de salud, capacitación y hospedaje, con ética y calidad en todos los procesos, innovando en tecnologías de gestión”. </SText>
                                <SHr height={15} />
                            </SView>
                        </SView>
                        <SHr height={30} />

                        <SView col={"xs-12"} center backgroundColor={"#01899220"} style={{ borderBottomLeftRadius: 18, borderTopRightRadius: 18, borderTopLeftRadius: 18, }}>
                            <SView col={"xs-11"} >
                                <SHr height={15} />
                                <SView col={"xs-12"} row>
                                    <SView col={"xs-10"}>
                                        <SText font={"LondonTwo"} fontSize={16}>VISIÓN </SText>
                                    </SView>
                                </SView>
                                <SHr height={10} />
                                <SText font={"LondonMM"} fontSize={16}>“Fundación consolidada, en expansión y referente en la prestación sostenible de todos sus servicios, con calidad, recursos humanos idóneos y éticos, promoviendo el desarrollo de la persona y el bienestar social”.</SText>
                                <SHr height={15} />
                            </SView>
                        </SView>

                        <SHr height={100} />
                    </SView>
                </Container>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Kolping);