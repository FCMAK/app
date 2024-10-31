import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SIcon, SNavigation, SPage, SScrollView2, SText, STheme, SView, } from 'servisofts-component';
import BackgroundImage from '../../Components/BackgroundImage';
import Kolping from '../../Components/Kolping';
import { FlatList } from 'react-native';

const Texto = `TÉRMINOS Y CONDICIONES DE USO APP \n
1. Estos Términos y Condiciones de Uso regulan las reglas a que se sujeta la utilización de la APP
____________________ (en adelante, la APP), que puede descargarse desde el dominio
_______________________________ La descarga o utilización de la APP atribuye la condición de
Usuario a quien lo haga e implica la aceptación de todas las condiciones incluidas en este documento
y en la Política de Privacidad y el Aviso Legal de dicha página Web.El Usuario debería leer estas
condiciones cada vez que utilice la APP, ya que podrían ser modificadas en lo sucesivo.\n
2. Únicamente los Usuarios expresamente autorizados por XXXEMPRESAXXX podrán acceder a la
descarga y uso de la APP.Los Usuarios que no dispongan de autorización, no podrán acceder a dicho
contenido.\n
3. Cargos: eres responsable del pago de todos los costes o gastos en los que incurras como resultado de
descargar y usar la Aplicación de XXXEMPRESAXXX, incluido cualquier cargo de red de operador o
itinerancia.Consulta con tu proveedor de servicios los detalles al respecto.\n
4. Estadísticas anónimas: XXXEMPRESAXXX se reserva el derecho a realizar un seguimiento de tu
actividad en la Aplicación de y a informar de ello a nuestros proveedores de servicios estadísticos de
terceros.Todo ello de forma anónima.\n
5. Protección de tu información personal: queremos ayudarte a llevar a cabo todos los pasos necesarios
para proteger tu privacidad e información.Consulta la Política de privacidad de XXXEMPRESAXXX y los
avisos sobre privacidad de la Aplicación para conocer qué tipo de información recopilamos y las
medidas que tomamos para proteger tu información personal.\n
6. Queda prohibido alterar o modificar ninguna parte de la APP a de los contenidas de la misma, eludir,
desactivar o manipular de cualquier otra forma (o tratar de eludir, desactivar o manipular) las
funciones de seguridad u otras funciones del programa y utilizar la APP o sus contenidos para un fin
comercial o publicitario.Queda prohibido el uso de la APP con la finalidad de lesionar bienes,
derechos o intereses de XXXEMPRESAXXX o de terceros.Queda igualmente prohibido realizar
cualquier otro uso que altere, dañe o inutilice las redes, servidores, equipos, productos y programas
informáticos de XXXEMPRESAXXX o de terceros.\n
7. La APP y sus contenidos (textos, fotografías, gráficos, imágenes, tecnología, software, links,
contenidos, diseño gráfico, código fuente, etc.), así como las marcas y demás signos distintivos son
propiedad de XXXEMPRESAXXX o de terceros, no adquiriendo el Usuario ningún derecho sobre ellos
por el mero uso de la APP.El Usuario, deberá abstenerse de: \n
a) Reproducir, copiar, distribuir, poner a disposición de terceros, comunicar públicamente,
transformar o modificar la APP o sus contenidos, salvo en los casos contemplados en la ley o
expresamente autorizados por XXXEMPRESAXXX o por el titular de dichos derechos.\n
b) Reproducir o copiar para uso privado la APP o sus contenidos, así como comunicarlos
públicamente o ponerlos a disposición de terceros cuando ello conlleve su reproducción.\n
c) Extraer o reutilizar todo o parte sustancial de los contenidos integrantes de la APP.\n
8. Con sujeción a las condiciones establecidas en el apartado anterior, XXXEMPRESAXXX concede al
Usuario una licencia de uso de la APP, no exclusiva, gratuita, para uso personal, circunscrita al
territorio nacional y con carácter indefinido.Dicha licencia se concede también en los mismos
términos con respecto a las actualizaciones y mejoras que se realizasen en la aplicación.Dichas
licencias de uso podrán ser revocadas por XXXEMPRESAXXX unilateralmente en cualquier momento,
mediante la mera notificación al Usuario.\n
9. Corresponde al Usuario, en todo caso, disponer de herramientas adecuadas para la detección y
desinfección de programas maliciosos o cualquier otro elemento informático dañino.
XXXEMPRESAXXX no se responsabiliza de los daños producidos a equipos informáticos durante el uso
de la APP.Igualmente, XXXEMPRESAXXX no será responsable de los daños producidos a los Usuarios
cuando dichos daños tengan su origen en fallos o desconexiones en las redes de telecomunicaciones
que interrumpan el servicio.\n
10. IMPORTANTE: Podemos, sin que esto suponga ninguna obligación contigo, modificar estas
Condiciones de uso sin avisar en cualquier momento.Si continúas utilizando la aplicación una vez
realizada cualquier modificación en estas Condiciones de uso, esa utilización continuada constituirá la
aceptación por tu parte de tales modificaciones.Si no aceptas estas condiciones de uso ni aceptas
quedar sujeto a ellas, no debes utilizar la aplicación ni descargar o utilizar cualquier software
relacionado.El uso que hagas de la aplicación queda bajo tu única responsabilidad.No tenemos
responsabilidad alguna por la eliminación o la incapacidad de almacenar o trasmitir cualquier
contenido u otra información mantenida o trasmitida por la aplicación.No somos responsables de la
precisión o la fiabilidad de cualquier información o consejo trasmitidos a través de la aplicación.
Podemos, en cualquier momento, limitar o interrumpir tu uso a nuestra única discreción.Hasta el
máximo que permite la ley, en ningún caso seremos responsables por cualquier pérdida o daño
relacionados.\n
11. El Usuario se compromete a hacer un uso correcto de la APP, de conformidad con la Ley, con los
presentes Términos y Condiciones de Uso y con las demás reglamentos e instrucciones que, en su
caso, pudieran ser de aplicación El Usuario responderá frente a XXXEMPRESAXXX y frente a terceros
de cualesquiera daños o perjuicios que pudieran causarse por incumplimiento de estas obligaciones.
12. Estos Términos y Condiciones de Uso se rigen íntegramente por la legislación española.Para la
resolución de cualquier conflicto relativo a su interpretación o aplicación, el Usuario se somete
expresamente a la jurisdicción de los tribunales de _____________________________ (Bolivia).`

class TerminosCondiciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        const bloqueUno = [
            { title: 'Solicitar fichas médicas.' },
            { title: 'Comprar productos de farmacia y óptica.' },
            { title: 'Agendar consultas médicas y otros servicios.' },
            { title: 'Ver y descargar su historial médico, análisis, resultados de estudios, recetas médicas y documentos relacionados.' },
            { title: 'Acceder a servicios de entrega a domicilio (farmacia y óptica).' },
            { title: 'Recibir notificaciones sobre promociones, campañas, y eventos relacionados con su salud.' },
            { title: 'Actualizar sus datos personales y de contacto, y gestionar la información de sus familiares para casos de emergencia.' },
        ];

        const registro = [
            { title: '2.1. Requisitos de Registro: Para utilizar la aplicación, es necesario crear una cuenta proporcionando información personal precisa y actualizada, incluyendo nombre, fecha de nacimiento, correo electrónico, teléfono, dirección, y otros datos relevantes. Toda la información proporcionada será validada mediante un proceso de confirmación (código de verificación enviado a su correo y/o número de teléfono).' },
            { title: '2.2. Confidencialidad de la Cuenta: Es responsabilidad del usuario mantener la confidencialidad de las credenciales de su cuenta. El Centro Multifuncional Adolfo Kolping no se hace responsable de actividades no autorizadas realizadas en su cuenta debido a negligencia en la protección de sus credenciales.' },
        ];

        const proteccion = [
            { title: '3.1. Uso de los Datos Personales: La información personal proporcionada a través de la aplicación será utilizada exclusivamente para gestionar los servicios médicos, compras, historial médico y notificaciones relacionadas con la salud y campañas promocionales. El Centro Multifuncional Adolfo Kolping se compromete a proteger la privacidad y confidencialidad de los datos conforme a la normativa vigente sobre protección de datos personales (Artículo 130 de la Constitución Política del Estado de 2009), su debido procedimiento y a actualizar dichas normativas a sus futuras actualizaciones según corresponda.' },
            { title: '3.2. Cifrado y Seguridad: Todos los datos personales y médicos ingresados en la aplicación están protegidos mediante cifrado avanzado para garantizar su seguridad. Además, se implementarán medidas de autenticación de dos factores (2FA) para proteger su cuenta.' },
        ];

        const fichas = [
            { title: '4.1. Solicitud de Fichas: El usuario puede solicitar fichas médicas a través de la aplicación, seleccionando la especialidad y el médico de preferencia según los horarios disponibles. Se recomienda agendar las citas con antelación y verificar la disponibilidad antes de proceder con el pago.' },
            { title: '4.2. Cancelación de Fichas: Una vez pagada la ficha médica, la cancelación deberá realizarse de forma personal en las instalaciones del centro médico, dentro del tiempo de la consulta programada. Pasado el tiempo de la consulta, no será posible cancelar ni solicitar reembolsos. Esta política garantiza una gestión adecuada de las consultas y evita inconvenientes en la atención para el usuario o solicitante, para otros usuarios y Kolping como proveedor de servicios médicos.' },
            { title: '4.3. Compras en Farmacia y Óptica: El usuario puede realizar compras de productos en la farmacia y óptica a través de la aplicación. Se le proporcionará una opción de entrega a domicilio o retiro en el centro. Las compras están sujetas a la disponibilidad de productos y al pago por adelantado.' },
            { title: '4.4. Cancelación de Compras: El usuario podrá solicitar la cancelación de una compra siempre que el pedido no haya sido enviado. En caso de pedidos con entrega a domicilio, una vez despachados, no se podrá cancelar ni reembolsar el pedido.' },
        ];

        const historial = [
            { title: '5.1. Acceso al Historial Médico: El usuario tendrá acceso a su historial médico, incluyendo registros de consultas, análisis, recetas médicas y resultados de estudios. Estos documentos podrán ser descargados a través de la aplicación y se actualizarán automáticamente tras cada nueva consulta o estudio realizado en el Centro Multifuncional Adolfo Kolping.' },
            { title: '5.2. Privacidad del Historial Médico: El historial médico del usuario será tratado como confidencial y estará protegido mediante medidas de seguridad avanzadas para garantizar la privacidad de sus datos.' },
        ];

        const notify = [
            { title: '6.1. Promociones y Campañas: Al aceptar los términos y condiciones, el usuario da su consentimiento para recibir notificaciones sobre promociones, campañas, información médica didáctica, y alertas de salud a través de la aplicación, correo electrónico, y/o mensajes de texto.' },
            { title: '6.2. Configuración de Notificaciones: El usuario puede modificar sus preferencias de notificaciones en la configuración de la cuenta. Tiene la opción de desactivar ciertas notificaciones, exceptuando aquellas relacionadas con la seguridad y actualizaciones críticas de su cuenta.' },
        ];

        const modificacion = [
            { title: '7.1. Actualización de Información: El usuario puede modificar su información personal (correo electrónico, teléfono, dirección, etc.) en cualquier momento desde el perfil de usuario. Para evitar errores, cualquier cambio en el correo o teléfono deberá ser validado nuevamente mediante un proceso de verificación.' },
            { title: '7.2. Actualización Automática de Edad: La edad del usuario se actualizará automáticamente en la aplicación en función de la fecha de nacimiento registrada.' },
        ];

        const seguridad = [
            { title: '8.1. Seguridad de la Aplicación: El Centro Multifuncional Adolfo Kolping implementará medidas de seguridad para proteger la aplicación y los datos de los usuarios, incluyendo cifrado, autenticación de dos factores, y monitoreo de actividad para prevenir accesos no autorizados.' },
            { title: '8.2. Garantías contra Hackeo: Se implementarán auditorías de seguridad periódicas para prevenir posibles hackeos o accesos no autorizados a la aplicación. Sin embargo, el Centro no garantiza que el sistema sea completamente infalible ante posibles ataques cibernéticos, y se compromete a notificar a los usuarios en caso de cualquier brecha de seguridad.' },
        ];

        const responsabilidades = [
            { title: 'Proporcionar información falsa o engañosa.' },
            { title: 'Compartir las credenciales de acceso con terceros.' },
            { title: 'Realizar acciones que perjudiquen la integridad del sistema o afecten a otros usuarios.' },
        ];

        const contacto = [
            { title: 'Correo electrónico: soporte@kolping.com.bo' },
            { title: 'Teléfono: +591 76688030' },
            { title: 'Horario de atención: Lunes a Viernes, 9:00 AM - 4:00 PM' },
            { title: 'Al aceptar estos términos y condiciones, el usuario confirma haber leído y comprendido las políticas de uso de la aplicación y los derechos y responsabilidades que estas conllevan.' },
        ];

        const uso = [
            { title: 'Utilizar la aplicación con fines comerciales no autorizados.' },
            { title: 'Intentar acceder o modificar el código fuente de la aplicación.' },
            { title: 'Distribuir malware, virus, o realizar actividades de hacking.' },
            { title: 'Suplantar la identidad de otros usuarios.' },
        ];

        const condiciones = [
            { title: 'Plazo de Entrega: Los tiempos estimados de entrega serán informados al usuario al realizar la compra. En caso de retrasos, el usuario será notificado.' },
            { title: 'Costos Adicionales: Se aplicarán costos adicionales por el servicio de entrega, los cuales se informarán antes de la confirmación de la compra.' },
        ];

        const reembolso = [
            { title: 'Productos de Farmacia y Óptica: No se permiten devoluciones de medicamentos o productos de óptica una vez entregados, salvo que presenten defectos de fábrica o errores en el pedido.' },
            { title: 'Consultas Médicas: Las consultas médicas pagadas no podrán ser reembolsadas después del tiempo asignado a la cita, conforme a lo establecido en la sección 4.2.' },
        ];

        return (
            <SPage title={'Términos y condiciones'} center disableScroll >
                <SView col={"xs-12"} center height backgroundColor={STheme.color.background}>
                    <SView col={"xs-12 md-8 xl-4"} center height={120} style={{
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: STheme.color.background,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        overflow: 'hidden',
                    }} >
                        <BackgroundImage />
                        {/* <SView >
                            <Kolping.KButtom primary onPress={() => {
                                SNavigation.goBack();
                            }}>ACEPTAR</Kolping.KButtom>
                        </SView> */}
                    </SView>
                    <SScrollView2 disableHorizontal >
                        <SView col={"xs-12"} center >
                            <SView col={"xs-11 md-6 xl-4"}    >
                                <SHr height={30} />
                                {/* <SText color={STheme.color.text} fontSize={14} style={{
                                    textAlign: 'justify',
                                }} font={"LondonMM"}>
                                    {Texto}
                                </SText> */}
                                <SText center color={STheme.color.text} fontSize={16} style={{
                                }} font={"LondonTwo"}>
                                    Términos y Condiciones de Uso de la Aplicación del Centro Multifuncional Adolfo Kolping “Kolping App”
                                </SText>


                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El uso de la aplicación del Centro Multifuncional Adolfo Kolping está sujeto a los siguientes términos y condiciones; al descargar, registrar, y utilizar la aplicación, usted acepta estos términos, si no está de acuerdo con alguna parte de estos términos, no deberá utilizar la aplicación.
                                </SText>

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    1. Propósito de la Aplicación
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    La aplicación tiene como objetivo facilitar el acceso a los servicios ofrecidos por el Centro Multifuncional Adolfo Kolping, tales como:
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={bloqueUno}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    2. Registro y Cuenta de Usuario
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={registro}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    3. Protección de Datos Personales
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={proteccion}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    4. Solicitudes de Fichas Médicas y Compras
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={fichas}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    5. Historial Médico y Resultados
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={historial}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    6. Notificaciones y Comunicaciones
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={notify}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    7. Modificación de Datos Personales
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={modificacion}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    8. Seguridad
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={seguridad}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                            <SHr height={10} />
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    9. Responsabilidades del Usuario
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El usuario se compromete a utilizar la aplicación de manera responsable y respetar las normas del centro médico. No está permitido:
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={responsabilidades}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    10. Limitaciones de Responsabilidad
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El Centro Multifuncional Adolfo Kolping no se hace responsable de fallas técnicas, interrupciones en el servicio, o cualquier daño indirecto que pueda sufrir el usuario como resultado del uso de la aplicación.
                                </SText>

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    11. Modificaciones a los Términos y Condiciones
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El Centro Multifuncional Adolfo Kolping se reserva el derecho de modificar estos términos y condiciones en cualquier momento. En caso de que se realicen cambios, el usuario será notificado a través de la aplicación o por correo electrónico, y deberá aceptar los nuevos términos y condiciones antes de continuar utilizando los servicios de la aplicación.
                                </SText>
                                <SHr height={10} />
                                <SView col={"xs-12"} row>
                                    <SView col={"xs-1"} >
                                        <SHr height={5} />
                                        <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                    </SView>
                                    <SView col={"xs-11"} >
                                        <SText justify color={STheme.color.text} fontSize={14} style={{
                                        }} font={"LondonMM"}>Proceso de Aceptación de Modificaciones: Una vez notificado, el usuario deberá leer los nuevos términos y condiciones y tendrá la opción de aceptarlos o rechazar su continuación en el uso de la aplicación. Si el usuario decide no aceptar las modificaciones, su cuenta y el uso de los servicios podrán ser restringidos.</SText>
                                    </SView>
                                </SView>

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    12. Contacto y Soporte Técnico
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    Si tiene preguntas o necesita soporte técnico, puede contactar al Centro Multifuncional Adolfo Kolping a través de los siguientes canales:
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={contacto}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    13. Derecho de Revocación de Cuenta
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El Centro Multifuncional Adolfo Kolping se reserva el derecho de cancelar o suspender el acceso a la aplicación de un usuario que infrinja los términos y condiciones o que use el sistema de manera que se considere perjudicial o no ética. La cancelación de la cuenta se notificará al usuario por medio de la aplicación o correo electrónico.
                                </SText>

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    14. Uso Aceptable de los Servicios
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El uso de los servicios dentro de la aplicación está destinado exclusivamente para fines personales y médicos. No está permitido:
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={uso}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    15. Propiedad Intelectual
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    Todos los contenidos, diseño, interfaces, logotipos, gráficos y tecnologías asociados con la aplicación son propiedad exclusiva del Centro Multifuncional Adolfo Kolping y están protegidos por leyes de derechos de autor y propiedad intelectual. El usuario no podrá reproducir, distribuir, o modificar los elementos de la aplicación sin autorización.
                                </SText>

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    16. Condiciones de Entrega a Domicilio
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El servicio de entrega a domicilio de productos de farmacia y óptica estará sujeto a la disponibilidad de los productos y las zonas de cobertura.
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={condiciones}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    17. Política de Reembolso y Devoluciones
                                </SText>
                                <SHr height={10} />
                                <FlatList
                                    data={reembolso}
                                    // keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <SView col={"xs-12"} row>
                                            <SView col={"xs-1"} >
                                                <SHr height={5} />
                                                <SView width={7} height={7} style={{ borderRadius: 50, backgroundColor: STheme.color.primary }} />
                                            </SView>
                                            <SView col={"xs-11"} >
                                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                                }} font={"LondonMM"}>{item.title}</SText>
                                            </SView>
                                        </SView>
                                    )}
                                />

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    18. Mantenimiento y Actualizaciones de la Aplicación
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El Centro Multifuncional Adolfo Kolping realizará mantenimientos y actualizaciones periódicas para mejorar la seguridad, funcionalidad y experiencia del usuario, en algunos casos, estos mantenimientos podrían ocasionar interrupciones temporales en el servicio, de las cuales se notificará a los usuarios con antelación.
                                </SText>

                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={15} style={{
                                }} font={"LondonBetween"}>
                                    19. Limitaciones de Garantía
                                </SText>
                                <SHr height={10} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    El Centro Multifuncional Adolfo Kolping no garantiza que la aplicación esté libre de errores, interrupciones o que cumpla con todas las expectativas de los usuarios. En la medida permitida por la ley, la responsabilidad del centro está limitada a la corrección de errores o fallos en el servicio, sin asumir responsabilidad por daños indirectos.
                                </SText>




                                <SHr height={200} />
                            </SView>
                        </SView>
                    </SScrollView2>


                </SView>
            </SPage >)
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(TerminosCondiciones);