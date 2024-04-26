import React, { Component } from 'react';
import { SButtom, SPage, SText, SView } from 'servisofts-component';
import GoogleLogin from 'react-google-login';
class LoginGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const responseGoogle = (response) => {
            if (response.googleId) {
                if (this.props.onLogin) {
                    this.props.onLogin({
                        id: response?.profileObj?.googleId,
                        ...response.profileObj
                    });
                }
            }
        }
        return (
            <GoogleLogin
                clientId="261961935928-vumvmp2u1oakag0bh6jts9cc3rf24l7j.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                render={(renderProps) => <SView onPress={renderProps.onClick} col={"xs-12"} flex>{this.props.children}</SView>}
            >
            </GoogleLogin>
        );
    }
}

export default LoginGoogle;