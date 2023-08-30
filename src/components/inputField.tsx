import styled from 'styled-components';

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
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

const TextAreaElement = styled.textarea`
  border: none;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 5px;
  resize: none;
  width: 100% !important;
  height: 8rem !important;
  @media (min-width: 768px) {
    height: 13rem !important;
  }
`;

interface InputFieldProps {
  label: string;
  type: string;
  rows?: number;
  // Other shared props can be included here
}

function InputField({ label, type, ...rest }: InputFieldProps) {
  const sharedProps = { ...rest };
  if (type === 'textarea') {
    const { rows, ...textareaProps } = sharedProps;
    return (
      <InputFieldWrapper>
        <InputLabel>{label}</InputLabel>
        <TextAreaElement rows={rows} {...textareaProps} />
      </InputFieldWrapper>
    );
  }
  return (
    <InputFieldWrapper>
      <InputLabel>{label}</InputLabel>
      <InputElement type={type} {...sharedProps} />
    </InputFieldWrapper>
  );
}

export default InputField;
