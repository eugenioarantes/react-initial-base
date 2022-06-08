import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  min-height: 100%;
  padding-bottom: ${convertPixelToRem(25)};
  background: #252525;
`;

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;

`;
