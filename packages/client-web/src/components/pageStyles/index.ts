import { styled } from '../../../src/element';

export const Main = styled.div`
  width: 100%;
  color: ${p => p.theme.color.gray};
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  margin: 0;
  padding-top: ${p => p.theme.unit.glass._10};
  ${p => p.theme.typography.heroBold};
`;

export const Point = styled.a`
  color: ${p => p.theme.color.primary};
  margin-left: ${p => p.theme.unit.leaf._3};
`;

export const Description = styled.h2`
  text-align: center;
`;

export const Row = styled.div`
  max-width: ${p => p.theme.size.mobile};
  margin: ${p => p.theme.unit.glass._10} auto ${p => p.theme.unit.glass._5};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SampleCard = styled.a`
  padding: ${p => p.theme.unit.leaf._4} ${p => p.theme.unit.leaf._4}
    ${p => p.theme.unit.leaf._5};
  width: ${p => p.theme.unit.glass._26};
  text-align: left;
  text-decoration: none;
  box-shadow: 0 0 0px 1px ${p => p.theme.color.gray};
  &:hover {
    box-shadow: 0 0 1px 1px ${p => p.theme.color.primaryVariant};
  }
  cursor: pointer;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: ${p => p.theme.color.secondary};
  ${p => p.theme.typography.paragraphNormal};
`;

export const ItemDescription = styled.p`
  margin: 0;
  padding: ${p => p.theme.unit.leaf._3} 0 0;
  ${p => p.theme.typography.labelNormal};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${p => p.theme.unit.glass._10} 10% 0;
  @media ${p => p.theme.device.mobile} {
    margin: ${p => p.theme.unit.glass._10} ${p => p.theme.unit.leaf._4};
  }
`;
