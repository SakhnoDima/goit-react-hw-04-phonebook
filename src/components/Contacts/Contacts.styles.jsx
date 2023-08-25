import styled from 'styled-components';

export const List = styled.ul`
  margin: 16px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  background-color: rgba(253, 253, 253, 0.862);
  box-shadow: ${({ theme }) => theme.shadows.regular};
  list-style: none;
`;

export const Item = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Error = styled.h2`
  margin-top: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.error};
`;
