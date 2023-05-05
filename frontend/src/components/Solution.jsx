import React from 'react'

import problems from '../data'

const Solution = ({specificProb}) => {
  return (
    <div>
        <h1>Solution</h1>
        <p>{specificProb.solution}</p>
    </div>
  )
}

export default Solution
