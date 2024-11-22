import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView } from 'servisofts-component';
import { Container } from '../Components';

class inDevelop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'En construcción'}  center>
                <Container >

                 

                        <SView col={"xs-12 sm-12 md-12 lg-12 xl-12"} row>
                            {/* <SHr height={20} /> */}
                            <SView col={"xs-4"}></SView>
                            <SText col={"xs-8"} center fontSize={25} bold color={STheme.color.info} font={"LondonBetween"}>{'¡PRÓXIMAMENTE!'}</SText>
                            <SHr height={15} />
                            <SView col={"xs-4"}></SView>
                            <SText col={"xs-8"} fontSize={20} bold color={STheme.color.text} font={"LondonMM"}>{'Estamos trabajando en la construcción de ésta sección'}</SText>
                            <SHr height={15} />
                            <SView col={"xs-4"}></SView>
                            <SView col={"xs-8"} center>
                                <SHr height={15} />
                                <SIcon name={`Logo`} width={220} fill={STheme.color.primary} />
                            </SView>

                        </SView>
                        <SView col={"xs-12"} style={{
                            left: "-35%",
                            // top: "0%",
                            position: "absolute",
                        }} center>
                            <SView style={{
                                width: 300,
                                height: 500,
                            }}>
                                <SIcon name={`Enfermera7`} width={"100%"} fill={"#f0f"} />
                            </SView>
                        </SView>
                   
                </Container>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(inDevelop);