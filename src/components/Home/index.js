import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          block_ids: [],
          block_hashes: [],
          curr_block: null
        }
    }

    componentWillMount() {
      let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

      console.log(web3.eth.accounts);
      var curr_block_no = web3.eth.blockNumber;
      console.log(curr_block_no);
      this.setState({
        curr_block: curr_block_no
      });
    }

    render() {
      return (
        <div className="Home">
          <h2>Home page</h2>
            Current Block: {this.state.curr_block}
        </div>
      );
    }
}

export default Home;
