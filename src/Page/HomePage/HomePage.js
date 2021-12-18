import styled from "styled-components";
import RotetingButton from "../../components/cssAnimal/button/RotetingButton";
import SwipeButton from "../../components/cssAnimal/button/SwipeButton";
import ButtonHover from "../../components/cssAnimal/button/ButtonHover";
import StretchinButton from "../../components/cssAnimal/button/StretchinButton";
import SwipeButtonTopToBottom from "../../components/cssAnimal/button/SwipeButtonTopToBottom";
import GlowingButton from "../../components/cssAnimal/button/GlowingButton";
import TwoLayersSwappingButton from "../../components/cssAnimal/button/TwoLayersSwappingButton";
import TextScalingButton from "../../components/cssAnimal/button/TextScalingButton";
import CircularSwappingButton from "../../components/cssAnimal/button/CircularSwappingButton";
import RotatingThreeLayersButton from "../../components/cssAnimal/button/RotatingThreeLayersButton";
import LayersSwappingFromLeftToRightButton from "../../components/cssAnimal/button/LayersSwappingFromLeftToRightButton";
import ThreeCirclesToBackgroundButton from "../../components/cssAnimal/button/ThreeCirclesToBackgroundButton";
import ButtonHoverTwo from "../../components/cssAnimal/button/ButtonHoverTwo";
import SplittedButton from "../../components/cssAnimal/button/SplittedButton";
import BorderSwappingButton from "../../components/cssAnimal/button/BorderSwappingButton";
import BorderGrowingButton from "../../components/cssAnimal/button/BorderGrowingButton";
import FirstLetterRotatingButton from "../../components/cssAnimal/button/FirstLetterRotatingButton";
import FourBordersGrowingButton from "../../components/cssAnimal/button/FourBordersGrowingButton";
import WavyButton from "../../components/cssAnimal/button/WavyButton";
import TwoCutsButton from "../../components/cssAnimal/button/TwoCutsButton";
import TwoPartsSkewedButton from "../../components/cssAnimal/button/TwoPartsSkewedButton";
import PulsingButton from "../../components/cssAnimal/button/PulsingButton";
import DiagonalSwipeButton from "../../components/cssAnimal/button/DiagonalSwipeButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <RotetingButton />
      <SwipeButton />
      <ButtonHover />
      <StretchinButton />
      <SwipeButtonTopToBottom />
      <GlowingButton />
      <TwoLayersSwappingButton />
      <TextScalingButton />
      <CircularSwappingButton />
      <RotatingThreeLayersButton />
      <LayersSwappingFromLeftToRightButton />
      <ThreeCirclesToBackgroundButton />
      <ButtonHoverTwo />
      <SplittedButton />
      <BorderSwappingButton />
      <BorderGrowingButton />
      <FirstLetterRotatingButton />
      <FourBordersGrowingButton />
      <WavyButton />
      <TwoCutsButton />
      <TwoPartsSkewedButton />
      <PulsingButton />
      <DiagonalSwipeButton />
      <div style={{ width: "340px" }}></div>
    </Wrapper>
  );
}
