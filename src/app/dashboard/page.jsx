import Navigator from '@/components/navigator'
import React from 'react'

const Dashboard = () => {
    const linkItem = [
        {
            linkNavigate: "/dashboard",
            linkName:"Dashboard"
        }
    ]
  return (
      <>
      <Navigator title='Dashboard' linkItem={linkItem}/>
      </>
  )
}

export default Dashboard