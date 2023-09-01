import React from 'react';
import styled from 'styled-components';
import { IconX } from '@tabler/icons-react';

const DetailsWrapper = styled.div`
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ExpertsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
`;

interface Props {
  data: SkillsData;
  onBack: () => void;
}

interface SkillsData {
  title: string;
  icon: string;
  details: string;
}

const SkillsDetails: React.FC<Props> = ({ data, onBack }) => {
  return (
    <DetailsWrapper>
      <BackButton onClick={onBack}>
        <IconX size={40} />
      </BackButton>
      <h1>{data.title}</h1>
      <Wrapper>
      <p>{data.details}</p>
      <ExpertsWrapper>
      <p>Our experts</p>
      <p>Expert name 1</p>
      <p>Expert name 2</p>
      </ExpertsWrapper>
      </Wrapper>
    </DetailsWrapper>
  );
};

export default SkillsDetails;
