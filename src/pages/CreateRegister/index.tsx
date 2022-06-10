import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import { BackButton, SubHeaderWrapper, Title } from './styles';

const CreateRegister: React.FC = () => {
  return (
    <PageWrapper>
      <SubHeaderWrapper>
        <Title>Creating New Register</Title>

        <Link to="/">
          <BackButton>
            <FiArrowLeftCircle />
            <span>All Registers</span>
          </BackButton>
        </Link>
      </SubHeaderWrapper>
    </PageWrapper>
  );
};

export default CreateRegister;
