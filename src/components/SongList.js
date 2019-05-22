import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  renderList(){
    console.log('inside render list',this.props.songs);
    return this.props.songs.map(song=>{
      return (
        <div className='item' key = {song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    })
  }

  render(){
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state.songs);
  return { songs:state.songs }
}

export default connect(mapStateToProps)(SongList);
