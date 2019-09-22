import React, { FC } from 'react';
import useDarkMode from 'use-dark-mode';
import {
  DarkModeToggle,
  StyledButton,
  ToggleControl,
  StyledInput,
  StyledLabel
} from './style';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

export const DarkModeToggleBox: FC = () => {
  const darkMode = useDarkMode(false);
  return (
    <DarkModeToggle>
      <StyledButton onClick={darkMode.disable}>☀</StyledButton>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <StyledButton onClick={darkMode.enable}>☾</StyledButton>
    </DarkModeToggle>
  );
};

const Toggle: FC<ToggleProps> = ({ checked, onChange }) => (
  <ToggleControl>
    <StyledInput
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <StyledLabel htmlFor="dmcheck" />
  </ToggleControl>
);
