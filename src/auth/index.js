import * as React from 'react'
import {ReactQueryConfigProvider} from 'react-query'
import {AuthProvider} from './context'

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
      if (error.status === 404) return false
      else if (failureCount < 2) return true
      else return false
    },
  },
}

export default function AppProvider({children}) {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryConfigProvider>
  )
}
