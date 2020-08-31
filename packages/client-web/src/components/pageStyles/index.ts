import styled from 'styled-components';

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
  width: ${p => p.theme.unit.glass._31};
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: 0;
  box-sizing: border-box;
  color: ${p => p.theme.color.gray};
  position: relative;
  transition: color 0.25s;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
  }

  &:hover {
    color: ${p => p.theme.color.primaryVariant};
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: ${p => p.theme.color.primaryVariant};
    border-right-color: ${p => p.theme.color.primaryVariant};
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: ${p => p.theme.color.primaryVariant};
    border-left-color: ${p => p.theme.color.primaryVariant};
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  }
  @media ${p => p.theme.device.mobile} {
    box-shadow: inset 0 0 0 2px ${p => p.theme.color.primaryVariant};
  }
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
