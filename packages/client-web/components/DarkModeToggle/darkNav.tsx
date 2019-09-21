import React from 'react';
import useDarkMode from 'use-dark-mode';
import {
  DarkModeToggle,
  StyledButton,
  ToggleControl,
  StyledInput,
  StyledLabel
} from './style';

export const DarkModeToggleBox = () => {
  const darkMode = useDarkMode(false);
  return (
    <DarkModeToggle>
      <StyledButton onClick={darkMode.disable}>☀</StyledButton>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <StyledButton onClick={darkMode.enable}>☾</StyledButton>
    </DarkModeToggle>
  );
};

const Toggle = ({
  checked,
  onChange
}: {
  checked: boolean;
  onChange: () => void;
}) => (
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
