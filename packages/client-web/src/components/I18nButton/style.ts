import { styled } from '../../element';

export const I18nButton = styled.button<{ isDarkTheme: boolean }>`
  border: 2px solid ${p => p.theme.color.primaryVariant};
  border-radius: 20px;
  outline: none;
  background-color: ${p =>
    p.isDarkTheme ? p.theme.color.black : p.theme.color.white};
  width: 80px;
  height: 40px;
  cursor: pointer;
  ${p => p.theme.typography.labelBold};
`;
