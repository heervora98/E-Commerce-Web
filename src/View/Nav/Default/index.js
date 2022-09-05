import React from 'react'
const TopNav = React.lazy(() => import('../Top'))
const BottomNav = React.lazy(()=> import('../BottomNav'))

const DefaultNav = () => {
  return (
    <>
      <TopNav/>
      <BottomNav/>
    </>
  )
}

export default DefaultNav
