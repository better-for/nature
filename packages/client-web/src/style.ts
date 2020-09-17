import styled, { css } from 'styled-components';
import Logo from 'src/components/Logo';

export const hoverEffect = css`
  background: none;
  border: 0;
  box-sizing: border-box;
  position: relative;

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
`;

export const Main = styled.div`
  width: 100%;
  color: ${p => p.theme.color.gray};
`;

export const Point = styled.div`
  display: inline-flex;
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
  @media ${p => p.theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    & > * ~ * {
      margin-top: ${p => p.theme.unit.glass._3};
    }
  }
`;

export const SampleCard = styled.button`
  padding: ${p => p.theme.unit.leaf._4};
  width: ${p => p.theme.unit.glass._31};
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * ~ * {
    margin-top: ${p => p.theme.unit.leaf._3};
  }
  ${hoverEffect};
  @media ${p => p.theme.device.mobile} {
    box-shadow: inset 0 0 0 2px ${p => p.theme.color.primaryVariant};
  }
`;

export const ItemTitle = styled.div`
  color: ${p => p.theme.color.secondary};
  ${p => p.theme.typography.paragraphBold};
`;

export const ItemDescription = styled.div`
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

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SLContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.span`
  border-radius: ${p => p.theme.unit.glass._5};
  float: left;
  height: ${p => p.theme.unit.glass._5};
  width: ${p => p.theme.unit.glass._5};
  background-color: ${p => p.theme.color.white};
  background-size: cover;
  border: 2px solid #ddd;
`;

export const Email = styled.span`
  margin-right: ${p => p.theme.unit.glass._2};
  margin-left: ${p => p.theme.unit.glass._1};
  font-weight: 500;
`;

const signButton = css`
  color: ${p => p.theme.color.white};
  border: none;
  border-radius: ${p => p.theme.unit.leaf._1};
  cursor: pointer;
  font-size: ${p => p.theme.unit.glass._2};
  padding: ${p => p.theme.unit.glass._1} ${p => p.theme.unit.glass._2};
`;

export const SignInButton = styled.button`
  ${signButton};
  background-color: #1eb1fc;
  &:hover {
    background-color: #1b9fe2;
  }
`;

export const SignOutButton = styled.button`
  ${signButton};
  background-color: #333;
  &:hover {
    background-color: #555;
  }
`;

export const UserCard = styled.p`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  & path {
    animation-iteration-count: infinite;
  }
`;
