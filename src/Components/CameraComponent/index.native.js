import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Button, ImageEditor } from "react-native";
import React from "react";
import { RNCamera } from "react-native-camera";
import { SIcon, SImage, SNavigation, SPopup, STheme, SView } from "servisofts-component";
import SSocket from 'servisofts-socket';
import ImageResizer from 'react-native-image-resizer';

class CameraComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flash: false,
      camaraTipo: RNCamera.Constants.Type.back,
      fotoData: null,
    }
  }

  showCamara() {
    return <RNCamera
      ref={(ref) => { this.camera = ref; }}
      style={{ flex: 1, }}
      type={this.state.camaraTipo ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
      flashMode={this.state.flash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
      captureAudio={false}
    />
  }

  // ChangeCamara() {
  //   return <SView col={"xs-12"} height={'100%'} style={{ position: 'absolute', top: 0, }} border='transparent'
  //     onPress={() => { this.setState({ camaraTipo: !this.state.camaraTipo }) }}
  //   />
  // }


  send(file, url) {
    if (!file) return;
    console.log(url)
    file.name = "perfil.png";
    file.type = "image/png";
    var body = new FormData();
    body.append('file', {
      uri: file.uri,
      type: file.type,
      name: file.name
    });
    console.log(file)

    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.send(body);
    this.setState({ ...this.state })
  }

  showFoto() {
    // this.send(this.state.fotoData, SSocket.api.root + "upload/camara/" + '1234567');
    return (
      <SView flex center backgroundColor='black' >
        <SView col={"xs-8"} height={'70%'} style={{ top: '5%' }} border='white'>
          {/* <SImage src={`${SSocket.api.root}` +"camara/" + '2?time='+ new Date().getTime()} style={{ resizeMode: "cover" }} /> */}
          <SImage src={this.state.fotoData.uri} style={{ resizeMode: "cover" }} />
        </SView>
      </SView>
    );
  }



  showBoton() {
    return <>
      <SIcon name={"BtnLinterna"} height={40} width={40} style={{ position: 'absolute', left: 27, top: 27 }} onPress={() => { this.setState({ flash: !this.state.flash }) }} />
      <SIcon name={"BtnGaleria"} height={40} width={40} style={{ position: 'absolute', right: 27, top: 27 }} />

      <SView col={"xs-12"} height={100} row backgroundColor={STheme.color.primary}  >
        <SView col={"xs-3.5"} height center>
          <SIcon name={"BtnAccept"} height={40} width={40} onPress={() => {

            var onChange = SNavigation.getParam('onChange');
            if (onChange) {
              onChange(this.state.fotoData);
              SNavigation.goBack();
            }
            // this.send(this.state.fotoData, SSocket.api.root + "upload/camara/" + '2') 
            // SNavigation.navigate("cotizacion_farmacia/registro");

          }} />
        </SView>
        <SView col={"xs-5"} height center onPress={() => { this.takePicture() }}>
          <SIcon name={"BtnShooter"} fill={'transparent'} height={50} width={50} />
        </SView>
        <SView col={"xs-3.5"} height center>
          <SIcon name={"BtnCancel"} height={40} width={40} onPress={() => { this.setState({ fotoData: null }) }} />
        </SView>
      </SView>
    </>
  }

  render() {
    if (this.state.fotoData) {
      return (
        <SView flex>
          {this.showFoto()}
          {this.showBoton()}
        </SView>
      );
    }
    return (
      <SView flex>
        {this.showCamara()}
        {/* {this.ChangeCamara()} */}
        {this.showBoton()}
      </SView>
    );
  }




  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //aqui lo rezi
      ImageResizer.createResizedImage(data.uri, 1024, 1024, 'PNG', 100, 0).then((response) => {

        console.log("Alvaro alto" + response.height + ' ancho ' + response.width);
        this.setState({ fotoData: response })

      }).catch((err) => {

      });
      // console.log("Alvaro alto" + data.height + ' ancho ' + data.width);

    }
  };

}
export default CameraComponent