import React from 'react'

const UsersForm = ({createNewUser,updateUserById,objectUpdate,handleSubmit,register,reset,sendErrorCreate,sendErrorUpdate,setSendErrorUpdate,setSendErrorCreate}) => {
   
    const defaultValuesForm={
    duration:"",
    genre:"",
    name:"",
    release_date:""
     }
      
    
   
    
    const submit = (data) =>{

      setSendErrorCreate()
      setSendErrorUpdate()
        
    if (objectUpdate!==undefined){
                  updateUserById(objectUpdate.id,data)
                  reset(defaultValuesForm)
        }
    else{
              
        createNewUser(data)
              
        }
      
        reset(defaultValuesForm)
          
    }
    
    
   
  return (
    <>
    { (sendErrorCreate) ? <div className='error-message'> {sendErrorCreate.email}</div>:""}
    { (sendErrorCreate) ? <div className='error-message'> {sendErrorCreate.birthday}</div>:""}
    { (sendErrorUpdate) ? <div className='error-message'> {sendErrorUpdate.email}</div>:""}
    { (sendErrorUpdate) ? <div className='error-message'> {sendErrorUpdate.birthday}</div>:""}
      
    <form onSubmit={handleSubmit(submit)} className='form-content'>
        <div>
            <label htmlFor="fitst_name"><i className="fa-solid fa-user"></i></label>
            <input type="text" id="name" placeholder='first name' required {...register('first_name')}/>
            <label htmlFor="last_name"></label>
            <input type="text" id="last_name" placeholder='last name' required {...register('last_name')}/>
        </div>
        <div>
          <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
          <input type="email" id="email" placeholder='email' required {...register('email')}/>
        </div>
        <div>
          <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
          <input type="password" id="password" placeholder='password' required {...register('password')}/>
        </div>
        <div>
          <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
          <input type="date" id="birthday" required {...register('birthday')}/>
        </div>
        <button>Upload</button>
    </form>
    </>
  )
}

export default UsersForm