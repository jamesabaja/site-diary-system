# 🏗️✍️ Site Diary

Hi, team! This is my version of the site diary implementation using **RedwoodJS** (development), **Supabase** (database), and **Vercel** (deployment).

## 🔗 Quick Links

* [GitHub repo](https://github.com/jamesabaja/site-diary-system)
* [Deployed instance](https://site-diary-system-ouof17mn8-jamesabajas-projects.vercel.app/)

## 🚀 Summary of Features Implemented

### Task 1: Get started

| Task  | Done? |
| ------------- | ------------- |
| I have a forked repository that is running  | ✅ |
| I have a Postgres database running locally via Supabase or otherwise  | ✅ |
| I have connected my local development server up to my database | ✅ |
| My local development server is running and available | ✅ |

### Task 2: Extend the site diary system

| Task  | Done? |
| ------------- | ------------- |
| I can view all of my site diaries in a list view	| ✅ |
| I can click into an individual site diary and view it’s details |	✅ |
| I can edit an individual site diary’s details |	✅ |
| (Optional) I can upload attachments to my site diary | |
| (Optional) I can see, log and edit the visitors who came onto the worksite that day	| |
| (Optional) I can see, log and edit any incidents that happened on the worksite that day	| |
| I have Redwood scenario unit tests for my basic flows	| |

#### Task 3: Create a login system
| Task  | Done? |
| ------------- | ------------- |
| I have created a Clerk account and created a new application | ✅ |
| I have added the Clerk keys into my local development environment | ✅ |
| I can login and sign up via Clerk’s provided screens | ✅ |
| I can’t view the site diary list unless i’m logged in | ✅ |
| My GraphQL server is successfully authenticating requests made with tokens generated by Clerk | ✅ |

### Task 4: Create some user roles
| Task  | Done? |
| ------------- | ------------- |
| As a site manager, I can manage all users and what role they have set | ✅ |
| As a project manager, I cannot access the user management screen | ✅ |
| As a site manager or a project manager, I can view and create site diaries | ✅ |
| My GraphQL server will not allow me to call the list users GraphQL query if i’m a project manager	| |

### Task 5: Deploy your Redwood application
| Task  | Done? |
| ------------- | ------------- |
| I can access my application from a URL | ✅ |
| My application is connected to a database that is running in the cloud | ✅ |
| I can login and use my application as I could locally | ✅ |
| (Optional) My code will deploy on every commit to master | ✅ |

## 🚧 Caveats

- By default, since Google was the sole provider used for authentication, users created would be assigned as `site_managers` initially. But they can be updated in the users page and the project manager restrictions should apply to the users once assigned.
- User queries can't be fully restricted to site managers yet, as one feature of the app is to create a new user row that maps to a Clerk instance (once authenticated) in the database. But the frontend restricts this for now to redirect non-site managers back to the appropriate pages if the users page has been accessed.

## 🛠️ Future Improvements

This is essentially a section of "if I had more time, I would...":

- Redesign user and site diary pages instead of being displayed as tables (row-wide cards might be better for this instance especially for the site diaries)
- Add toast notifications for unauthorized/unauthenticated redirects (e.g. display modal messages if an unauthenticated user was redirected back to the home page, or an unauthorized but authenticated user was redirected back to the site diaries page)
- Add search, filter, and pagination for the site diary and user pages