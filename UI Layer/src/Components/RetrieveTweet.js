import React, { Component } from 'react';
import axios from 'axios';
import {Card, Form, Button, Col} from 'react-bootstrap';
import TweetService from './TweetService';
/**
* This class component retrieves a tweet message based on message ID.
*
* @author Umashankar Kumar
* 
*/
class RetrieveTweet extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             tweetMessage: '',
             messageID: ''
        }
		this.handleSubmit = this.handleSubmit.bind(this);
    }
	
    handleSubmit = () => {
		new TweetService().retrieveTweet(this.state.messageID).then((data) => {
			this.setState({tweetMessage: data});
        });
    }
    
    onChange = (event) => {
        this.setState({
            messageID: event.target.value
        })
    }
    
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Retrieve Tweet</Card.Header>
            <Card.Body>
            <React.Fragment>
                <Form>
                    <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Control 
                        type="text" 
                        name="retrieveTweet" 
                        className={"bg-dark text-white"}    
                        placeholder="Tweet ID" 
                        value={this.state.messageID} 
                        onChange={this.onChange}/> 
                    </Form.Group>
                    </Form.Row>                   
                </Form>
            </React.Fragment>
			{this.state.tweetMessage !== '' ?
				<div>{this.state.tweetMessage}</div>
				: null
			}
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                <Button size="sm" variant="success" type="button" onClick ={this.handleSubmit}>
                    Get Tweet
                </Button>
            </Card.Footer>
            </Card>
        )
    } 
}

export default RetrieveTweet
