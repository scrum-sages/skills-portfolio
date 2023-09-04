import React from 'react';
import styled from 'styled-components';
import { IconX } from '@tabler/icons-react';
import { icons } from './Skills';

const DetailsWrapper = styled.div`
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  margin-left: -1rem;
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ExpertsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const ExpertsText = styled.p`
    margin: 0;
`;

const ExpertsTitle = styled.p`
    margin-top: 1rem;
`;

const Text = styled.p`
  max-width: 20rem;
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
      <Wrapper>
      <IconWrapper>{icons[data.icon]}</IconWrapper>
      <BackButton onClick={onBack}>
        <IconX size={40} />
      </BackButton>
      </Wrapper>
      <h2>{data.title}</h2>
      <ResponsiveWrapper>
      <Text>{data.details}</Text>
      <ExpertsWrapper>
      <ExpertsTitle>Our experts</ExpertsTitle>
      <ExpertsText>Expert name 1</ExpertsText>
      <ExpertsText>Expert name 2</ExpertsText>
      </ExpertsWrapper>
      </ResponsiveWrapper>
    </DetailsWrapper>
  );
};

export default SkillsDetails;
