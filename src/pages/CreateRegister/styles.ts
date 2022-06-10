import {
  convertPixelToRem,
  flexAlignCenter,
  flexBetween,
  getPadding,
} from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const SubHeaderWrapper = styled.div`
  ${getPadding(0, 12, 0, 30)}
  ${flexBetween}
`;

export const Title = styled.h1`
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  font-size: ${convertPixelToRem(22)};
`;

export const BackButton = styled.button`
  ${flexAlignCenter}
  color: ${theme.colors.textPrimary};
  background: transparent;
  border: none;

  svg {
    width: ${convertPixelToRem(20)};
    height: ${convertPixelToRem(20)};
  }

  span {
    margin-left: ${convertPixelToRem(5)};
    text-decoration: underline;
  }
`;
