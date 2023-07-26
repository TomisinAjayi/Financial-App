import React, { useContext } from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext  } from '../../contexts/auth';


export default function CustomDrawer(props) {
    const { user } = useContext(AuthContext);

 return (

    <DrawerContentScrollView {...props }>

        <View style={{ alignItems: 'center', justifyContent:'center', marginTop: 25}}>

            <Image 
            source={ require('../../assets/rccg-logo.png')}
            style={{ width: 85, height: 85}}
            resizeMode='contain'
            />

            <Text style={{ color: 'black', fontSize: 18, marginTop: 5 }}>
                OVERCOMERS' COURT
            </Text>


        </View>

        <DrawerItemList  {...props} />


        <DrawerItem {...props}
        label="Copyright by Tomisin Ajayi"
        onPress={ () => alert("Tomisin Ajayi")}
        />

    </DrawerContentScrollView>
   
  );
}