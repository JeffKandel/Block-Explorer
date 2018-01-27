import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3'
let web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          block_ids: [],
          block_hashes: [],
          curr_block: null
        }
    }

    render() {
        console.log('test',web3.eth.accounts);
        return (
            <div className="Home">
                <h2>Home page</h2>
            </div>
        );
    }
}

export default Home;
