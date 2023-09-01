import styled from 'styled-components';

const AdressWrapper = styled.address`
  margin: 0;
  p {
    margin: 0.35rem;
    color: white;
  }
`;

function Address() {
  return (
    <AdressWrapper>
      <p>Medieinstitutet Gothenburg</p>
      <p>Anders Personsgatan 18</p>
      <p>416 64 Göteborg</p>
    </AdressWrapper>
  );
}

export default Address;
