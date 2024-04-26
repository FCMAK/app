import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SButtom } from 'servisofts-component';
import NavBar from '../Components/NavBar';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Prueba mensaje'}>
                {/* <SView >
                    <SButtom style={{ backgroundColor: "#000" }}>Menú</SButtom>
                </SView> */}
                <SView style={{
                    width: 135,
                    position: "absolute",
                    right: 0,
                }}>
                    <SButtom onPress={() => {
                        NavBar.open();
                    }} style={{
                        backgroundColor: "#DB4313",
                        position: "absolute",
                        zIndex: 999999999,
                        top: -8,
                        left: -5,
                        width: 100
                    }}>
                        <SIcon name={"Menu2"} fill="#fff" width={20} style={{ top: "10px", position: "relative" }} />
                    </SButtom>
                </SView>
                <SView center height="100%" flexDirection="column" flex={3}>

                    <SView style={{ background: "red" }} flex="1" flexDirection="row">
                        sdgdf
                    </SView>
                    <SView style={{ background: "yellow" }} >
                        sdgdf
                    </SView>
                    <SView style={{ background: "red" }} >
                        sdgdf
                    </SView>
                </SView>

                <SView style={{ flexDirection: 'column', flex: 3}} >
                    <SView style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                        <SView style={{ backgroundColor: 'red', flex: 1 }}>ff
                        </SView>
                        
                    </SView>


                    <SView style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                       
                        <SView style={{ backgroundColor: 'black', flex: 1 }}>bb
                        </SView>
                    </SView>

                    <SView style={{ flex: 2, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
                        <SView style={{ backgroundColor: 'gray', flex: 1, marginRight: 5 }}>
                        </SView>
                        <SView style={{ backgroundColor: 'yellow', flex: 1, marginLeft: 5 }}>
                        </SView>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);