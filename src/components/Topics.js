/**
 * @Author: Ali Ismail
 * @Date:   2018-04-23T15:26:17+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-23T15:43:07+02:00
 */
import React from 'react'
import Topic from './Topic'
import {
  Route,
  Link
} from 'react-router-dom'
const Topics = ({match}) => (
 <div>
   <h2>Topics</h2>
   <ul>
     <li>
       <Link to={`${match.url}/rendering`}>
         Rendering with React
       </Link>
     </li>
     <li>
       <Link to={`${match.url}/components`}>
         Components
       </Link>
     </li>
     <li>
       <Link to={`${match.url}/props-v-state`}>
         Props v. State
       </Link>
     </li>
   </ul>
   <Route path='/topics/:topicId' component={Topic} />
    <Route exact path={match.url} render={() => (
     <h3> Please select a Topic </h3>
    )}  />
   </div>
)
export default Topics
