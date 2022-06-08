import { Container, Logo, SignOutButton } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>Test Project</Logo>

      <SignOutButton>
        <span>Sign out</span>
      </SignOutButton>
    </Container>
  );
};

export default Header;
