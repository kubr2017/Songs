import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div className='content'>{song.title}</div>
          </div>
        </div>
      );
    })
  }

  render(){
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state.songs);
  return { songs:state.songs }
}

export default connect(mapStateToProps)(SongList);
