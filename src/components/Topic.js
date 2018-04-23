/**
 * @Author: Ali Ismail
 * @Date:   2018-04-23T15:41:47+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-23T15:44:17+02:00
 */
import React from 'react'
const Topic = ({match}) =>
<div>
  {match.params.topicId}
</div>
export default Topic
