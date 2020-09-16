import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${p => p.theme.size.mobile};
  margin: ${p => p.theme.unit.glass._15} 0;
  padding: 0 ${p => p.theme.unit.glass._3};
  box-sizing: border-box;
  @media ${p => p.theme.device.mobile} {
    width: 100%;
    word-break: break-all;
  }
`;

export const Subject = styled.div`
  text-align: center;
  ${p => p.theme.typography.titleBold};
  margin: 0 0 ${p => p.theme.unit.glass._10};
`;

export const Content = styled.div``;
export const Wrapper = styled.div`
  & ~ & {
    margin-top: ${p => p.theme.unit.glass._8};
  }
`;

export const Cc = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: right;
  margin-top: ${p => p.theme.unit.glass._8};
  ${p => p.theme.typography.labelNormal};
`;

export const Li = styled.li`
  font-weight: 500;
  margin: ${p => p.theme.unit.glass._1} 0;
`;
