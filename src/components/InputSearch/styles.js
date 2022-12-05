import styled from "styled-components";
import colors from "../../tokens/colors";
import fontSizes from "../../tokens/fontSizes";

const InputSearch = styled.input`
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${colors.colorWhite};
  font-size: ${fontSizes.sm};
  padding: 10px 170px;
  outline: 0;
  width: 236px;
  color: ${colors.colorWhite};
  margin-bottom: 14px;

  &::placeholder {
    color: ${colors.colorWhite};
    font-size: ${fontSizes.sm};
  }
`

export default InputSearch;