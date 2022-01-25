import styled from "styled-components";

const Input = ({ attr }) => {
  return (
    <Wrapper>
      <label>{attr.title}</label>
      <input {...attr} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  height: 50px;

  label {
    font-size: 20px;
    font-weight: bold;
    margin-right: 6px;
  }
`;
