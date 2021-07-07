import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SearchUser = ({ userName }) => {
  const history = useHistory()
  const [userLogin, setUserLogin] = useState('')
  return (
    <div>
      {!!userName || (
        <div className="w-full shadow-sm h-screen flex items-center justify-center">
          <input
            type="text"
            name="text"
            className="w-1/4 border-blue-500 border-2 rounded-md"
            placeholder="Please Enter user name"
            value={userLogin}
            onKeyPress={(e) => e.key === 'Enter' && history.push(`/${userLogin}`)}
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <Link to={`/${userLogin}`} className="bg-green-500 mx-2 p-2 text-white rounded-md">
            {' '}
            Search{' '}
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchUser
