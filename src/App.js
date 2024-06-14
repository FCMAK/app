import React from 'react';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';

import Pages from './Pages';
import Assets from './Assets';

import SSocket, { setProps } from 'servisofts-socket'

import NavBar from './Components/NavBar';
import BackgroundImage from './Components/BackgroundImage';
import BarraSuperior from './Components/Kolping/BarraSuperior';
import Redux, { store } from './Redux';
import Socket from './Socket';
import Config from './Config';
import Firebase from './Firebase';

Firebase.init();

const App = (props) => {
    return (
        <Redux>
            <SComponentContainer
                // debug
                socket={SSocket}
                assets={Assets}
                background={<BackgroundImage />}
                theme={{ initialTheme: "default", themes: Config.theme }}>
                <SNavigation props={{
                    pages: Pages,
                    title: "App Kolping",
                    navBar: BarraSuperior,
                }}
                    linking={{
                        prefixes: ["https://kolping.servisofts.com", "http://kolping.servisofts.com"],
                        getInitialURL: () => {

                        }
                    }}
                />
                <Socket store={store} />
                <NavBar />
            </SComponentContainer>
        </Redux>
    )
}
export default App;