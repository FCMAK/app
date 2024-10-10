import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView } from 'servisofts-component';
import NavBar from '../../NavBar';
import SSocket from "servisofts-socket"
// import { getAllHistorico } from './../../Actions';
import { FlatList } from 'react-native';

class FichasPendientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.getHistorico();
    }

    getHistorico = async () => {
        var historico = await getAllHistorico(Model.usuario.Action.getKey())
        this.setState({ historico: Object.values(historico) })
    }

    render() {
        // var usuario = this.props.state.usuarioReducer.usuarioLog ?? {
        //     Nombres: "SIN USUARIO"
        // }

        var usuario = this.props.state.usuarioReducer.usuarioLog;
         var data = this.state.historico ?? [];

        // if (!usuario) {
        //     // SNavigation.navigate("login");
        //     return <SView />
        // }

        console.log("usuario", usuario);

        return (<FlatList
            style={{ width: "100%" }}
            horizontal
            // ListHeaderComponent={() => {
            //     return <SView width={100} height={180} padding={10} center onPress={() => {
            //         SNavigation.navigate("/servicio/buscar")
            //     }}>
            //         <SView width={100} height padding={5} style={{
            //             borderRadius: 15,
            //             backgroundColor: STheme.color.card
            //         }} row center>
            //             <SHr width={10} />
            //             <SIcon name={"addUser"} fill={STheme.color.primary} width={50} height={50} />
            //             <SView height={30} >
            //                 <SText>AGREGAR</SText>
            //                 <SText>SERVICIO</SText>
            //             </SView>
            //             <SHr width={10} />
            //         </SView>
            //     </SView>
            // }}
            ItemSeparatorComponent={() => <SView width={8} />}
            showsHorizontalScrollIndicator={true}
            data={data}
            keyExtractor={item => item.key}
            renderItem={this.renderItemServicios.bind(this)}
        />

        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(FichasPendientes);