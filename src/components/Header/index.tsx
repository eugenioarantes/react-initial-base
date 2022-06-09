import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { Container, Logo, SignOutButton } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Logo>Bus Companies Project</Logo>

      <SignOutButton onClick={signOut}>
        <Link to="/login">Sign out</Link>
      </SignOutButton>
    </Container>
  );
};

export default Header;
