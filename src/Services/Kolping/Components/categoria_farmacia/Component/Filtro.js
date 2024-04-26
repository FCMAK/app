import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Parent from '../index'
class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    changeSelect(item) {
        if (this.props.onChange)
            this.props.onChange(item);
    }
    getCategorias() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        var listaKeys = Object.keys(data);

        if (this.props.value) {
            listaKeys = listaKeys.filter(k => k != this.props.value?.key);
            listaKeys.unshift(this.props.value?.key)
        }

        return listaKeys.map((key, index) => {
            var obj = data[key];
            var selected = false;

            if (this.props.value) {
                if (this.props.value.key == key) {
                    selected = true;
                }
            }

            return <>
                <SView key={key}
                    height={28} style={{
                        width: (Math.sqrt(obj.descripcion.length) * 3.5) * 14,
                        // width: obj.descripcion.length * 14,
                        backgroundColor: STheme.color.card,
                        borderRadius: 5,
                        overflow: 'hidden'
                    }}
                    center
                >
                    <SView col={"xs-12"} center height onPress={() => {
                        this.changeSelect(obj);
                    }} >
                        {/* <SView center height  >
                            <SIcon name={"IconFilter"} height={20} width={22} />
                        </SView> */}
                        <SView center row col={"xs-12"}>
                            <SText fontSize={14} color={selected ? STheme.color.primary : STheme.color.gray} font={"LondonMM"}>{obj.descripcion}</SText>
                            <SView width={8} />
                            {selected ? <SView style={{ paddingBottom: 2 }}><SIcon name={"Cerrar"} height={8} width={8} fill={STheme.color.info} /></SView> : null}
                        </SView>



                    </SView>
                </SView>
                <SView width={14} />
            </>
        })

    }

    getBtnFiltros() {
        return <>
            <SView width={18} />
            <SView height={28} style={{ maxWidth: '80%', width: 100, paddingLeft: 12, paddingRight: 12, backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }} center >

                <SView flex row center height onPress={() => {
                    //this.changeSelect(null);
                    SNavigation.navigate("farmacia/filtro", {
                        onSelect: (obj) => {
                            this.changeSelect(obj);
                        }
                    })
                }}   >

                    <SView width={22} height center   >
                        <SIcon name={"IconFilter"} height={20} width={22} />
                    </SView>

                    <SView flex height center  >
                        <SText fontSize={16} color={this.props.value ? STheme.color.gray : STheme.color.primary} font={"LondonMM"} > {"Filtros"}</SText>
                    </SView>
                </SView>

            </SView>
            <SView width={14} />
        </>
    }
    render() {
        return (
            <SView col={"xs-12"} height={60} center>
                <SScrollView2 >
                    <SHr height={16} />
                    <SView row >
                        {this.getBtnFiltros()}
                        {this.getCategorias()}
                    </SView>
                </SScrollView2>
            </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Filtro);