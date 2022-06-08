import Header from '../Header';

import { Container, MaxWidthWrapper } from './styles';

const PageWrapper: React.FC = ({ children }) => (
  <Container>
    <Header />
    <MaxWidthWrapper>{children}</MaxWidthWrapper>
  </Container>
);

export default PageWrapper;
