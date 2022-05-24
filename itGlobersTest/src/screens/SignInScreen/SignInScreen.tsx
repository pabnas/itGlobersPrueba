import {StyleSheet, View, ImageBackground} from 'react-native';
import Login from '../../components/Login/Login'

const imageBackground = require('./../../../assets/images/it-globers-bkg1.jpg');


export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground source={imageBackground} style={styles.image}/>
            <Login/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    },
    image:{
        position: 'absolute',
        width: "100%",
        height: "100%",
        flex: 1
    }
});
