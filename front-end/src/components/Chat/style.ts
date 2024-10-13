import styled from 'styled-components'

export const ChatContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: fixed;
  bottom: 20px;
  right: 20px;
`

export const ChatMessages = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const ChatForm = styled.form`

`

export const ChatInput = styled.input`
  padding: 10px;
  display: flex;
  border-top: 1px solid #ccc;

  &:input {
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: #f1f1f1;
}
`

export const ChatButtonSubmit = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
`