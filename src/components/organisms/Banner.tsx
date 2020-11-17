import React from "react";
import Carousel from "nuka-carousel";
import Colors from "@src/components/atoms/Colors";
import Item from "../molecules/Banner/Item";

export default function Banner() {
  return (
    <Carousel autoplay={true} wrapAround={true} withoutControls={true}>
      <Item color={Colors.LIGHT_BLUE} page="프로젝트"></Item>
      <Item color={Colors.LIGHT_PINK} page="포트폴리오"></Item>
    </Carousel>
  );
}
