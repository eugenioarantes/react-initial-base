import {
  convertPixelToRem,
  flex,
  getPadding,
} from 'css-blocks-styled-components';
import styled from 'styled-components';

import { TransparentButton } from '../misc/Buttons';

export const Container = styled.header`
  ${getPadding(0, 65)}
  ${flex.between}
  background: #111111;

  height: ${convertPixelToRem(96)};;
`;

export const Logo = styled.span`
  color: #fff;
  font-size: ${convertPixelToRem(40)};
  font-weight: bold;
`;

export const SignOutButton = styled(TransparentButton)`
  span {
    color: white;
    margin-right: ${convertPixelToRem(8)};
    /* optical alignment */
    margin-top: ${convertPixelToRem(3)};
    font-size: ${convertPixelToRem(18)};
  }
`;