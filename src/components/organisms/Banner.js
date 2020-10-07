import Carousel from "nuka-carousel";
import Wrapper from "../atoms/Banner/Wrapper";
import Item from "../molecules/BannerItem";

export default function Banner() {
  return (
    <Wrapper>
      <Carousel autoplay={true} wrapAround={true} withoutControls={true}>
        <Item color="#f0f8fd" type="프로젝트"></Item>
        <Item color="#fff4fb" type="포트폴리오"></Item>
      </Carousel>
    </Wrapper>
  );
}
