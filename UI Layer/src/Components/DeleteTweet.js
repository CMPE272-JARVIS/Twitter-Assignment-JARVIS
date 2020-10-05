import React, { Component } from 'react'
import {Card, Form, Col, Button} from 'react-bootstrap'
import TweetService from './TweetService'
/**
* This class component deletes a tweet message based on message ID.
*
* @author Srujana Koripalli
* 
*/
class DeleteTweet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             messageID: '',
			 alertMessage: ''
        }
		this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = () => {
        var response = new TweetService().deleteTweetByMessageID(this.state.messageID).then((data) => {
			this.setState({alertMessage: data});
        });
    }
    onChange = event => {
        this.setState({
            messageID: event.target.value
        });
    }
    
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Delete Tweet</Card.Header>
            <Card.Body>
            <React.Fragment>
                <Form>
                    <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Control 
                        type="text" 
                        name="deleteTweet" 
                        className={"bg-dark text-white"}                                 
                        placeholder="Tweet ID" 
                        value={this.state.messageID} 
                        onChange={this.onChange}
                        /> 
                    </Form.Group>
                    </Form.Row>  
                </Form>
            </React.Fragment>
			{this.state.alertMessage}
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                <Button size="sm" variant="success" type="click" onClick={this.handleSubmit}>
                    Delete
                </Button>
            </Card.Footer>
            </Card>
        )
    }
}

export default DeleteTweet
