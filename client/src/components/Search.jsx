import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   query: ''
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const movies = this.props.value.slice();
    const searchQuery = event.target.value;
    console.log('event.target ->', event.target);
    const filteredMovies = movies.filter((movie) => {
      if (searchQuery === '') {
        return movie;
      } else if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return movie;
      }
    })
    this.props.handleUpdate(filteredMovies);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='search movies...' />
        <input type='submit' value='Search' />
      </form>
    );
  }
}

export default Search;












// we expect access to this.props.updateState & this.props.getState
  // because we pass thisinformation from the parent


/*-----------------------------------------------------------------------*/

{/* <form onSubmit={(e) => {
  e.preventDefault()
  // this.props.updateState({
  //   movies: this.props.getState().movies
  //     .filter(movie => movie.title.includes(this.state.inputText)),
  // })
}
}>
<input
  value={this.state.inputText}
  onChange={e => {
    this.setState({ inputText: e.target.value });
    }
  }
/>
<input type='submit' value='Search' onClick={this.props.updateState({
    movies: this.props.getState().movies
      .filter(movie => movie.title.includes(this.state.inputText)),
  })} />
</form> */}





// class Search extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       inputText: 'search movies...',
  //     }
  //   }

  //   render() {
  //     return (
  //       <form onSubmit={e => e.preventDefault}>
  //         <label>
  //           Search:
  //           <input
  //             onChange={e => {
  //               this.setState({inputText: e.target.value})
  //             }}
  //             value={this.state.inputText} type='text' name='search'
  //             // onFocus ={() => this.inputText.value = ''}
  //           />
  //         </label>
  //         <input type='submit' value='Search' />
  //       </form>
  //     )
  //   }
  // }