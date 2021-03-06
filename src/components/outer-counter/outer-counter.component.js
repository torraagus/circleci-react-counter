import React, { Component } from 'react'
import InnerCounter from './../inner-counter/inner-counter.component';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './outer-counter.scss';

export default class OuterCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.changeCounter = this.changeCounter.bind(this);
    }

    changeCounter(number) {
        console.log("pressed outer buttons");
        this.setState((state) => ({
            counter: state.counter + number 
        }));
    }

    render() {
        return (
            <Grid fluid className="grid-counter-outer pb-3">
                <Row center="xs">
                    <Col className="p-0 mb-3" xs={12}>
                        <h4 className="counterName-outer p-2 mb-0">Outer counter</h4>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col className="p-0" lg={2} md={4} sm={8} xs={12}>
                        <InnerCounter onCounterChange={this.changeCounter} counter={this.state.counter}></InnerCounter>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col lg={6} md={8} sm={10} xs={12}>
                        <h4 data-testid="outerCount" className="counter-outer">{this.state.counter}</h4>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col>
                        <button
                            className="increaseBtn"
                            onClick={() => {
                                this.changeCounter(1);
                            }}
                        >
                        {'ADD'}
                        </button>
                    </Col>
                    <Col>
                        <button
                            className="decreaseBtn"
                            onClick={() => {
                                this.changeCounter(-1);
                            }}
                        >
                        {'REMOVE'}
                        </button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
