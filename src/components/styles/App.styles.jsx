import styled from 'styled-components';

export const MainPage = styled.div`
  margin: 40px auto;
  padding: 16px;
  width: ${({ theme }) => theme.spacing(200)};
  background-color: rgba(253, 253, 253, 0.862);
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
export const Button = styled.button`
  display: block;
  margin: 80px auto 0;
  width: 150px;
  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
