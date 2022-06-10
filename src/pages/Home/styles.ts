import { convertPixelToRem, flex, getMargin, getPadding } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${convertPixelToRem(30)} 0;
`;

export const Title = styled.h1`
  margin-left: ${convertPixelToRem(120)};
  margin-top: ${convertPixelToRem(40)};
  margin-bottom: ${convertPixelToRem(15)};
  color: white;
  font-size: ${convertPixelToRem(35)};
  ${flex.justifyCenter};
  transition: color 0.5s ease;

  :hover {
    color: #c1c1c1;
  }
`;

export const ButtonContainer = styled.div`
  ${getMargin(25)};
  margin-left: auto;
  width: max-content;
`;

export const HeadTable = styled.div`
  ${flex.between};
  margin: 0 auto;
  max-width: 85%;
`;

export const SubTitle = styled.div`
  font-size: ${convertPixelToRem(35)};
  color: white;
  font-weight: bold;
  transition: color 0.5s ease;

  :hover {
    color: #c1c1c1;
  }
`;

export const RegistersList = styled.div`
  margin-top: ${convertPixelToRem(25)};
`;

export const RegisterContainer = styled.div`
  background: #393939;
  box-shadow: '7px 7px 12px 3px rgba(102,102,102,0.04)';
  border-radius: 5px;
  height: ${convertPixelToRem(65)};

  & + & {
    margin-top: ${convertPixelToRem(35)};
  }
`;

export const RegistersCard = styled.div`
  ${flex.between}
  align-items: center;
  height: ${convertPixelToRem(60)};

  margin: 0 auto;
  max-width: 85%;

  h1 {
    font-size: ${convertPixelToRem(28)};
    color: #d9d9d9;
  }
`;
