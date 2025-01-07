import { View, Text, Image } from 'react-native'
import React from 'react'

const AuthSplashScreenImage = () => {
  return (
    <View className='bg-black absolute top-0 left-0  flex-1 w-full '>
      <Image source={require("@/assets/images/Group 2.png")}/>
    </View>
  )
}

export default AuthSplashScreenImage