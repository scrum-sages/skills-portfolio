import styled from 'styled-components';

interface InputFieldProps {
  label: string;
  type: 'text' | 'textarea' | 'dropdown'; // Define the possible types
  rows?: number;
  options?: string[];
}

function InputField({ label, type, options, ...rest }: InputFieldProps) {
  const sharedProps = { ...rest };

  return (
    <InputFieldWrapper>
      <InputLabel>{label}</InputLabel>
      {type === 'textarea' && <TextAreaElement {...sharedProps} />}
      {type === 'dropdown' && (
        <DropdownElement {...sharedProps}>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </DropdownElement>
      )}
      {type === 'text' && <InputElement type='text' {...sharedProps} />}
    </InputFieldWrapper>
  );
}
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

const DropdownElement = styled.select`
  border: none;
  border-bottom: 1px solid white;
  background-color: #000000;
  color: white;
  margin-bottom: 3px;
  padding: 5px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
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

export default InputField;
