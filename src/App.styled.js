import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const Container = styled.div`
`

export const Radio = styled.input`
  cursor: pointer;
  width: 17px;
  margin-right: 10px;
  height: 17px;
  &:hover {
    background-color: green;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 150px;
`
export const RadioButtonLabel = styled.label`
  color: ${props => props.color || "palevioletred"};
`

export const RadioButtonLabel_green = styled.label`
  color: green;
`
export const RadioButtonLabel_blue = styled.label`
  color: blue;
`
export const RadioButtonLabel_red = styled.label`
  color: red;
`
export const RadioButtonLabel_orange = styled.label`
  color: orange;
`

export const Input = styled.input`
  width: 500px;
  height: 30px;
  outline: none;
`

export const ButtonAdd = styled.button`
  width: 50px;
  height: 30px;
  background: none;
  border: 1px solid white;;
  outline: none;
  cursor: pointer;
  &:hover {
    border: 1px solid blueviolet;
  }
`

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  margin-top: 10px;
  border-left: 3px solid ${props => (props.type === 'IT')? 'green' : (props.type === 'Game')? 'blue' : (props.type === 'Anime')? 'red' : 'orange'};


`

export const Tittle = styled.p`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${props => props.completed && 'green'};
`
export const ButtonComplete = styled(ButtonAdd)`
  height: 25px;
  margin-left: 5px;
`

export const ButtonDelete = styled(ButtonComplete)`
`




