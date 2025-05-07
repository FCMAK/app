import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SImage } from 'servisofts-component';
import Parent from '../index'
import SSocket from 'servisofts-socket';
import { FlatList } from 'react-native';
class DomicilioBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        SSocket.sendPromise({
            component: "novedades",
            type: "getAll",
            // key_usuario: Model.usuario.Action.getKey()
        }).then(e => {
            // console.log(e);
            this.setState({ data: Object.values(e.data) })
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
        }}
          
            >
            <SImage src={SSocket.api.root + "novedades/" + item.key} style={{
                width: 170,
                height: 170,
                borderRadius: 8,
                // position: "absolute",
                // top: 0,
                // left: 0,
                resizeMode: "cover",
            }} />
            <SHr height={20} />
            <SText fontSize={16} font='LondonTwo' color={STheme.color.primary}>{item.titulo}</SText>
        </SView>
    }



    render() {
        return <>
            <FlatList
                style={{ width: "100%" }}
                data={this.state.data}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                renderItem={this.renderItem.bind(this)}
            />
        </>;
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DomicilioBanner);