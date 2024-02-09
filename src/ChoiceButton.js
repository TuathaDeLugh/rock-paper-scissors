import React from 'react';
import styled from 'styled-components';

const ChoiceButton = ({ choice, icon, onClick, disabled }) => {
    return (
      <StyledButton disabled={disabled} onClick={() => onClick(choice)}>
        {icon}
      </StyledButton>
    );
  };

const StyledButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

export default ChoiceButton;