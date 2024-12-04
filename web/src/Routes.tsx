import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

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
    <Router>
      <Set wrap={ScaffoldLayout} title="SiteDiaries" titleTo="siteDiaries" buttonLabel="New SiteDiary" buttonTo="newSiteDiary">
        <Route path="/site-diaries/new" page={SiteDiaryNewSiteDiaryPage} name="newSiteDiary" />
        <Route path="/site-diaries/{id:Int}/edit" page={SiteDiaryEditSiteDiaryPage} name="editSiteDiary" />
        <Route path="/site-diaries/{id:Int}" page={SiteDiarySiteDiaryPage} name="siteDiary" />
        <Route path="/site-diaries" page={SiteDiarySiteDiariesPage} name="siteDiaries" />
        <Route notfound page={NotFoundPage} />
        <Route path="/" page={HomePage} name="home" />
      </Set>
    </Router>
  )
}

export default Routes
