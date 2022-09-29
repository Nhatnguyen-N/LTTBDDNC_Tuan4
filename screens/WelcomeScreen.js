import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

function WelcomeScreen({ route }) {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  const [dt, setDt] = useState({
    colors: [
      {
        img: require("../assets/vsmart_xanh.png"),
        colorName: "Xanh",
        color: "#234896",
        price: 1790000,
      },
      {
        img: require("../assets/vsmart_bac.png"),
        colorName: "Bạc",
        color: "#C5F1FB",
        price: 1790000,
      },
      {
        img: require("../assets/vsmart_den.png"),
        colorName: "Đen",
        color: "#C5F1FB",
        price: 1790000,
      },
      {
        img: require("../assets/vsmart_do.png"),
        colorName: "Đỏ",
        color: "#C5F1FB",
        price: 1790000,
      },
    ],
    select: {
      img: require("../assets/vsmart_xanh.png"),
      colorName: "Xanh",
      color: "#234896",
      price: 1790000,
    },
  });
  useEffect(() => {
    if (route.params) setDt(route.params);
  }, [route.params]);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="justify-center items-center">
        <Image className="h-80 w-72" source={dt.select.img} />
      </View>
      <Text className="font-bold text-[18px] ml-[26px]">
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View className="flex-row ml-3.5 ">
        <Image
          className="m-3 mr-0.5  "
          source={require("../assets/Star1.png")}
        />
        <Image
          className="m-3 mr-0.5 "
          source={require("../assets/Star1.png")}
        />
        <Image
          className="m-3 mr-0.5 "
          source={require("../assets/Star1.png")}
        />
        <Image
          className="m-3 mr-0.5 "
          source={require("../assets/Star1.png")}
        />
        <Image
          className="m-3 mr-0.5 "
          source={require("../assets/Star1.png")}
        />
        <Text className="pt-4 pl-10">(Xem 828 đánh giá)</Text>
      </View>
      <View className="flex-row ml-6">
        <Text className="text-[25px] font-bold">1.790.000 đ</Text>
        <Text className="pt-2.5 font-bold pl-20 text-[15px]">1.790.000 đ</Text>
      </View>
      <View className="flex-row">
        <Text className="text-[#FA0000] font-bold pl-7 pt-3">
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image className="mt-3 ml-3" source={require("../assets/Group1.png")} />
      </View>
      <View className=" bg-slate-400 mt-6 mb-10">
        <TouchableOpacity
          className="border rounded-lg py-3 "
          onPress={() => nav.navigate("ColorScreen")}
        >
          <Text className="flex-1 text-black text-xl uppercase text-center">
            {dt.colors.length} Màu - chọn màu
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="flex-row shadow-sm py-2 rounded-lg justify-center items-center bg-red-600">
        <Text className="flex-1 text-white font-bold text-2xl uppercase text-center">
          Chọn Mua
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
