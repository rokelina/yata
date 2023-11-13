import styled from 'styled-components';
import ListItem from './ListItem';

const List = styled.ul`
  list-style: none;
  padding: 0.5rem;
  margin: 0;
`;

const ListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 50vw;
  /* background-color: #909090; */
`;

const ListContainer = () => {
  return (
    <ListWrapper>
      <List style={{ flex: 1 }}>
        <ListItem></ListItem>
      </List>
    </ListWrapper>
  );
};
export default ListContainer;
