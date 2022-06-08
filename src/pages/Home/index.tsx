import PageWrapper from "../../components/PageWrapper";
import { RegistersList, Title } from "./styles";
import { REGISTERS } from "../../utils/fakeRegisters";
import SingleRegister from "./SingleRegister";

export interface Register {
  id: number;
  name: string;
  date: string;
}

const Home: React.FC = () => (
  <PageWrapper>
    <Title>Registers List</Title>

    <RegistersList>
      {REGISTERS.map((register) => (
        <SingleRegister key={register.id} register={register} />
      ))}
    </RegistersList>
  </PageWrapper>
);

export default Home;