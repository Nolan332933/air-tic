import { View, Text, Pressable } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated'; // Importing Animated as default
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = () => {
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: "#192031" }}>
            <StatusBar style="light" />
            <View className="h-full">
                <View className="w-full px-4 items-center my-8">
                    <Animated.View entering={FadeInDown.duration(200).springify()} className="flex-row justify-center items-center pb-24">
                        <MaterialCommunityIcons name="airplane" size={24} color="#12B3A8" />
                        <Text className="text-[#FFFFFF] text-xl leading-[60px] pl-1">STACKS</Text>
                        <Text className="text-[#4AE8DD] text-xl leading-[60px] pl-1 italic">Fly</Text>
                    </Animated.View>
                    <View>
                        <Text className="text-[#FFFFFF] text-[52px] font-medium leading-[60px] mt-4">
                            Discover your Dream Flight Easily
                        </Text>
                    </View>
                    <View className="mt-4">
                        <Text className="text-neutral-300 text-lg font-medium leading-[30px] mt-4">
                            Buy airplane tickets easily with just a few clicks in the application
                        </Text>
                    </View>

                    <View className="h-1/4 w-full justify-start pt-8 px-4">
                        <Pressable className="bg-[#12B3AB] rounded-xl justify-center items-center py-4">
                            <Text className="text-white font-bold text-lg">Discover</Text>
                        </Pressable> 

                        <View className="flex-row mt-4 w-full justify-center gap-2">
                            <Text className="text-neutral-300 font-medium text-lg leading-[30px] text-center">Don't have an account?</Text>
                            <Text className="text-neutral-300 font-semibold text-lg leading-[30px] text-center">Register</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
