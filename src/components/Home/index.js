import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3'
import _ from 'lodash';
import { Link } from 'react-router-dom'

let web3

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
}

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
      console.log('test,',web3.eth.accounts);
      // var curr_block_no = web3.eth.blockNumber;
      // console.log(curr_block_no);
      // this.setState({
      //   curr_block: curr_block_no
      // });

      // this.getBlocks(curr_block_no);
    }

    // getBlocks(curr_block_no) {
    //   const block_ids = this.state.block_ids.slice();
    //   const block_hashes = this.state.block_hashes.slice();
    //   var max_blocks = 10;
    //   if (curr_block_no < max_blocks) max_blocks = curr_block_no;
    //   for (var i = 0; i < max_blocks; i++, curr_block_no--) {
    //     var currBlockObj = web3.eth.getBlock(curr_block_no);
    //     block_ids.push(currBlockObj.number);
    //     block_hashes.push(currBlockObj.hash);
    //   }
    //   this.setState({
    //     block_ids: block_ids,
    //     block_hashes: block_hashes
    //   })
    // }

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
