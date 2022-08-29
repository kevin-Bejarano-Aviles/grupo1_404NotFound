import React from 'react'
import '../App.css'
import Header from '../components/Header'

import Layout from '../components/Layout'
import BoxList from '../components/BoxList'

function UserListProfile() {
  return (
    <div className='bg-white  '> {/* page where the list of users is shown */}
      <Header/>
      <BoxList/>

      <Layout/>
    </div>
  )
}

export default  UserListProfile