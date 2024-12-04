import styled from 'styled-components'

export const PageTitle = styled.span`
  ${({ theme }) => theme.font.heading02}
  color: ${({ theme }) => theme.colour.secondary._900};
  margin-right: 1rem;
  display: inline-block;
  margin-bottom: 2rem;
`
