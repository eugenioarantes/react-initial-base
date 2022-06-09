import { convertPixelToRem, flex, getPadding } from 'css-blocks-styled-components';
import styled from 'styled-components';

import { TransparentButton } from '../misc/Buttons';

export const Container = styled.header`
  ${getPadding(0, 65)}
  ${flex.between}
  background: #111111;

  height: ${convertPixelToRem(96)};
`;

export const Logo = styled.span`
  color: #c1c1c1;
  font-size: ${convertPixelToRem(40)};
  font-weight: bold;
  transition: color 0.5s ease;

  :hover {
    color: #fff;
  }
`;

export const SignOutButton = styled(TransparentButton)`
  a {
    color: #c1c1c1;
    margin-right: ${convertPixelToRem(8)};
    /* optical alignment */
    margin-top: ${convertPixelToRem(3)};
    font-size: ${convertPixelToRem(20)};
    transition: color 0.5s ease;

    :hover {
      color: #fff;
    }
  }
`;
