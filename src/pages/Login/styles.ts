import { convertPixelToRem, flex, getMargin } from 'css-blocks-styled-components';
import styled from 'styled-components';

import { Form } from '@unform/web';

import ActionButton from '../../components/ActionButton';

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  background: #111111;
  padding-bottom: ${convertPixelToRem(25)};
`;

export const PageWrapper = styled.div`
  ${flex.alignCenterColumn}
  margin: 0 auto;
  min-width: 25%;

  h1 {
    color: white;
    font-size: ${convertPixelToRem(40)};
  }
`;

export const TitleSignIn = styled.h2`
  padding-top: ${convertPixelToRem(60)};
  font-size: ${convertPixelToRem(28)};
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  color: #d1d1d1;
`;

export const StyledForm = styled(Form)`
  width: 85%;
  margin: 0 auto;
`;

export const InputLabel = styled.label`
  ${getMargin(15, 0, 8)};
  font-size: ${convertPixelToRem(19)};
  color: #c1c1c1;
  display: block;
`;

export const StyledActionButton = styled(ActionButton)`
  margin-top: ${convertPixelToRem(25)};
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoadingImage = styled.img`
  margin-right: ${convertPixelToRem(10)};
  width: ${convertPixelToRem(25)};
  height: ${convertPixelToRem(25)};
`;

export const SpaceComponent = styled.div`
  ${getMargin(0, 5)};
  width: ${convertPixelToRem(25)};
  height: ${convertPixelToRem(25)};
`;
