import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SBuscador } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../categoria_farmacia/index';
import SSocket from 'servisofts-socket'

class CategoriaFiltro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_e = SNavigation.getParam("key"); //key por navegador
        this.onSelect = SNavigation.getParam("onSelect");
    }
    getCardCategoria({ url, nombre, key, obj }) {
        return <SView col={"xs-12"} row height={52} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }} onPress={() => {
            //alert(title + '\n' + texto + '\n' + numero);
            this.onSelect(obj);
            SNavigation.goBack();
            // this.props.navigation.navigate(url, { key: key });
        }}>
            <SView col={"xs-11"} height >
                <SHr height={5} />
                <SView col={"xs-12"} row center>
                    <SHr height={10} />
                    <SView col={"xs-12"} >
                        <SText font={"Roboto"} fontSize={15} >{nombre}</SText>
                    </SView>
                </SView>
            </SView>
            <SView col={"xs-1"} center height>
                <SIcon name={"arrowRight"} width={30} fill={"transparent"} />
            </SView>
        </SView>
    }
    getCategorias() {
        var data = Parent.Actions.getAll(this.props);

        if (!data) return <SLoad />;
        //alert(this.key_e)
        return Object.keys(data).map((key) => {
            var obj = data[key];
            if (!SBuscador.validate(obj, this.state.find)) {
                return null;
            }
            return <SView col={"xs-12"} center >
                <SView col={"xs-12"} >
                    {this.getCardCategoria({
                        url: "farmacia",
                        nombre: data[key].descripcion,
                        key: key,
                        obj: obj
                    })}
                    <SHr height={10} />
                </SView>
            </SView>
        })
    }

    render() {
        return (
            <SPage title={'Categorías Farmacia'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    {this.getCategorias()}
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(CategoriaFiltro);