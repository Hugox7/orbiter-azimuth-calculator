import { InputStyled } from "@/types";
import { Lato } from "next/font/google";
import styled from "styled-components";

const lato = Lato({ subsets: ["latin"], weight: ['400'] });

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Label = styled('p')`
  color: white;
  font-size: 15px;
  margin: 0 0 5px 0;
`;

export default function Input(props) {

  const inputProps = props;

  return (
    <InputContainer>
      {props.label && <Label className={lato.className}>{props.label}</Label>}
      <InputStyled {...inputProps} />
    </InputContainer>
  );
}