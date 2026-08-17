import React from 'react'
import './components/card.jsx'
import Card from './components/card.jsx'
import Jobs from './components/jobs.jsx'

const App = () => {

  // const data = Jobs;
  console.log(Jobs);

  return (
    <div className='parent'>

      {
        Jobs.map((ele, idx) => {
          console.log(idx);

          return (
            <div key={idx}>

              <Card logos={ele.logo} company={ele.company} published={ele.published} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} salary={ele.salary} location={ele.location} />
           
            </div>
          )
        })
      }


    </div>
  )
}

export default App

