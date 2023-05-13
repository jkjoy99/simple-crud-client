import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './App.css'


function App() {
  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: "POST", 
      headers: {
        "Content-Type": "application/json"},
        body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then (data => {
      console.log(data);
      if(data.insertedId){
        toast.success('users added successfully',{position: 'top-center'})
          form.reset();
      
      }
    })
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="" placeholder='Your name' required />
        <br />
        <input type="email" name="email" id="" placeholder='Your email....... @' required />
        <br />
        <input type="submit" value="Add User" />
      </form>
                 
      <ToastContainer />
      
    </>
  )
}

export default App
