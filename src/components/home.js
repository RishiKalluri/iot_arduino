import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../App.css';

export default class Home extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        var PubNub = require('pubnub')
        const pubnub = new PubNub({
            subscribe_key: 'sub-c-6ba65f82-a43c-11e8-bb88-163ac01f2f4e',
            publish_key: 'pub-c-d1ff1192-de34-4cc0-982c-b512b22f245d'
        });


        function lightOn() {
            var publishConfig = {
                channel : "my_channel",
                message: 'ON'
            };

            pubnub.publish(publishConfig, function(status, response) {
                console.log(status, response);
            })
        }

        function lightOff() {
            var publishConfig = {
                channel : "my_channel",
                message: 'OFF'
            };

            pubnub.publish(publishConfig, function(status, response) {
                console.log(status, response);
            })
        }
        return (
            <div className="App">
                <Button size='massive' circular={true} color='green' onClick={lightOn}> ON </Button>
                <Button size='massive' circular={true} color='red' onClick={lightOff}> OFF </Button>
            </div>
        );
    }
}

