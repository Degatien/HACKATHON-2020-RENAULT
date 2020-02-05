import React from "react";

import useSWR, { SWRConfig } from 'swr'



function Dashboard () {
    const { data: subway } = useSWR('http://team14.xp65.renault-digital.com/api/graph/processed/subway.json')
    // ...
  }
  
export default function SubwayJson () {

  return (
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (...args) => fetch(...args).then(res => res.json())
      }}
    >
      <Dashboard />
    </SWRConfig>
  )
}

