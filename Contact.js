
import React from 'react'
import {Link} from 'react-router-dom'

import EachNumber from './EachNumber';
import {Route} from 'react-router-dom'
function Contact() {
    return (
        <div>
            Contact
            <div>
                <ul>
        <li>
          <Link to='/contact/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/contact/users'>Users</Link>
        </li>
      </ul>
      <Route path='/contact/posts' component={Posts}/>
      
      <Route path='/contact/users' component={Users}/>
            </div>
        </div>
    )
}

const Users = () => {
  return <h1>Admin Users</h1>;
};

const Posts = () => {
  return (
    <div>
      <h1>Admin Posts</h1>
    </div>
  );
};


export default Contact
