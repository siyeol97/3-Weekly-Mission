'use client';

import styled from 'styled-components';
import SharedInfo from './components/SharedInfo';
import SharedBody from './components/SharedBody';

export default function SharedPage() {
  return (
    <>
      <SharedInfo />
      <SharedBodyContainer>
        <SharedBody />
      </SharedBodyContainer>
    </>
  );
}

const SharedBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 40px;
  @media (max-width: 1199px) {
    & {
      padding: 40px 32px;
    }
  }
  @media (max-width: 767px) {
    & {
      padding: 20px 32px;
    }
  }
`;
