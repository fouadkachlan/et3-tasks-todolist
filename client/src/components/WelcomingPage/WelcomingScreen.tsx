import {  Image, ActivityIndicator , TouchableOpacity } from 'react-native'
import CustomView from '../../customComponents/CustomView'
import CustomText from '../../customComponents/CustomText';
import CustomButton from '../../customComponents/CustomButton';
import {useNavigation , NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from '../../types/navigation';
const welcomingImage = require("../../../../assets/welcome.png");




const WelcomingScreen : React.FC= () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <CustomView
    
        style={{ 
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 750
        }}
    >
        <Image style={{width: 400 , height: 250 , borderRadius: 950}} source={welcomingImage} />
        <CustomView style={{display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>
            <CustomText
                style={{color:'black'}}
                fontSize={30}
                fontWeight='bold'
            >Welcome to the news reader app</CustomText>
            <CustomText
                style={{paddingTop: 30}}
                fontSize={15}
                fontWeight='400'
            >We're excited to introduce you our news paper reader app.</CustomText>
            <ActivityIndicator
            style={{
                marginTop: 20
            }}
                size={100}
                color="#77E4C8"
            ></ActivityIndicator>
            <CustomButton onPress={() => navigation.navigate("Login")}
                style={{
                     backgroundColor: '#77E4C8' ,
                     marginTop: 30 , 
                     borderRadius: 30,
                     width: 300

                    }}
                height={60}
                width={400}
                
            >
                <CustomView 
                    style={{
                        display:'flex' ,
                        justifyContent:'center' ,
                         alignItems:'center',
                        }}
                >
                    <CustomText
                        style={{color: 'black' , marginTop:13, marginLeft:125}}
                        fontSize={20}
                        fontWeight='300'
                    >Login</CustomText>
                </CustomView>
            </CustomButton>
            <TouchableOpacity onPress={()=>navigation.navigate("CreateAccount")}>
                <CustomText 
                    style={{color:'#77E4C8' , paddingTop:30}}
                    fontSize={16}
                    fontWeight='500'
                 >Create an account</CustomText>
            </TouchableOpacity>
        </CustomView>
    </CustomView>
  )
}

export default WelcomingScreen