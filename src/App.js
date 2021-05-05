import Main from "./components/Main";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vw;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Container>
        <Main></Main>
      </Container>{" "}
    </>
  );
}

export default App;
