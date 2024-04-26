import React, { Component } from 'react';
import { SHr, SIcon, SLoad, SNavigation, SText, STheme, SView } from 'servisofts-component';
import NavBar from '../../../Components/NavBar';

type KBarraUsuario_props = {
}

export default class KBarraUsuario extends Component<KBarraUsuario_props> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    render() {
        var usuario = this.props.user.state.usuarioReducer.usuarioLog
        if (usuario == null) {
            SNavigation.navigate("login");
            return <SView />
        }
        if (!usuario) {
            SNavigation.navigate('login');
            return <SView />
        }
        return (
            <>
                <SView height={120} backgroundColor={STheme.color.primary} style={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }} center>
                    <SHr height={16} />
                    <SView col={"xs-12"} height={50} row flex style={{
                        paddingLeft: 16,
                    }}>
                        <SView height={50} width={50} style={{
                            borderRadius: 50,
                            backgroundColor: STheme.color.secondary,
                        }}>

                        </SView>
                        <SView height={50} style={{
                            justifyContent: 'center',
                            paddingStart: 8,
                        }} flex>
                            <SText font={"Roboto-Bold"} fontSize={24} flex> {usuario.Nombres}</SText>
                            <SView onPress={() => {
                                SNavigation.navigate('perfil')
                            }}><SText fontSize={12}>Ver perfil
                                    <SIcon name="Ver" width={9} color="#fff"
                                        style={{
                                            paddingLeft: 5,
                                            position: "relative",
                                            top: 4
                                        }} />
                                </SText>
                            </SView>
                        </SView>
                        <SView height={50} style={{
                            justifyContent: 'center', paddingRight: 8,
                        }} row>
                            <SView height={34} width={40} center onPress={() => {
                                SNavigation.navigate('Notificaciones')
                            }}>
                                <SIcon name={"KNotify"} width={18} fill="#fff" />
                            </SView>
                            <SView height={34} width={40} center onPress={() => {
                                NavBar.open();
                            }}>
                                <SIcon name={"KMenu"} width={28} />
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </>
        );
    }
}