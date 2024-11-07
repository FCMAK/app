import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SInput, SNavigation, SPage, SPopup, SText, STheme, SThread, SView } from 'servisofts-component';
import Model from '../../Model';
import CryptoJS from 'crypto-js';
import PButtom from '../../Components/PButtom';
import LoginFacebook from '../../LoginApis/LoginFacebook';
import LoginGoogle from '../../LoginApis/LoginGoogle';
import LoginApple from '../../LoginApis/LoginApple';
import Container from '../../Components/Container';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.ruta = SNavigation.getParam('ruta');
        // console.log(this.ruta);
    }
    componentDidMount() {
        new SThread(100, "espera").start(() => {
            this.setState({ ready: true })
        })
    }

    getFilter() {
        return (
            <SView col={'xs-11 sm-10 md-8 lg-6 xl-6'} height={50} row>
                <SView
                    col={'xs-6'}
                    height
                    backgroundColor={STheme.color.primary}
                    center>
                    <SButtom
                        outline={this.state.filter != 'Pendiente'}
                        onPress={() => {
                            this.setState({ filter: 'Pendiente' });
                        }}>
                        Inicio Sesión
                    </SButtom>
                </SView>
                <SView
                    col={'xs-6'}
                    height
                    center
                    backgroundColor={STheme.color.lightGray}>
                    <SButtom
                        outline={this.state.filter != 'Historial'}
                        onPress={() => {
                            SNavigation.navigate('/registro');
                        }}>
                        Registro
                    </SButtom>
                </SView>
            </SView>
        );
    }

    loginRedSocial(key_red_social: "gmail_key" | "apple_key" | "facebook_key", usuario) {
        Model.usuario.Action.loginByKey({
            usuario: usuario.id,
        }).then(e => {
            SNavigation.goBack()
            console.log(e);
        }).catch(e => {
            Model.usuario.Action.registro({
                data: {
                    Nombres: usuario.name,
                    Apellidos: usuario.last_name,
                    Correo: usuario.email,
                    [key_red_social]: usuario.id
                }
            }).then(e => {
                Model.usuario.Action.loginByKey({
                    usuario: usuario.id,
                }).then(resp => {
                    // Model.empresa.Action.setEmpresa(null)
                    SNavigation.goBack()
                }).catch(e => {
                    SPopup.alert("Error al iniciar con el nuevo usuario");
                })
            }).catch(ea => {
                if (ea.error_) {
                    if (ea.error_ == "Existe usuario") {
                        const key_usuario = Object.keys(ea.data_)[0];
                        if (key_usuario) {
                            Model.usuario.Action.editar({
                                data: {
                                    key: key_usuario,
                                    gmail_key: usuario.id,
                                    estado: 1,
                                }
                            }).then(e => {
                                Model.usuario.Action.loginByKey({
                                    usuario: usuario.id,
                                }).then(resp => {
                                    // Model.empresa.Action.setEmpresa(null)
                                    SNavigation.goBack()
                                }).catch(e => {
                                    SPopup.alert("Error al iniciar con el nuevo usuario");
                                })
                            }).catch(e => {
                                console.log(e)
                                SPopup.alert("Error al iniciar con el nuevo usuario");
                            })
                        }
                    }
                }
                // SPopup.alert("Error al registrar usuario");
                // console.error(e);
            })
        })
    }
    getSocial() {
        return (
            <SView col={'xs-11'} height={60} row center>
                <SView center >
                    <LoginApple onLogin={(usuario) => {
                        this.loginRedSocial("apple_key", usuario)
                    }}>
                        <SView height={50} colSquare center style={{ backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 2, padding: 8 }}>
                            <SIcon name={'IconApple'} />
                        </SView>
                    </LoginApple>
                </SView>
                <SView width={50}/>
                <SView center >
                    <LoginGoogle onLogin={(usuario) => {
                        this.loginRedSocial("gmail_key", usuario)
                    }}>
                        <SView height={50} colSquare center style={{ backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 2, padding: 8 }}>
                            <SIcon name={'IconGoogle'} />
                        </SView>
                    </LoginGoogle>
                </SView>
            </SView>
        );
    }

    icon = (name) => {
        return <SIcon
            name={name}
            fill={STheme.color.primary}
            width={17}
            height={20}
        />
    }

    renderHeader() {
        return <SView col={'xs-12'} center>
            <SHr height={50} />
            <SView col={'xs-11'} height={120} center>
                <SIcon name={'Logo'} fill={STheme.color.primary} />
            </SView>
        </SView>
    }
    render() {
        if (Model.usuario.Action.getUsuarioLog()) {
            SNavigation.goBack();
            // SNavigation.navigate("/login");
            return null;
        }

        if (!this.state.ready) return this.renderHeader();
        return (
            <SPage title={'Login'}   >
                <Container >
                    <SView col={"xs-12"} center>
                        {this.renderHeader()}
                        <SHr height={10} />
                        {/* <SText fontSize={18}>Iniciar sesión</SText> */}
                        {/* {this.getFilter()} */}
                        <SHr height={16} />
                        <SForm
                            // col={"xs-11 sm-10 md-8 lg-6 xl-4"}
                            ref={ref => this.form = ref}
                            inputProps={{
                                customStyle: "kolping",
                                separation: 16
                            }}

                            inputs={{
                                usuario: {
                                    placeholder: "Correo electrónico",
                                    type: 'email',
                                    required: true,
                                    // autoFocus: true,
                                    keyboardType: 'email-address',
                                    onKeyPress: (evt) => {
                                        if (evt.key === 'Enter') {
                                            this.form.focus('password');
                                        }
                                    },
                                    icon: (
                                        <SIcon name={"InputEmail"} width={40} height={30} />
                                    )
                                },
                                password: {
                                    placeholder: "Contraseña",

                                    type: "password",
                                    required: true,
                                    onKeyPress: (evt) => {
                                        if (evt.key === 'Enter') {
                                            this.form.submit();
                                        }
                                    },
                                    icon: (
                                        <SIcon name={"InputPassword"} width={40} height={30} />
                                    )
                                }
                            }}
                            loading={this.state.loading}
                            error={this.state.error}
                            // onSubmitName={"Ingresar"}
                            onSubmitProps={{
                                type: "outline"
                            }}
                            onSubmit={(data) => {
                                data["password"] = CryptoJS.MD5(data["password"]).toString();
                                console.log(data);

                                Model.usuario.Action.login(data).then((resp) => {
                                    // if(resp.estado == "exito")  SNavigation.replace("/");
                                    console.log("exito");
                                    SNavigation.goBack();
                                }).catch(e => {
                                    if (e?.error == "error_password") {
                                        this.setState({ loading: false, error: "Usuario o contraseña incorrectos." })
                                    } else {
                                        this.setState({ loading: false, error: "Ha ocurrido un error al iniciar sesión." })
                                    }
                                })
                            }}
                        />
                        <SHr height={15} />
                        <SView col={"xs-11"} flex height style={{ alignItems: "flex-end" }}>
                            <SText fontSize={14} color={STheme.color.lightBlack} font={"LondonMM"} onPress={() => { SNavigation.navigate('login/recuperar'); }}>¿Olvidaste tu correo o contraseña?</SText>

                            {/* <SText>¿Olvidaste tu contraseña? </SText>
                        <SText onPress={() => {
                            SNavigation.navigate("/login/recuperar")
                        }} color={STheme.color.blue}>clic AQUÍ</SText> */}
                        </SView>
                        <SHr height={15} />

                        <PButtom
                            fontSize={20}
                            onPress={() => {
                                this.form.submit();
                            }}>
                            Login
                        </PButtom>
                        <SHr height={15} />
                        <SView col={"xs-11"} height={40} row center  >
                            <SView flex center height={20} row>
                                <SText fontSize={14} color={STheme.color.lightBlack} font={"LondonMM"} >¿No tienes una cuenta?  </SText>
                                <SText fontSize={14} color={STheme.color.primary} font={"LondonMM"} onPress={() => { SNavigation.navigate('registro'); }}>REGISTRAR</SText>
                            </SView>
                        </SView>

                        <SHr height={20} />
                        <SView col={'xs-11'} height={40} row center>
                            <SView col={'xs-3'} height center>
                                <SHr color={STheme.color.lightGray} height={1.5}></SHr>
                            </SView>
                            <SView col={'xs-6'} height center>
                                <SText
                                    fontSize={14}
                                    color={STheme.color.text}
                                    font={'LondonMM'}>
                                    {' '}
                                    o Iniciar sesión con{' '}
                                </SText>
                            </SView>
                            <SView col={'xs-3'} height center>
                                <SHr color={STheme.color.lightGray} height={1.5}></SHr>
                            </SView>
                        </SView>
                        {/* <SHr height={20} /> */}
                        {this.getSocial()}

                        {/* <SHr height={20} /> */}
                        {/* <SView col={"xs-12"} center >
                        <SText>¿No tienes una cuenta?</SText>
                        <SHr height={20} />
                        <SButtom type='secondary' style={{ textAlign: "center" }} onPress={() => {
                            SNavigation.navigate("/registro", {
                                onSelect: (a) => {
                                    this.setState({ tipo_producto: a })
                                }
                            })
                        }}>Crear nuevo usuario</SButtom>
                    </SView> */}
                    </SView>
                </Container>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Login);