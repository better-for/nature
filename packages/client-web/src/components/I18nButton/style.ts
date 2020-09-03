import styled from 'styled-components';

export const I18nButton = styled.button<{ isDarkTheme: boolean }>`
  border: 2px solid ${p => p.theme.color.primaryVariant};
  border-radius: 20px;
  background-color: ${p =>
    p.isDarkTheme ? p.theme.color.black : p.theme.color.white};
  cursor: pointer;
  padding: ${p => p.theme.unit.leaf._1} ${p => p.theme.unit.leaf._2};
  ${p => p.theme.typography.labelBold};
`;
