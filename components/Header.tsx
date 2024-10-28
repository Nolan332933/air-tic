import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Header() {
  return (
    <View className='flex-row justify-between items-center px-4'>
        <View className='w-1/2 flex-row h-14 itmes-center'>
            <View className='pr-2'>
                <View className='overflow-hidden '>
                    <Image 
                        source={require("../assets/images/icon.png")}
                        className='w-16 h-16 border-2 border-red rounded-full'
                    />
                </View>

                <View>
                    <Text className='text-base text-neutral-400 dark:text-white font-medium'>
                        Welcome Back
                    </Text>
                    <Text className='text-xl text-white font-bold'>
                        Stacks 👋
                    </Text>
                </View>
            </View>
        </View>
      <Text className='text-base text-neutral-400 dark:text-white font-medium'>Header</Text>
    </View>
  )
}