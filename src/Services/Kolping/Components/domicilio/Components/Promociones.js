import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SImage } from 'servisofts-component';
import Parent from '../index'
import { FlatList } from 'react-native';
import SSocket from 'servisofts-socket';
class DomicilioPromociones extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_servicio = this.props.key_servicio;
    }

    componentDidMount() {
        SSocket.sendPromise({
            component: "servicio_informacion_promo",
            type: "getAll",
            // key_usuario: Model.usuario.Action.getKey()
        }).then(e => {
            // console.log(e);
            let datas = Object.values(e.data).filter((item) => {
                return item.key_servicio_informacion === this.key_servicio
            });
            this.setState({ data: Object.values(datas) })
        }).catch(e => {
            console.log(e);
        })
    }

    renderItem({ index, item }) {

        return <SView width={220} height center style={{
            backgroundColor: STheme.color.card,
            borderRadius: 8,
            // margin: 4,
            marginRight: 8,
            padding: 8,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
        }}

        >
            <SImage enablePreview src={SSocket.api.root + "servicio_informacion_promo/" + item.key} style={{
                width: 170,
                height: 170,
                borderRadius: 8,
                // position: "absolute",
                // top: 0,
                // left: 0,
                resizeMode: "cover",
            }} />
            {/* <SHr height={20} /> */}
            {/* <SText fontSize={16} font='LondonTwo' color={STheme.color.primary}>{item.titulo}</SText> */}
        </SView>
    }


    render() {
        return (<>
            {/* <SText font={"LondonBetween"} fontSize={15}>PROMOS</SText> */}
            <FlatList
                style={{ width: "100%" }}
                data={this.state.data}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                renderItem={this.renderItem.bind(this)}
            />
        </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DomicilioPromociones);