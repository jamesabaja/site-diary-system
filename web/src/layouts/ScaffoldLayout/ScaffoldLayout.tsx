import { IconCalendar, IconHome, IconUsersGroup } from '@tabler/icons-react'
import { styled } from 'styled-components'

import { Link } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import logo from '../../..//public/logo.svg'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colour.neutral.surface};
  display: flex;
  height: 100%;
  min-height: 100vh;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 1rem;
`

const SidebarWrapper = styled.aside`
  grid-area: side;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colour.neutral.white};
  display: flex;
  flex-direction: column;
  z-index: 1039;
  width: 256px;
  bottom: 0;
  min-height: 100vh;
  height: 100vh;
`

const MainSection = styled.section`
  position: relative; // for menu overlay
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  padding: 1rem;
`

const SectionTitle = styled.div`
  ${({ theme }) => theme.font.caption02};
  width: 100%;
  color: ${({ theme }) => theme.colour.secondary._400};
  padding-bottom: 0;
  margin-top: 2rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;

  &:first-child {
    margin-top: 0;
  }
  display: flex;
  align-items: center;

  padding: 0 1rem;
`

const NavItemSpan = styled.span`
  padding: 0.5rem 0.8rem;
  ${({ theme }) => theme.font.subheading02};
  font-weight: 400;
  color: ${({ theme }) => theme.colour.secondary._900};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  gap: 0.625rem;
  align-items: center;
  cursor: pointer;

  & svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.colour.secondary._900};
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colour.neutral.surface};
  }
`

const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  width: 100%;
`

const Sidebar = () => {
  const { currentUser } = useAuth()

  return (
    <SidebarWrapper>
      <MainSection>
        <Logo>
          <img src={logo} alt="BuildPass" width={120} />
        </Logo>

        <Link to="/">
          <NavItemSpan>
            <IconHome />
            <Text>Home</Text>
          </NavItemSpan>
        </Link>
        <SectionTitle>Project Management</SectionTitle>
        <Link to="/site-diaries">
          <NavItemSpan>
            <IconCalendar />
            <Text>Site diaries</Text>
          </NavItemSpan>
        </Link>
        {(currentUser?.roles ?? [])?.includes?.('site_manager') && (
          <>
            <SectionTitle>User Management</SectionTitle>
            <Link to="/users">
              <NavItemSpan>
                <IconUsersGroup />
                <Text>Users</Text>
              </NavItemSpan>
            </Link>
          </>
        )}
      </MainSection>
    </SidebarWrapper>
  )
}

type LayoutProps = {
  children: React.ReactNode
}

const ScaffoldLayout = ({ children }: LayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Wrapper>
        <Sidebar />
        <MainContainer>
          <main className="rw-main">{children}</main>
        </MainContainer>
      </Wrapper>
    </div>
  )
}

export default ScaffoldLayout
