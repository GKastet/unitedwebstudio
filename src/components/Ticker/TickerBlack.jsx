import RepeatWord from "../../helpers/RepeatWord";
import { Container, TickerBox } from "./TickerStyled";

const TickerBlack = () => {
  return (
    <Container>
      <TickerBox className="black">
        <RepeatWord word="Who we are &bull; " count={8} /> 
        <RepeatWord word="Who we are &bull; " count={8} />
      </TickerBox>
    </Container>
  );
};

export default TickerBlack;


// &#8226;