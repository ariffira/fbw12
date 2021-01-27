import { Component } from "react";
import { Form, Button, ListGroup, InputGroup, FormControl } from "react-bootstrap";
// import components from react-bootstrap
class FriendList extends Component{
    constructor() {
        super();
        // state data
        this.state = {
            // friends
            friends: [], // default value
            chatMsg: ''
        }
    }
    // handler name: addFriend()
    addFriend = (event)=> {
        //alert(1)
        event.preventDefault()
        let f_name = event.target.f_name.value;
        let f_age = event.target.f_age.value;
        // push f_name into friends array[]
        this.state.friends.push({f_name, f_age});
        // update the state
        this.setState(()=> {
            return {
                // friends: new pushed array
                friends: this.state.friends
            }
        })
    }
    // chat test
    chatdata = (event)=> {
        this.setState(()=> {
            return {
                chatMsg: event.target.value
            }
        })
    }
    render() {
        return(
            <div>
            <Form onSubmit={this.addFriend}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Friend Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="f_name"/>
                </Form.Group>
                <Form.Group controlId="formBasicAge">
                    <Form.Label>Friend Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" name="f_age"/>
                </Form.Group>
                <Button variant="success" type="submit">Add+</Button>
            </Form>
            <ListGroup>
                {
                    this.state.friends.map((item, index)=> {
                        return (
                            <ListGroup.Item key={index}>
                                Name:{item.f_name}, Age: {item.f_age}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            <h1>Chat typing test</h1>
            <InputGroup className="mb-3">
                <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.chatdata}/>
            </InputGroup>
            <h1>{this.state.chatMsg}</h1>
            </div>
        )
    }
}
export {FriendList};