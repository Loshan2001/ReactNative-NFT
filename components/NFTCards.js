import { StyleSheet, Text, View ,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS , SIZES , SHADOWS ,assets } from '../constants'
import { CircleButton , RectButton} from './Button'

const NFTCards = ({data}) => {
    const navigation = useNavigation()
  return (
    <View style={{
        backgroundColor : COLORS.white,
        borderRadius : SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin : SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={
            {
                width:"100%",
                height: 250
            }
        }>
            <Image source={data.image} resizeMode='cover' style={{width : "100%", height : "100%" , borderTopLeftRadius : SIZES.font , borderTopRightRadius : SIZES.font}}/>
            <CircleButton imgUrl = {assets.heart} right={10} top={10}/>
        </View>
    
    </View>
  )
}

export default NFTCards

const styles = StyleSheet.create({})