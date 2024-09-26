import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SScrollView2, SPopup, SDate, SForm } from 'servisofts-component';
import Container from '../../Components/Container';
import Header2 from '../../Services/Kolping/Components/ficha/Components/Header2';

class PacienteGenero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.codmed = SNavigation.getParam("codmed"); //key por navegador
        this.nrosuc = SNavigation.getParam("nrosuc"); //key por navegador
        this.codesp = SNavigation.getParam("codesp"); //key por navegador
        this.datosNav = SNavigation.getAllParams();


        this.dia = SNavigation.getParam("dia");
        this.hora = SNavigation.getParam("hora");
        this.fecha = new SDate(SNavigation.getParam("fecha"));
        this.fecha_final = new SDate(this.fecha + "-" + this.dia, "yyyy-MM-dd");


    }

    componentDidMount() {
        // SSocket.sendPromise({
        //     component: "medico",
        //     type: "getAll",
        //     codesp: this.codesp,
        //     nrosuc: this.nrosuc
        // }).then(a => {
        //     console.log(a?.data[0])
        //     this.setState({ dataDoctor: a.data[0] })
        // }).catch(e => {
        //     console.log(e)
        // })
    }



    icon = (name) => {
        return <SIcon
            name={name}
            fill={STheme.color.primary}
            width={40} height={30}
        />
    }

    getContent() {
        // this.data = {};
        // if (this.key) {
        //     this.data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!this.data) return <SLoad />
        // } else {
        //     this.data = {};    
        // }

        // var usuario = this.props.state.usuarioReducer.usuarioLog;
        // this.usuario = usuario;
        // if (!usuario) {
        //     SNavigation.navigate('login');
        //     return <SView />
        // }

        return <SView col={"xs-12"} center>
            <SView width={140} height={140} center backgroundColor={STheme.color.primary} style={{
                borderRadius: 70,
            }} onPress={() => {
                SNavigation.navigate("/paciente/direccion", {...this.datosNav, genero: "Hombre"})
            }}>
                <SIcon name={"ghombre"} width={48} height={48} />
                <SHr height={10} />
                <SText fontSize={15} color={STheme.color.white} font='LondonTwo' center> Hombre</SText>
            </SView>
            <SHr height={30} />
            <SView width={140} height={140} center backgroundColor={STheme.color.info} style={{
                borderRadius: 70,
            }} onPress={() => {
                SNavigation.navigate("/paciente/direccion",{...this.datosNav, genero: "Mujer"})
            }}>
                <SIcon name={"gmujer"} width={48} height={48} />
                <SHr height={10} />
                <SText fontSize={15} color={STheme.color.white} font='LondonTwo' center> Mujer</SText>
            </SView>
        </SView>
    }
    render() {
console.log(this.datosNav)

        return (
            <SPage title={'Género'} hidden>
                <Header2
                    titulo={"¿QUÉ GÉNERO TIENES?"}
                />
                <Container>
                    <SHr height={60} />
                    {this.getContent()}
                    <SHr height={40} />
                    <SView col={"xs-12"} row>
                        <SView col={"xs-6"}  >
                            <SView width={80} height={60}
                                style={{
                                    backgroundColor: STheme.color.primary,
                                    borderRadius: 8,
                                }}
                                onPress={() => {
                                    SNavigation.goBack();
                                }} center>
                                <SText bold color={STheme.color.white}>ATRÁS</SText>
                            </SView>
                        </SView>
                        {/* <SView col={"xs-6"} style={{ alignItems: "flex-end" }} >
                            <SView width={60} height={60} onPress={() => {
                                SNavigation.navigate("ficha/paciente/direccion")
                            }}>
                                <SIcon name={"bnext"} width={60} height={60} fill={STheme.color.primary} />
                            </SView>

                        </SView> */}
                    </SView>
                    <SHr height={30} />
                </Container>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(PacienteGenero);