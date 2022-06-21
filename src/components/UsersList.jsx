import React from 'react'

const UsersList = ({user,deleteUserById,setObjectUpdate,setIsShowForm,reset}) => {

  const updateUser=()=>{
    setIsShowForm(true)
    const obj={
      email:user.email,
      password:user.password,
      first_name:user.first_name,
      last_name:user.last_name,
      birthday:user.birthday
    }
    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <article className='user'>
        <h2 className='user-name'>{`${user.first_name} ${user.last_name}`}</h2>
        <span className='user-mail'>{user.email}</span>
        <span className='user-birthday'><i className="fa-solid fa-cake-candles"></i>{user.birthday}</span>
        <div className='user-button'>
            <button onClick={()=>deleteUserById(user.id)}><i className='fa-solid fa-trash'></i></button>
            <button onClick={updateUser}><i className='fa-solid fa-pen'></i></button>
        </div>
    </article>
  )
}

export default UsersList