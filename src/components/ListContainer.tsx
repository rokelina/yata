import styled from 'styled-components';
import ListItem from './ListItem';

const List = styled.ul`
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 50vw;
`;

const ListContainer = () => {
  return (
    <List>
      <ListItem></ListItem>
    </List>
  );
};
export default ListContainer;
