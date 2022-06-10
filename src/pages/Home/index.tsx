import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import { ButtonContainer, HeaderTitle, HeadTable, RegistersList, SubTitle, Title } from './styles';
import { REGISTERS } from '../../utils/fakeRegisters';
import SingleRegister from './SingleRegister';
import Paginator from '../../components/Paginator';
import ActionButton from '../../components/ActionButton';

export interface Register {
  id: number;
  name: string;
  date: string;
}

const Home: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
    <PageWrapper>
      <HeaderTitle>
        <Title>Time List</Title>

        <ButtonContainer>
          <Link to="/create-register">
            <ActionButton>Create new</ActionButton>
          </Link>
        </ButtonContainer>
      </HeaderTitle>

      <HeadTable>
        <SubTitle>Bus:</SubTitle>
        <SubTitle>Time:</SubTitle>
      </HeadTable>

      <Paginator
        totalCountOfRegisters={REGISTERS.length}
        registersPerPage={5}
        currentPage={page}
        onPageChange={setPage}
        items={REGISTERS}
      >
        {(displayRegisters) => (
          <RegistersList>
            {displayRegisters.map((register) => (
              <SingleRegister key={register.id} register={register} />
            ))}
          </RegistersList>
        )}
      </Paginator>
    </PageWrapper>
  );
};

export default Home;
