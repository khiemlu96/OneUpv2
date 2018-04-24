import React, { Component } from 'react';
import Modal from '../modal/videoModal.js';

class profileVideo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upvotes: props.metadata.totalUpvotes
    }
  }



  render(){
    return (
      <div>

        <div className="row" id="videoClipsSection">
          <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '200px', background: ''}}>
            <div className="col-xs-12 col-md-3" style={{ height: '200px', background: '', width:'250px'}}>
              <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '115px', background: 'grey', marginTop:'10px'}}>
                <Modal className="video btn-primary" style={{height: '115px'}}
                        metadata={this.props.metadata} authenticated={this.props.authenticated} rank={this.props.rank} user={this.props.user}>
                </Modal>
              </div>
              <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '60px', background: '', marginTop:'10px'}}>
                <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">{this.props.metadata.title}</font> <br />
                <font style={{marginLeft: "0px", fontFamily: "AppleGothic"}} color="white" size="2">{this.state.upvotes} upvotes &#9679; date</font>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profileVideo;
