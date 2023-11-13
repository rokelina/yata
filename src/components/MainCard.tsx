import styled from 'styled-components';
import ListContainer from './ListContainer';
import Button from './Button';

const CardContainer = styled.main`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(white, #fafafa);
  border-left: solid #eeeeee 1px;
  border-right: solid #eeeeee 1px;
  /* border-radius: 20px; */
  /* border: solid #666 1px; */
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
`;

const TodosFilter = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  background-color: #333;
  margin: 0.5rem 0rem;
`;

const MainCard = () => {
  return (
    <CardContainer>
      <Title>📝 My Todos</Title>
      <Button>+ Add</Button>
      <TodosFilter>
        <Button>In Progress</Button>
        <Button>Completed</Button>
        <Button>All</Button>
      </TodosFilter>
      <ListContainer />
    </CardContainer>
  );
};
export default MainCard;
