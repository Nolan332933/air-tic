import Header from "@/components/Header";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, Pressable, View, Text } from "react-native";
import { ArrowPathRoundedSquareIcon, ChevronDoubleRightIcon } from "react-native-heroicons/outline";

interface SearchFlightData {
  originCity: string;
  destinationCity: string;
  departureDate: string;
  seat: number;
}

interface TripOptionProps {
  pageNavigation: string;
  handleNavigationChange: (type: string) => void;
}

const TripOption: React.FC<TripOptionProps> = ({
  pageNavigation,
  handleNavigationChange,
}) => (
  <View className="flex-row justify-between w-full px-4 py-2">
    <Pressable
      className="flex-row w-1/2"
      onPress={() => handleNavigationChange("oneWay")}
    >
      <View
        className={`w-full justify-center items-center flex-row space-x-2 pb-2 ${
          pageNavigation === "oneWay" ? "border-b-4 border-[#12B3A8]" : "border-transparent"
        }`}
      >
        <ChevronDoubleRightIcon
          className="w-6 h-6"
          size={20}
          strokeWidth={pageNavigation === "oneWay" ? 3 : 2}
          color={pageNavigation === "oneWay" ? "#12B3A8" : "gray"}
        />
        <Text
          className={`text-xl pl-2 ${
            pageNavigation === "oneWay" ? "text-[#12B3A8]" : "text-gray-500"
          }`}
          style={{
            fontWeight: pageNavigation === "oneWay" ? "700" : "500",
          }}
        >
          One Way
        </Text>
      </View>
    </Pressable>

    <Pressable
      className="flex-row w-1/2"
      onPress={() => handleNavigationChange("roundedTrip")}
    >
      <View
        className={`w-full justify-center items-center flex-row space-x-2 pb-2 ${
          pageNavigation === "roundedTrip" ? "border-b-4 border-[#12B3A8]" : "border-transparent"
        }`}
      >
        <ArrowPathRoundedSquareIcon
          
          size={20}
          strokeWidth={pageNavigation === "roundedTrip" ? 3 : 2}
          color={pageNavigation === "roundedTrip" ? "#12B3A8" : "gray"}
        />
        <Text
          className={`text-xl pl-2 ${
            pageNavigation === "roundedTrip" ? "text-[#12B3A8]" : "text-gray-500"
          }`}
          style={{
            fontWeight: pageNavigation === "roundedTrip" ? "700" : "500",
          }}
        >
          Round Trip
        </Text>
      </View>
    </Pressable>
  </View>
);

interface locationInputProps {
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onPress: () => void;
}

const LocationInput: React.FC<locationInputProps> = ({
  placeholder,
  icon,
  value,
  onPress
}) => (
  <View>
    <Pressable className="flex-row justify-between w-full px-4 py-2" onPress={onPress}>
      <View className="border-2 border-gray-300 mx-4 mb-4 rounded-2xl justify-center">
        <Pressable onPress={onPress}>
          <View className="px-4 flex-row justify-between items-center">
              <View className="w-[15%] border-r-2 border-gray-200">
                 {icon}
              </View>
              <View className="w-[80%] py-3">
                {
                  value ? (
                    <Text className="bg-transparent text-gray-600 font-bold">
                      {value}
                    </Text>
                  ) : 
                  (
                    <Text className="bg-transparent text-lg text-gray-600 font-semibold">
                      {placeholder}
                    </Text>
                  )
                }
              </View>
          </View>
        </Pressable>
      </View>
    </Pressable>
  </View>
)

interface DepartureDateProps {
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onPress: () => void;
}

const DepartureDate: React.FC<DepartureDateProps> = ({
  placeholder,
  icon,
  value,
  onPress,
}) => {
  return (
    <Pressable className="flex-row justify-between w-full px-4 py-2" onPress={onPress}>
    
      <View className="border-2 border-gray-300 mx-4 mb-4 rounded-2xl justify-center py-3 flex-row items-center pl-4" >
      <View className="w-[15%] border-r-2 border-gray-300">{icon}</View>
        <View className="px-4 flex-row justify-between items-center">
          
          <View className="w-[80%] py-3">
            {value ? (
              <Text className="bg-transparent text-gray-600 font-bold">{value}</Text>
            ) : (
              <Text className="bg-transparent text-lg text-gray-600 font-semibold">
                {placeholder}
              </Text>
            )}
          </View>
        </View>
      </View>
    
    </Pressable>
  );
};


export default function HomeScreen() {
  const [isPending, setIsPending] = useState(false);
  const [pageNavigation, setPageNavigation] = useState("oneWay");
  const [searchFlightData, setSearchFlightData] = useState<SearchFlightData>({
    originCity: "",
    destinationCity: "",
    departureDate: "",
    seat: 0,
  })

  const handleNavigationChange = (type: string) => setPageNavigation(type);
  return (
    <View className="flex-1 items-center bg-[#F5F7FA] relative">
      <StatusBar style="light" />
      {isPending && (
        <View className="absolute z-50 w-full h-full justify-center items-center">
          <View className="bg-[#000000] bg-opacity-50 h-full w-full justify-center items-center opacity-[0.45]">
            <View className="absolute">
              <ActivityIndicator size="large" color="#fff" />
            </View>
          </View>
        </View>
      )}
      <View
        className="h-64 mb-4 justify-start border-orange-600 w-full bg-[#192031] relative pt-16"
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Header />
      </View>

      <View className="w-full px-4 -mt-32 mx-4">
        <View className="bg-white rounded-3xl pt-2 pb-4 shadow-md shadow-slate-300">
          <View className="flex-row justify-between w-full px-4 py-2">
            <TripOption
              pageNavigation={pageNavigation}
              handleNavigationChange={handleNavigationChange}
            />
          </View>
          <LocationInput
            placeholder={
              searchFlightData.originCity ? searchFlightData.originCity : "Departure City"
            }
            icon={<FontAwesome5 size={20} color="gray" name="plane-departure"/>}
            value={searchFlightData.originCity}
            onPress={() => {}}
          />

          <LocationInput
            placeholder={
              searchFlightData.originCity ? searchFlightData.originCity : "Destination City"
            }
            icon={<FontAwesome5 size={20} color="gray" name="plane-arrival"/>}
            value={searchFlightData.originCity}
            onPress={() => {}}
          />

          <DepartureDate
             placeholder={
              searchFlightData.departureDate ?
               searchFlightData.departureDate
               : "Departure Date"
             }
             icon={<FontAwesome5 size={20} color="gray" name="calendar-alt"/>}
             value={searchFlightData.departureDate}
             onPress={()=> {}}
          />

        </View>
      </View>
    </View>
  );
}
