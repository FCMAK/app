import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText } from 'servisofts-component';
import { Container } from '../Components';

class inDevelop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'En construcción'} disableScroll center>
                <Container>
                    <SText center fontSize={25} font={"LondonMM"}>{'Esta página se encuentra en construcción'}</SText>
                </Container>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(inDevelop);