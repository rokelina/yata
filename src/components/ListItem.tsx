import styled from 'styled-components';
import Button from './Button';

const Li = styled.li`
  padding: 0.3rem;
  margin: 0.5rem;
  border: solid #666 1px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #333;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const LiForm = styled.form`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LiTextInput = styled.input.attrs({ type: 'text' })`
  flex: 1;
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  &:focus {
    background-color: #f0f0f0;
  }
`;

const LiCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0.5rem;
`;

const LiTimeStamp = styled.p`
  align-self: flex-end;
  font-size: 0.5rem;
  color: grey;
  margin: 0;
  padding-right: 0.5rem;
`;

const ListItem = () => {
  return (
    <Li>
      <LiForm action="" onSubmit={(e) => e.preventDefault()}>
        <LiCheckbox />
        <LiTextInput placeholder="Enter todo..."></LiTextInput>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </LiForm>
      <LiTimeStamp>Date Created: Now</LiTimeStamp>
    </Li>
  );
};
export default ListItem;
