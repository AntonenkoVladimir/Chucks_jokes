import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulnZlFWADfC2oLS0jBe2-WPsJ_jFBaYZZVw&usqp=CAU");
`;

export const Button = styled.button`
  position: fixed;
  left: 0;
  top: 0;
  margin: 10px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 30px;
  background: rgb(223, 186, 84);
  
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

export const Jokes = styled.div`
  display: flex;
  width: 100vw;
  height: fit-content;
  flex-wrap: wrap;
  margin-top: 70px;
  align-items: center;
`;

export const Joke = styled.div`
  padding: 12px 16px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.25rem;
  width: 240px;
  height: fit-content;
  margin: 16px;
  border-radius: 8px;
  color: white;
  background: rgba(0, 0, 0, 0.5);

  img {
    float: right;
    height: 60px;
  }
`;
