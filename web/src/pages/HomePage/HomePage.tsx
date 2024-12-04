import styled from 'styled-components'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { PageTitle } from 'src/components/PageTitle'

const Container = styled.div``

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colour.secondary._700};
`

const List = styled.ul`
  line-height: 1.6;

  li {
    margin-bottom: 0.75rem;
    position: relative;

    &:before {
      content: '•';
      position: absolute;
      left: -1rem;
      color: ${({ theme }) => theme.colour.primary._500};
    }
  }
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colour.primary._700};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colour.primary._900};
    text-decoration: underline;
  }
`

const QuickLinksBox = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colour.neutral.surface};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colour.neutral.border};
`

const QuickLinksTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colour.secondary._900};
  font-weight: 600;
`

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.colour.primary._700};
  transition: color 0.2s ease;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colour.primary._900};
    text-decoration: underline;
  }
`

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="BuildPass Developer Assessment" />

      <PageTitle>Welcome to the BuildPass Developer Assessment</PageTitle>

      <Container>
        <Text>
          This is a boilerplate RedwoodJS application for the BuildPass
          developer assessment. The assessment involves building:
        </Text>

        <List>
          <li>A site diary system for construction sites</li>
          <li>Authentication using Clerk</li>
          <li>Role-based access control</li>
          <li>Deployment to a hosting provider</li>
        </List>

        <QuickLinksBox>
          <QuickLinksTitle>Quick Links:</QuickLinksTitle>
          <List>
            <li>
              <ExternalLink
                href="https://docs.redwoodjs.com"
                target="_blank"
                rel="noreferrer"
              >
                RedwoodJS Documentation
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://clerk.com/docs"
                target="_blank"
                rel="noreferrer"
              >
                Clerk Documentation
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://bp-hq.notion.site/Senior-Full-Stack-Developer-Assessment-BuildPass-723f537719534cb8a2d5a0665f639e9f"
                target="_blank"
                rel="noreferrer"
              >
                Assessment Details
              </ExternalLink>
            </li>
          </List>
        </QuickLinksBox>
      </Container>
    </>
  )
}

export default HomePage
