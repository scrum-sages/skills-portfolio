import styled from 'styled-components';

interface InputFieldProps {
  label: string;
  type: string;
}

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const InputLabel = styled.label`
  color: white;
  margin-bottom: 5px;
`;

const InputElement = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 5px;
`;

function InputField({ label, ...rest }: InputFieldProps) {
  return (
    <InputFieldWrapper>
      <InputLabel>{label}</InputLabel>
      <InputElement {...rest} />
    </InputFieldWrapper>
  );
}

export default InputField;
