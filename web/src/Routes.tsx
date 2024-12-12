import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser" roles="site_manager">
        <PrivateSet unauthenticated="home" roles="site_manager">
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </PrivateSet>
      </Set>
      <Set wrap={ScaffoldLayout} title="SiteDiaries" titleTo="siteDiaries" buttonLabel="New SiteDiary" buttonTo="newSiteDiary">
        <PrivateSet unauthenticated="home">
          <PrivateSet unauthenticated="home" roles="site_manager">
            <Route path="/site-diaries/new" page={SiteDiaryNewSiteDiaryPage} name="newSiteDiary" />
            <Route path="/site-diaries/{id:Int}/edit" page={SiteDiaryEditSiteDiaryPage} name="editSiteDiary" />
          </PrivateSet>
          <Route path="/site-diaries/{id:Int}" page={SiteDiarySiteDiaryPage} name="siteDiary" />
          <Route path="/site-diaries" page={SiteDiarySiteDiariesPage} name="siteDiaries" />
        </PrivateSet>
        <Route notfound page={NotFoundPage} />
        <Route path="/" page={HomePage} name="home" />
      </Set>
    </Router>
  )
}

export default Routes
