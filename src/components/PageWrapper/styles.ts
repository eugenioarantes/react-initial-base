import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  min-height: 100%;
  background: #252525;
  padding-bottom: ${convertPixelToRem(25)};
`;

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;

`;
