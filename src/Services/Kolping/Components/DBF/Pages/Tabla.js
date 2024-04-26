import React, { Component } from 'react';
import { SPage, SText, SThread, SView, SNavigation, STheme, SIcon, SLoad, STable, SUuid } from 'servisofts-component';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import DBF from '..';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    getTablas() {
        var tablas = DBF.getTablas(this.props);
        if (!tablas) {
            return <SLoad />
        }
        var tabla = tablas.find(x => x.name == SNavigation.getParam("key"));
        if (!tabla) return <SLoad />
        var header = Object.keys(tabla.columns).map(x => {
            var xob = tabla.columns[x];
            return {
                key: xob.name,
                label: xob.name,
                width: 200,
            }
        })
        var data = {};
        tabla.data.map((ob)=>{
            ob.key = SUuid();
            data[ob.key] = ob;
        })
        return <STable
            header={header}
            data={data}
        // actionTypes={["edit"]}
        // onEdit={(obj) => {
        //     ComponentPadre.editar(obj);
        // }}
        // onAction={(action, row) => {

        // }}
        >

        </STable>
    }
    render() {

        return (
            <SPage
                // hidden
                title="Table"
                disableScroll
            >
                <SView
                    col={"xs-12"} height>
                    <SView col={"xs-12"} height >
                        {this.getTablas()}
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);