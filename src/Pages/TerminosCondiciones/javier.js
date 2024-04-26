import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, } from 'servisofts-component';
import { CheckBox } from 'react-native';
import Kolping from '../../Components/Kolping';
class TerminosCondiciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <>
            <SPage title={'Términos y condiciones'}>
                <SView col={"xs-12"} >
                    <SView height={50}   >
                        <SText color={STheme.color.black} fontSize={14} style={{ padding: 10, marginBottom: 20, textAlign: "Justify" }} font={"LondonMM"}>
                            TÉRMINOS Y CONDICIONES DE USO APP {"\n"}
                            1. Estos Términos y Condiciones de Uso regulan las reglas a que se sujeta la utilización de la APP
                            ____________________ (en adelante, la APP), que puede descargarse desde el dominio
                            _______________________________ La descarga o utilización de la APP atribuye la condición de
                            Usuario a quien lo haga e implica la aceptación de todas las condiciones incluidas en este documento
                            y en la Política de Privacidad y el Aviso Legal de dicha página Web. El Usuario debería leer estas
                            condiciones cada vez que utilice la APP, ya que podrían ser modificadas en lo sucesivo.{"\n"}
                            2. Únicamente los Usuarios expresamente autorizados por XXXEMPRESAXXX podrán acceder a la
                            descarga y uso de la APP. Los Usuarios que no dispongan de autorización, no podrán acceder a dicho
                            contenido.{"\n"}
                            3. Cargos: eres responsable del pago de todos los costes o gastos en los que incurras como resultado de
                            descargar y usar la Aplicación de XXXEMPRESAXXX, incluido cualquier cargo de red de operador o
                            itinerancia. Consulta con tu proveedor de servicios los detalles al respecto.{"\n"}
                            4. Estadísticas anónimas: XXXEMPRESAXXX se reserva el derecho a realizar un seguimiento de tu
                            actividad en la Aplicación de y a informar de ello a nuestros proveedores de servicios estadísticos de
                            terceros. Todo ello de forma anónima.{"\n"}
                            5. Protección de tu información personal: queremos ayudarte a llevar a cabo todos los pasos necesarios
                            para proteger tu privacidad e información. Consulta la Política de privacidad de XXXEMPRESAXXX y los
                            avisos sobre privacidad de la Aplicación para conocer qué tipo de información recopilamos y las
                            medidas que tomamos para proteger tu información personal.{"\n"}
                            6. Queda prohibido alterar o modificar ninguna parte de la APP a de los contenidas de la misma, eludir,
                            desactivar o manipular de cualquier otra forma (o tratar de eludir, desactivar o manipular) las
                            funciones de seguridad u otras funciones del programa y utilizar la APP o sus contenidos para un fin
                            comercial o publicitario. Queda prohibido el uso de la APP con la finalidad de lesionar bienes,
                            derechos o intereses de XXXEMPRESAXXX o de terceros. Queda igualmente prohibido realizar
                            cualquier otro uso que altere, dañe o inutilice las redes, servidores, equipos, productos y programas
                            informáticos de XXXEMPRESAXXX o de terceros.{"\n"}
                            7. La APP y sus contenidos (textos, fotografías, gráficos, imágenes, tecnología, software, links,
                            contenidos, diseño gráfico, código fuente, etc.), así como las marcas y demás signos distintivos son
                            propiedad de XXXEMPRESAXXX o de terceros, no adquiriendo el Usuario ningún derecho sobre ellos
                            por el mero uso de la APP. El Usuario, deberá abstenerse de:{"\n"}
                            a) Reproducir, copiar, distribuir, poner a disposición de terceros, comunicar públicamente,
                            transformar o modificar la APP o sus contenidos, salvo en los casos contemplados en la ley o
                            expresamente autorizados por XXXEMPRESAXXX o por el titular de dichos derechos.{"\n"}
                            b) Reproducir o copiar para uso privado la APP o sus contenidos, así como comunicarlos
                            públicamente o ponerlos a disposición de terceros cuando ello conlleve su reproducción.{"\n"}
                            c) Extraer o reutilizar todo o parte sustancial de los contenidos integrantes de la APP.{"\n"}
                            8. Con sujeción a las condiciones establecidas en el apartado anterior, XXXEMPRESAXXX concede al
                            Usuario una licencia de uso de la APP, no exclusiva, gratuita, para uso personal, circunscrita al
                            territorio nacional y con carácter indefinido. Dicha licencia se concede también en los mismos
                            términos con respecto a las actualizaciones y mejoras que se realizasen en la aplicación. Dichas
                            licencias de uso podrán ser revocadas por XXXEMPRESAXXX unilateralmente en cualquier momento,
                            mediante la mera notificación al Usuario.{"\n"}
                            9. Corresponde al Usuario, en todo caso, disponer de herramientas adecuadas para la detección y
                            desinfección de programas maliciosos o cualquier otro elemento informático dañino.
                            XXXEMPRESAXXX no se responsabiliza de los daños producidos a equipos informáticos durante el uso
                            de la APP. Igualmente, XXXEMPRESAXXX no será responsable de los daños producidos a los Usuarios
                            cuando dichos daños tengan su origen en fallos o desconexiones en las redes de telecomunicaciones
                            que interrumpan el servicio.{"\n"}
                            10. IMPORTANTE: Podemos, sin que esto suponga ninguna obligación contigo, modificar estas
                            Condiciones de uso sin avisar en cualquier momento. Si continúas utilizando la aplicación una vez
                            realizada cualquier modificación en estas Condiciones de uso, esa utilización continuada constituirá la
                            aceptación por tu parte de tales modificaciones. Si no aceptas estas condiciones de uso ni aceptas
                            quedar sujeto a ellas, no debes utilizar la aplicación ni descargar o utilizar cualquier software
                            relacionado. El uso que hagas de la aplicación queda bajo tu única responsabilidad. No tenemos
                            responsabilidad alguna por la eliminación o la incapacidad de almacenar o trasmitir cualquier
                            contenido u otra información mantenida o trasmitida por la aplicación. No somos responsables de la
                            precisión o la fiabilidad de cualquier información o consejo trasmitidos a través de la aplicación.
                            Podemos, en cualquier momento, limitar o interrumpir tu uso a nuestra única discreción. Hasta el
                            máximo que permite la ley, en ningún caso seremos responsables por cualquier pérdida o daño
                            relacionados.{"\n"}
                            11. El Usuario se compromete a hacer un uso correcto de la APP, de conformidad con la Ley, con los
                            presentes Términos y Condiciones de Uso y con las demás reglamentos e instrucciones que, en su
                            caso, pudieran ser de aplicación El Usuario responderá frente a XXXEMPRESAXXX y frente a terceros
                            de cualesquiera daños o perjuicios que pudieran causarse por incumplimiento de estas obligaciones.{"\n"}
                            12. Estos Términos y Condiciones de Uso se rigen íntegramente por la legislación española. Para la
                            resolución de cualquier conflicto relativo a su interpretación o aplicación, el Usuario se somete
                            expresamente a la jurisdicción de los tribunales de _____________________________ (Bolivia).
                        </SText>
                    </SView>
                </SView>
            </SPage>

            <SView style={{
                position: "relative",
                bottom: 0,
                width: "100%",
                height: 200,
                backgroundColor: "#fff",
            }} center>
                <SView>
                    <SText color={STheme.color.black} height={50} fontSize={14} font={"LondonBetween"}>
                        Aceptar términos y Condiciones
                    </SText>
                </SView>
                <SView>
                    <Kolping.KButtom primary >Confirmar</Kolping.KButtom>
                </SView>
            </SView>
        </>

    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(TerminosCondiciones);