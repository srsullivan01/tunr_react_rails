import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';


class AddBand extends Component {
  constructor(){
    super();
    this.state = {
        name: '',
        nationality: '',
        photo_url: '',
        redirect: false
    }
  }

   _handleChange = (e) => {
     e.preventDefault();
     const newState = {...this.state};
     newState[e.target.name] = e.target.value;
     this.setState(newState);
   }

  render() {

    return (
      <div>
        <form onSubmit={this._handleChange}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this._handleChange} type="text" name="name" value={this.state.name} />
          </div>
          <div>
            <label htmlFor="nationality">nationality: </label>
            <input onChange={this._handleChange} type="text" name="nationality" value={this.state.nationality} />
          </div>
          <div>
            <label htmlFor="photo_url">photo_url: </label>
            <input onChange={this._handleChange} type="text" name="photo_url" value={this.state.photo_url} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
 }

export default AddBand;
