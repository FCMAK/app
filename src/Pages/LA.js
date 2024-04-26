import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SPage, SText } from 'servisofts-component';
import LoginGoogle from '../LoginApis/LoginGoogle';
// import { launchImageLibrary } from 'react-native-image-picker';
class LA extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    pres = async () => {
        // const result = await launchCamera();÷
        // const result = await launchImageLibrary();
    }
    render() {
        return (
            <SPage title={'LA'}>
                <SButtom type={"danger"} onPress={() => {
                    this.pres();
                }}>OPEN</SButtom>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(LA);