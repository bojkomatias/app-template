/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppSettingsImport } from './routes/_app/settings'
import { Route as AppAppImport } from './routes/_app/app'
import { Route as AppExpensesImport } from './routes/_app/_expenses'
import { Route as AppSettingsIndexImport } from './routes/_app/settings/index'
import { Route as AppSettingsThemeImport } from './routes/_app/settings/theme'
import { Route as AppSettingsProfileImport } from './routes/_app/settings/profile'
import { Route as AppSettingsDisplayImport } from './routes/_app/settings/display'
import { Route as AppExpensesExpensesImport } from './routes/_app/_expenses.expenses'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppSettingsRoute = AppSettingsImport.update({
  path: '/settings',
  getParentRoute: () => AppRoute,
} as any)

const AppAppRoute = AppAppImport.update({
  path: '/app',
  getParentRoute: () => AppRoute,
} as any)

const AppExpensesRoute = AppExpensesImport.update({
  id: '/_expenses',
  getParentRoute: () => AppRoute,
} as any)

const AppSettingsIndexRoute = AppSettingsIndexImport.update({
  path: '/',
  getParentRoute: () => AppSettingsRoute,
} as any)

const AppSettingsThemeRoute = AppSettingsThemeImport.update({
  path: '/theme',
  getParentRoute: () => AppSettingsRoute,
} as any)

const AppSettingsProfileRoute = AppSettingsProfileImport.update({
  path: '/profile',
  getParentRoute: () => AppSettingsRoute,
} as any)

const AppSettingsDisplayRoute = AppSettingsDisplayImport.update({
  path: '/display',
  getParentRoute: () => AppSettingsRoute,
} as any)

const AppExpensesExpensesRoute = AppExpensesExpensesImport.update({
  path: '/expenses',
  getParentRoute: () => AppExpensesRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_app/_expenses': {
      id: '/_app/_expenses'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppExpensesImport
      parentRoute: typeof AppImport
    }
    '/_app/app': {
      id: '/_app/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppAppImport
      parentRoute: typeof AppImport
    }
    '/_app/settings': {
      id: '/_app/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AppSettingsImport
      parentRoute: typeof AppImport
    }
    '/_app/_expenses/expenses': {
      id: '/_app/_expenses/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof AppExpensesExpensesImport
      parentRoute: typeof AppExpensesImport
    }
    '/_app/settings/display': {
      id: '/_app/settings/display'
      path: '/display'
      fullPath: '/settings/display'
      preLoaderRoute: typeof AppSettingsDisplayImport
      parentRoute: typeof AppSettingsImport
    }
    '/_app/settings/profile': {
      id: '/_app/settings/profile'
      path: '/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof AppSettingsProfileImport
      parentRoute: typeof AppSettingsImport
    }
    '/_app/settings/theme': {
      id: '/_app/settings/theme'
      path: '/theme'
      fullPath: '/settings/theme'
      preLoaderRoute: typeof AppSettingsThemeImport
      parentRoute: typeof AppSettingsImport
    }
    '/_app/settings/': {
      id: '/_app/settings/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AppSettingsIndexImport
      parentRoute: typeof AppSettingsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AppRoute: AppRoute.addChildren({
    AppExpensesRoute: AppExpensesRoute.addChildren({
      AppExpensesExpensesRoute,
    }),
    AppAppRoute,
    AppSettingsRoute: AppSettingsRoute.addChildren({
      AppSettingsDisplayRoute,
      AppSettingsProfileRoute,
      AppSettingsThemeRoute,
      AppSettingsIndexRoute,
    }),
  }),
  LoginRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/_expenses",
        "/_app/app",
        "/_app/settings"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_app/_expenses": {
      "filePath": "_app/_expenses.tsx",
      "parent": "/_app",
      "children": [
        "/_app/_expenses/expenses"
      ]
    },
    "/_app/app": {
      "filePath": "_app/app.tsx",
      "parent": "/_app"
    },
    "/_app/settings": {
      "filePath": "_app/settings.tsx",
      "parent": "/_app",
      "children": [
        "/_app/settings/display",
        "/_app/settings/profile",
        "/_app/settings/theme",
        "/_app/settings/"
      ]
    },
    "/_app/_expenses/expenses": {
      "filePath": "_app/_expenses.expenses.tsx",
      "parent": "/_app/_expenses"
    },
    "/_app/settings/display": {
      "filePath": "_app/settings/display.tsx",
      "parent": "/_app/settings"
    },
    "/_app/settings/profile": {
      "filePath": "_app/settings/profile.tsx",
      "parent": "/_app/settings"
    },
    "/_app/settings/theme": {
      "filePath": "_app/settings/theme.tsx",
      "parent": "/_app/settings"
    },
    "/_app/settings/": {
      "filePath": "_app/settings/index.tsx",
      "parent": "/_app/settings"
    }
  }
}
ROUTE_MANIFEST_END */
