import { convertPixelToRem, getPadding } from 'css-blocks-styled-components';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  background: ${theme.colors.primary};
  height: ${convertPixelToRem(38)};
  width: ${convertPixelToRem(180)};
  font-weight: bold;
  font-size: ${convertPixelToRem(15)};
  letter-spacing: 0.2em;
  box-shadow: ${theme.boxShadows.button};
  border-radius: ${convertPixelToRem(3)};
  ${getPadding(24)};
  border: 0;
  color: #fff;
  text-transform: uppercase;

  transition: background-color 0.2s ease;

  :hover {
    background-color: ${theme.colors.primaryMediumLighter};
  }

  :disabled {
    background-color: ${theme.colors.primaryLighter};
    cursor: not-allowed;
  }
`;
