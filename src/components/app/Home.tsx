import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <StyledDiv id="Home">
      <h1>Home Page</h1>
      <StyledP>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
      </StyledP>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
  background-color: #292c34;
  color: #abb2bf;
  height: 800px;
  padding-top: 60px;
  border-bottom: 1px solid #0f0f0f;
`;

const StyledP = styled.p`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;
