import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const dt = {
  colors: [
    {
      img: require("../assets/vsmart_xanh.png"),
      colorName: "Xanh",
      color: "#234896",
    },
    {
      img: require("../assets/vsmart_bac.png"),
      colorName: "Bạc",
      color: "#C5F1FB",
    },
    {
      img: require("../assets/vsmart_den.png"),
      colorName: "Đen",
      color: "#C5F1FB",
    },
    {
      img: require("../assets/vsmart_do.png"),
      colorName: "Đỏ",
      color: "#C5F1FB",
    },
  ],
  select: {
    img: require("../assets/vsmart_xanh.png"),
    colorName: "Xanh",
    color: "#234896",
  },
};
function ColorScreen() {
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
        color: "#000",
        price: 1790000,
      },
      {
        img: require("../assets/vsmart_do.png"),
        colorName: "Đỏ",
        color: "#F30D0D",
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
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row p-2">
        <Image className="w-[100px] h-32 mx-2" source={dt.select.img} />
        <View className="flex-1 h-fit">
          <Text className="text-lg font-bold ">
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text className="text-sm">
            Màu:
            <Text className="font-bold">{dt.select.colorName}</Text>
          </Text>
          <Text className="text-sm">
            Cung cấp bởi <Text className="font-bold">Tiki-Tradding</Text>
          </Text>
          <Text className="text-sm">
            <Text className="font-bold">{dt.select.price}đ</Text>
          </Text>
        </View>
      </View>
      <View className="bg-[#c4c4c4] flex-auto justify-between">
        <Text className="text-lg px-2 font-bold">Chọn một màu bên dưới:</Text>
        <View className="justify-around items-center">
          {dt.colors.map((c) => (
            <TouchableOpacity
              key={c.colorName}
              style={{
                backgroundColor: c.color,
              }}
              className={` w-24 h-24 shadow-sm mb-2 justify-center items-center ${
                dt.select.color === c.color && "border-[5px] border-gray-500"
              }`}
              onPress={() => {
                setDt({
                  ...dt,
                  select: {
                    img: c.img,
                    color: c.color,
                    colorName: c.colorName,
                    price: c.price,
                  },
                });
              }}
            >
              {dt.select.color === c.color && (
                <Text
                  className={
                    "text-white text-center mix-blend-color-dodge shadow-lg"
                  }
                >
                  {c.colorName}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => nav.navigate({ name: "WelcomeScreen", params: dt })}
          className="bg-blue-600 m-2 px-5 py-2 rounded-lg justify-center items-center border-red-600 border shadow-sm"
        >
          <Text className="uppercase text-white text-xl">Xong</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ColorScreen;
