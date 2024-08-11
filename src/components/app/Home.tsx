import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <StyledDiv id="Home">
      <div>
        <h1>HTML & CSS Resume creator</h1>
        <StyledP>
          Welcome to the HTML & CSS Resume creator! This tool allows you to
          create a resume using HTML and CSS. You can use the editor to write
          your resume in HTML, and then style it using CSS. The preview will
          update in real-time as you type. When you are done, you can download
          the resume through the button in the header.
          <br />
          I have written an example in the window and included some styling. If
          you would like to start from scratch, you can remove all the input in
          the editor.
          <br />
          If you would like to save your own template, you can copy the HTML and
          CSS from the editor and save it in a text file. Or you could fork the
          repository and add your own template.
          <br />
          If you are interested in the source code for this project, you can
          find it through the button in the header.
          <br />
          If you have any questions or feedback, please feel free to reach out
          to me through the github repository.
          <br />
          <br />
          <strong>Important:</strong>
          The resume is limited to A4 size. If your resume is larger than A4, it
          will be cut off.
          <br />
          <br />
          Thank you for using the HTML & CSS Resume creator!
        </StyledP>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
  background-color: #292c34;
  color: #abb2bf;
  height: 100vh;
  padding-top: 60px;
  border-bottom: 1px solid #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;
