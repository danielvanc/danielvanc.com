import React from 'react'
import MobileMenu from '../Shared/MobileMonthsMenu'
import DesktopList from '../Shared/DesktopMonthsMenu'

const ListMonths = (props) => {
  const post = props.data;
  return (
    <>
      <MobileMenu data={post} />
      <DesktopList data={post} latestPost={props.latestPost} />
    </>
  )
}

export default ListMonths