import React from 'react';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
  padding: 2rem;
`;

const BackButton = styled.button`
  margin-bottom: 1rem;
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
      <BackButton onClick={onBack}>Go Back</BackButton>
      <h1>{data.title}</h1>
      <p>{data.details}</p>
    </DetailsWrapper>
  );
};

export default SkillsDetails;
