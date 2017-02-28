import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from './actions'

class App extends Component {

  render(){
    const { appData, fetchData } = this.props
    const { isFetching, data } = appData

    return (
      <div>
        { isFetching && <span>Loading</span> }
        {
         data.length ? (
           data.map((person, i) => {
             return (
               <div key={i}>
                   <h3>Name: {person.name}</h3>
                   <h3>Age: {person.age}</h3>
               </div>
             )
           })
         ) : null
        }
        <button onClick={fetchData}> 点我获取数据 </button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default Root
