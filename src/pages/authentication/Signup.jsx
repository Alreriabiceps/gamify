import React from 'react'

const App = () => {
  return (
    <div>
      <form action="/login">
        <h1>Sign Up</h1>
          <div>
            <div>
              <label htmlFor="student-id">STUDENT ID</label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="password">PASSWORD</label>
              <input type="password"/>
            </div>
            <div>
              <label htmlFor="">STRAND</label>
              <select>
                <option>STEM</option>
                <option>HUMMS</option>
                <option>ICT</option>
                <option>GAS</option>
                <option>ABM</option>
                <option>TOP</option>
              </select>
            </div>
          </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App