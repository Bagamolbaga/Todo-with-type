import {
  Radio,
  Item,
  RadioButtonLabel,
  RadioButtonLabel_blue,
  RadioButtonLabel_green,
  RadioButtonLabel_orange,
  RadioButtonLabel_red,
  MainContainer,
  Container,
  Input,
  ButtonAdd,
  ListContainer,
  Tittle,
  ButtonComplete,
  ButtonDelete
} from "./App.styled.js";

import { useState } from "react";

export default function App() {
  let [type, setType] = useState([
    { id: 1, type: "IT", color: "green", cheked: false },
    { id: 2, type: "Game", color: "blue", cheked: true },
    { id: 3, type: "Anime", color: "red", cheked: false },
    { id: 4, type: "Other", color: "orange", cheked: false }
  ]);

  let [todos, setTodos] = useState([
    { id: 1, type: "IT", tittle: "Tittle", completed: false }
  ]);

  let [inputVal, setInputVal] = useState("");

  let [filter, setFilter] = useState("IT");

  let radioHandler = (e) => {
    setType(
      type.map((item) => {
        item.cheked = false;
        if (item.id === +e.target.id) {
          item.cheked = true;
        }
        return item;
      })
    );
  };

  let inputHandler = (e) => {
    setInputVal(e.target.value);
  };

  let addTodo = () => {
    if (inputVal.trim()) {
      setTodos(
        todos.concat({
          id: todos.length + 1,
          type: type.filter((item) => item.cheked === true)[0].type,
          tittle: inputVal,
          completed: false
        })
      );
      setInputVal("");
    }
  };

  let deletTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  let completedTodo = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  };

  return (
    <MainContainer>
      <Container>
        {type.map((item) => {
          return (
            <Item key={item.id}>
              <Radio
                id={item.id}
                checked={item.cheked}
                type="radio"
                name="type"
                onChange={radioHandler}
              />
              <RadioButtonLabel color={item.color}>
                <p>{item.type}</p>
              </RadioButtonLabel>
            </Item>
          );
        })}
      </Container>

      <Container>
        <Input value={inputVal} onChange={inputHandler} />
        <ButtonAdd onClick={addTodo}>ADD</ButtonAdd>

        {
          todos.map((item) => {
            return (
              <ListContainer key={item.id} type={item.type}>
                <Container>
                  <Tittle completed={item.completed}>{item.tittle}</Tittle>
                </Container>

                <Container>
                  <ButtonComplete
                    onClick={() => {
                      completedTodo(item.id);
                    }}
                  >
                    OK
                  </ButtonComplete>
                  <ButtonDelete
                    onClick={() => {
                      deletTodo(item.id);
                    }}
                  >
                    Delete
                  </ButtonDelete>
                </Container>
              </ListContainer>
            );
          })
        }
      </Container>
    </MainContainer>
  );
}
