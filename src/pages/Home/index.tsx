import PageWrapper from "../../components/PageWrapper";
import { HeadTable, RegistersList, SubTitle, Title } from "./styles";
import { REGISTERS } from "../../utils/fakeRegisters";
import SingleRegister from "./SingleRegister";
import Paginator from "../../components/Paginator";
import { useState } from "react";

export interface Register {
  id: number;
  name: string;
  date: string;
}

const Home: React.FC = () => {
  const [page, setPage] = useState(1);

  return (
  <PageWrapper>
    <Title>Time List</Title>

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