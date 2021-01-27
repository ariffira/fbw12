import React, { Component } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
class TodoList extends Component {
    constructor() {
        super();
        this.formData = React.createRef();
        this.state = {
            todoList: [] // empty
        }
    }
    // update todolist data
    // event is somekind of request
    updateTodo = (event) => {
        // to stop default behaviour of event submit
        event.preventDefault();
        const data = this.formData.current,
        newTodo = {
            task: data.task.value,
            time: data.time.value,
            date: data.date.value
        }
        this.state.todoList.push(newTodo); // somevalue
        this.setState(() => {
            return {
                todoList: this.state.todoList // tell the constructor we get update
            }
        })
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.updateTodo} ref={this.formData}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter A Task" name="task"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" />
                    </Form.Group>
                    <Form.Group controlId="formBasicTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" name="time"/>
                    </Form.Group>
                    <Button variant="success" type="submit">Create Todo</Button>
                </Form>
                <ListGroup>
                    {
                        this.state.todoList.map((item, index) => {
                            return (
                                <ListGroup.Item key={index}>
                                    Task Name: {item.task}, when: {item.time}, date: {item.date}
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}
export default TodoList;