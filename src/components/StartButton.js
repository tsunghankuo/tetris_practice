import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick = {callback}>開始遊戲</StyledStartButton>
)

export default StartButton;
