import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SIcon, SNavigation, SPage, SScrollView2, SText, STheme, SView, } from 'servisofts-component';
import BackgroundImage from '../../Components/BackgroundImage';
import Kolping from '../../Components/Kolping';
import { FlatList } from 'react-native';
import SSocket from 'servisofts-socket';
import SMD from '../../Components/SMD';



class TerminosCondiciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.load_data();
    }

    load_data() {
        SSocket.sendPromise({
            // service: Service.ServiceName,
            component: "servicio_informacion",
            type: "getAll",
            estado: "cargando",
            //   key: "laboratorio"
        }).then(e => {
            this.setState({ data: e.data["9105adc7-beba-437e-b32a-4cf6bcf27b28"] })
        }).catch(e => {
            console.log(e);
        })
    }



    render() {
        console.log("this.state.data", this.state.data);
       

        return (
            <SPage title={'Términos y condiciones'} center  >
                <SView col={"xs-12"} center height backgroundColor={STheme.color.background}>
                    {/* <SView col={"xs-12 md-8 xl-4"} center height={120} style={{
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: STheme.color.background,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        overflow: 'hidden',
                    }} >
                        <BackgroundImage />
                        
                    </SView> */}
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
                                    {this.state.data?.titulo}
                                </SText>


                                <SHr height={20} />
                                <SText justify color={STheme.color.text} fontSize={14} style={{
                                }} font={"LondonMM"}>
                                    {this.state.data?.descripcion}
                                </SText>

                                <SMD>{this.state.data?.observacion}</SMD>

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