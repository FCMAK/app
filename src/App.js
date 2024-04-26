import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';
import Pages from './Pages';
import Assets from './Assets';

import SSocket, { setProps } from 'servisofts-socket'
import BackgroundImage from './Components/BackgroundImage';
import NavBar from './Components/NavBar';
import Socket from './Socket';
import Config from './Config';
import Redux, { store } from './Redux';

const App = (props) => {
    return (
        <Redux>
            <SComponentContainer
                debug
                socket={SSocket}
                assets={Assets}
                background={<BackgroundImage />}
                theme={{ initialTheme: "default", themes: Config.theme }}>
                <SNavigation props={{ title: 'SERP', pages: Pages }}
                    linking={{
                        prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                        getInitialURL: () => {

                        }
                    }} />
                <Socket store={store} />
                <NavBar />
            </SComponentContainer>
        </Redux>
    )
}
export default App;