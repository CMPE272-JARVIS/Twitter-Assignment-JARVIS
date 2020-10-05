import React, { Component } from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'

import TweetService from './TweetService'
/**
* This class component posts a new tweet to the twitter application
* @author Mamatha Guntu, Prajakta Joshi
* 
*/
export default class CreateTweet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {tweetMessage: '', data: ''}
        this.onChange = this.onChange.bind(this);
        this.submitTweet = this.submitTweet.bind(this);
    }

    submitTweet= () => {
		const dataToSend = {messageToPost: this.state.tweetMessage, id: ''};
        new TweetService().tweet(dataToSend).then(res => {
            this.setState({
                data: res.data
            })
		});
    }
	
    onChange = (event) => {
        this.setState({
            tweetMessage: event.target.value
        })
    }
    
    render() {
        return (        
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Create Tweet</Card.Header>
                <Form id="createTweetForm">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Tweet Message</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="createTweet" 
                                    className={"bg-dark text-white"} 
                                    onChange={this.onChange} 
                                    placeholder="Tweet Message" /> 
                            </Form.Group>
                        </Form.Row>
						{this.state.data !== '' ?
							<div>{this.state.data}</div>
							: null}
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="button" onClick= {this.submitTweet}>
                            Post
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        ) 
    }
}