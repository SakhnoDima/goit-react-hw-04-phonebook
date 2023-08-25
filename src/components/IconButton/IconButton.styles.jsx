import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 50%;

  svg:hover {
    fill: ${({ theme }) => theme.colors.accent};
  }
`;
