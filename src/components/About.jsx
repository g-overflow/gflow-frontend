import React from 'react'
import Navbar from './Navbar'
import {Header, Card, Icon, Message} from 'semantic-ui-react'

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Message id="message-container">
                    <Header as="h2">Queue Overflow</Header>
                    <Message.Header>Queue problems no mo'!</Message.Header>
                    <p>
                        Queue Overflow is a ‘stack overflow’-inspired platform specific to the Galvanize
                        learning community. Students and faculty can sign in and get the solution(s)
                        they need for their WDI specific problems.
                    </p>
                    <p>
                        If you’re a student at Galvanize, it’s likely you will have a programming
                        problem someone else in the community has encountered before. The queue is often
                        a long process and puts a strain on both students and instructors. In addition,
                        once one student receives help, there is no easy way for another student to
                        quickly receive that same solution without going in the queue themselves.
                    </p>
                    <p>Queue Overflow will provide a platform where students and instructors can
                        share their knowledge and problem-solving solutions with one another. A user
                        will log in to their account and see a question box where they are able to input
                        their question, or search for previous solutions. They are also able to pick
                        relevant tags to further specify their search. If they reach a solution, they
                        are able to self-reply with the solution and mark the problem as solved. Other
                        users can search for questions they may know the answers to and reply with their
                        solution.

                    </p>
                </Message>

                <main className='about-cards'>
                    <Card.Group>
                        <Card raised id="coleman-card">
                            <Card.Content header='Coleman Imhoff'/>
                            <Card.Content
                                description='Coleman is a developer living in Denver who enjoys hanging with his cats.'/>
                            <Card.Content extra>
                                <Icon name='github'/>
                                <a href="https://www.github.com/colemanimhoff">Github</a>
                                <br/>
                                <Icon name='linkedin'/>
                                <a href="https://www.linkedin.com/in/colemanimhoff">LinkedIn</a>
                            </Card.Content>
                        </Card>
                        <Card className="card">
                            <Card.Content header='Sean Blattenberger'/>
                            <Card.Content
                                description='Sean is a developer living in Denver who enjoys hanging with his boo.'/>
                            <Card.Content extra>
                                raised
                                <Icon name='github'/>
                                <a href="https://www.github.com/sean-blattenberger">Github</a>
                                <br/>
                                <Icon name='linkedin'/>
                                <a href="https://www.linkedin.com/in/sean-blattenberger">LinkedIn</a>
                            </Card.Content>
                        </Card>
                        <Card raised className="card">
                            <Card.Content header='Alyssa Ebert'/>
                            <Card.Content
                                description='Alyssa is a developer living in Denver who enjoys hanging with her rabbits.'/>
                            <Card.Content extra>
                                <Icon name='github'/>
                                <a href="https://www.github.com/ebectar">Github</a>
                                <br/>
                                <Icon name='linkedin'/>
                                <a href="https://www.linkedin.com/in/acebert">LinkedIn</a>
                            </Card.Content>
                        </Card>
                        <Card raised className="card">
                            <Card.Content header='Jeff Indall'/>
                            <Card.Content
                                description="Jeff is a developer living in Denver who enjoys hangin'."/>
                            <Card.Content extra>
                                <Icon name='github'/>
                                <a href="https://www.github.com/santa505">Github</a>
                                <br/>
                                <Icon name='linkedin'/>
                                <a href="https://www.linkedin.com/in/jeffindall">LinkedIn</a>
                            </Card.Content>
                        </Card>
                        <Card raised id="alex-card">
                            <Card.Content header='Alex Carlston'/>
                            <Card.Content description='Alex is...'/>
                            <Card.Content extra>
                                <Icon name='github'/>
                                <a href="https://www.github.com/alexandercarlston">Github</a>
                                <br/>
                                <Icon name='linkedin'/>
                                <a href="https://www.linkedin.com/in/alexander-carlston">LinkedIn</a>
                            </Card.Content>
                        </Card>
                        <Card raised id="alex-card">
                            <Card.Content header='Brevon Good'/>
                            <Card.Content
                                description='Brevon Good is our resident shit talker. We were doing our best and he was there to criticize us every step of the way.'/>
                            <Card.Content extra>
                                <Icon name='github'/>
                                <a href="https://www.github.com/stephentalking">Github</a>
                                <br/>
                                <Icon name='linkedin'/>
                                <a href="https://www.linkedin.com/in/alexander-carlston">LinkedIn</a>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </main>
            </React.Fragment >
        )
    }
}