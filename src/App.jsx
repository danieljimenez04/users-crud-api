import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import { useForm } from "react-hook-form"

function App() {
  const [users, setUsers] = useState()
  const [objectUpdate, setObjectUpdate] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [sendErrorCreate, setSendErrorCreate] = useState()
  const [sendErrorUpdate, setSendErrorUpdate] = useState()
 

  const {register,handleSubmit,reset}=useForm()

  const getAllUsers=()=>{
    const URL='https://users-crud1.herokuapp.com/users/'

    axios.get(URL)
         .then(res=>setUsers(res.data))
         .catch(err=>console.log(err))

  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  

  const createNewUser=(newUser)=>{
    const URL='https://users-crud1.herokuapp.com/users/'
    axios.post(URL,newUser)
        .then(res=>{
          console.log(res.data)
          getAllUsers()
        })
        .catch(err=>{
                    setSendErrorCreate(err.response.data)
                    console.log(err)
                    })

  }

  const deleteUserById=(id)=>{
    const URL=`https://users-crud1.herokuapp.com/users/${id}/`

    axios.delete(URL)
         .then(res=>{
          console.log(res.data)
          getAllUsers()
        })
        .catch(err=>console.log(err))

  }

  const updateUserById=(id,updateUser)=>{
    const URL=`https://users-crud1.herokuapp.com/users/${id}/`

    axios.patch(URL,updateUser)
        .then(res=>{
              console.log(res.data)
              getAllUsers()
              setIsShowForm(false)
    })
        .catch(err=>{
              setSendErrorUpdate(err.response.data)
              console.log(err)
                    }
                    
              )

  }

  

  const showForm=()=>{
    const obj={
      duration:'',
      genre:'',
      name:'',
      release_date:''
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }
  
  

  return (
    <div className='App'>
      <button onClick={showForm} className='create-register'>{isShowForm ? 'Hide the form' : 'Create a register'}</button>
      <div>
        {
        isShowForm
        &&
        <UsersForm
        createNewUser={createNewUser}
        updateUserById={updateUserById}
        objectUpdate={objectUpdate}
        handleSubmit={handleSubmit}
        reset={reset}
        register={register}
        sendErrorCreate={sendErrorCreate}
        sendErrorUpdate={sendErrorUpdate}
        setSendErrorCreate={setSendErrorCreate}
        setSendErrorUpdate={setSendErrorUpdate}
         />

        }
      </div>
      


      
      <div className='users-content'>
        {
          users?.map(user=>
            <UsersList
            user={user}
            key={user.id}
            deleteUserById={deleteUserById}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
            />
            
            )
        }
      </div>
    </div>
  )
}

export default App
