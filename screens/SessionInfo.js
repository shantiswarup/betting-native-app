import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const QrCode = ({ base64Str }) => (
  <Image source={{uri:`data:image/png;base64,${base64Str}`}} style={{width: 266, height: 258}} />
)

class SessionInfo extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        userKioskQr: ''
      }
    }

    componentDidMount() {
      const kioskInfo = this.props.navigation.getParam('kioskId','Invalid kiosk')
      const email = "abc.def@gmail.com"
      fetch('http://192.168.43.61:8000/validateKiosk', {
        method: 'POST',
        body: JSON.stringify({kioskInfo, email}),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(response => response.text())
      .then(res=> {console.log(res);this.setState({userKioskQr:res})})
      .catch(error => console.error('Error:', error))
      // fetch('http://192.168.43.61:8000/validateKiosk', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({"kioskInfo":kioskInfo, "email":email}),
      // })
      // .then((response) => response.text())
      // .then((responseText) => {

      //   this.setState({
      //     isLoading: false,
      //     userKioskQr: responseText,
      //   }, function(){

      //   });

      // })
      // .catch((error) =>{
      //   console.error(error);
      // });
    }
    render() {
        return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>{this.props.navigation.getParam('kioskId','Invalid kiosk')}</Text>
          {this.state.userKioskQr !== '' && <QrCode base64Str={this.state.userKioskQr} />}
          <Button
          title="Home"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
        {/* {alert(this.props.kioskId)} */}
        </View>

        )
    }
}

export default SessionInfo;