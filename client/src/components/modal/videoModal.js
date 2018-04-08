import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class VideoModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);

    this.state = {
      show: false
    };
    console.log(props.metadata);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  upvote() {
      if (this.props.authenticated) {
        var newVotes = this.state.upvotes + 1;
        var videoID = this.props.metadata._id;

        this.setState({
            upvotes: newVotes
        });

        fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                'newTotalUpvotes': newVotes,
                'videoID': videoID
            }),
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json()
        })
      }
  }

  downvote() {
      if (this.props.authenticated) {
        var newVotes = this.state.upvotes - 1;
        var videoID = this.props.metadata._id;

        this.setState({
            upvotes: newVotes
        });

        fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                'newTotalUpvotes': newVotes,
                'videoID': videoID
            }),
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json()
        })
      }
  }

  render() {

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow} style = {{padding: '30px 5px', fontSize: '10px', marginTop: '10px'}}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} style = {{marginTop: '150px'}}>
          <Modal.Header closeButton style = {{backgroundColor:'#403F3F'}}>
            <Modal.Title style = {{color: 'red'}}>Week 1 - Ranked # 1</Modal.Title>
          </Modal.Header>
          <Modal.Body style = {{backgroundColor:'#403F3F', color:'white', fontFamily:'AppleGothic', fontSize:'10px', height:'355px'}}>
            <div className = "col-xs-12 col-md-10 col-md-offset-1" style={{background:'grey', height:'250px'}}></div>

            <div className = "col-xs-12 col-md-12" style={{background:'', height: '70px', top: '20px'}}>
              <div className="col-xs-12 col-md-3"
                  style={{background: '', top: '0px', height: '70px', }}>
                  <p>{this.props.metadata.title}<br />
                  by: {this.props.metadata.username} <br /> posted: date </p>
              </div>

              <div className="col-xs-12 col-md-7"
                  style={{background: '', top: '0px', height: '70px'}}>
                  <p> {this.props.metadata.description} </p>
              </div>

              <div className="col-xs-12 col-md-2 text-center" style={{background: '', height: '70px', bottom:'20px', right:'40px'}}>
                <div className = "votingArrows" style={{position: 'absolute', left: '60px'}}>
                    <div className="text-right"><a href="#"
                        onClick={this.upvote} className="glyphicon glyphicon-chevron-up"></a>
                    </div>
                    <div className="col xs-12 col-md-12 text-center"
                        style ={{background: '', position: 'relative', top: '5px', right: '31px'}}>
                        <span style={{color: 'white', fontSize: '15px'}}>{this.props.metadata.totalUpvotes}</span>
                    </div>
                    <div className="text-right"><a href="#"
                        onClick={this.downvote} className="glyphicon glyphicon-chevron-down"></a>
                    </div>
                </div>
              </div>

            </div>



          </Modal.Body>
          <Modal.Footer style = {{backgroundColor:'#403F3F'}}>

            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default VideoModal;
