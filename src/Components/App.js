import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import UserList from './UserList';
import DeleteUser from './DeleteUser';
// import DeleteUser from './DeleteUser'

class App extends React.Component {
  constructor() {
    super()

  const generateId = () => Math.round(Math.random() * 100000000)
  
  this.state = {
    users: [
      { id: generateId(),
        name: "Albert Einstein",
        image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        email: "aeinstein@example.com",
        phone_number: "15555555555"
      },
      { id: generateId(),
        name: "Marcus Swain",
        image_url: "https://www.megamarc.com",
        email: "superduperswain@gmail.com",
        phone_number: "15555555557"
      }
    ]
        }

  // addUser(user) {
  //   this.setState({user: this.state.user.concat([user])})
  // }

  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/ContactList" Component={UserList}/>
          <Route path='/deleteuser' Component={DeleteUser}/>
        </Switch>
      </div>
    )
  }
}


export default App