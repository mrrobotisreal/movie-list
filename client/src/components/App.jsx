import React from 'react';
import Movies from './Movies.jsx'
import Search from './Search.jsx'

const moviesArr = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: moviesArr.slice()
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(data) {
    this.setState({
      movies: data
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Search value={this.state.movies} handleUpdate={this.handleUpdate}/>
        </div>
        <ul>
          {
          moviesArr.map((movie, i) => <Movies key={i} movie={movie}/>)
          }
        </ul>
      </React.Fragment>
    )
  }
}


export default App;







/*---------------------------------------------------------------------*/
// class App extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       movies: moviesArr.slice()
  //     }

  //     this.handleSubmit = this.handleSubmit.bind(this)
  //     // this.handleChange = this.handleChange.bind(this)
  //     this.updateState = this.updateState.bind(this)
  //     this.getState = this.getState.bind(this)
  //   }

  //   // handleChange(data) {
  //   //   console.log(this.state.movies);
  //   //   let query = data;
  //   //   for (let i = 0; i < this.state.movies.length; i++) {
  //   //     let movie = this.state.movies[i];
  //   //     if (movie.title.includes(query)) {
  //   //       this.setState({
  //   //         movies: movie
  //   //       })
  //   //     }
  //   //   }
  //   // }

  //   handleSubmit(query) {
  //     console.log('query: ->', query);

  //   }


  //   updateState(obj) {
  //     this.setState(obj)
  //   }

  //   getState() {
  //     return this.state
  //   }

  //   render() {
  //     return (
  //       <React.Fragment>
  //         <Search handleSubmit={this.handleSubmit} getState={this.getState} />
  //         {
  //           moviesArr.map((movie, i) => <Movies key={i} movie={movie.title} />)
  //         }
  //       </React.Fragment>
  //     )
  //   }
  // }

  // export default App;