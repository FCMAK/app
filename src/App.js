import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';
import Pages from './Pages';
import Assets from './Assets';

//---------REDUX----------
import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
// import SSocket from './SSocket';
//------------------------
import SSocket, { setProps } from 'servisofts-socket'
import BackgroundImage from './Components/BackgroundImage';
import NavBar from './Components/NavBar';
import Socket from './Socket';
import Config from './Config';

const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}
export default App;