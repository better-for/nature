import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  margin: ${p => p.theme.unit.glass._4};
  ${p => p.theme.typography.subTitleBold};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.unit.glass._5};
  @media ${p => p.theme.device.mobile} {
    width: 100%;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: ${p => p.theme.unit.glass._3};
  @media ${p => p.theme.device.mobile} {
    flex-direction: column;
    top: 0;
  }
`;
