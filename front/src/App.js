// Main container

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Menubar from './components/menubar/Menubar.js';
import Search from './components/search/Search.js';
import Showarea from './components/showarea/Showarea.js';
import Footer from './components/footer/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: 'TrizicCo',
      origintwts: [],
      inputtwts: [],
      col: 'showarea', // initial column amount
      row: 'showboxct',// initial row amount
      style: ' ', // clear style
      dropshow: false // set mobile menu to close status
    };
  }

/* Search function is responsible for retriving data from backend.
It accept two parameters, target is the the screen name, num is
tweets amount */
  search = (target, num) => {
    this.severRequest = axios
      .get(`http://localhost:5000/api/getposts/${target}-${num}`)
      .then(response => {
        this.setState({
          origintwts: response.data,
          inputtwts: [...response.data]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

// Change to different categories
  menuBarContr_cat = target => {
    this.setState({
      target: target
    });
    this.search(target, 30);
  };

// Handling search event
  menuBarContr_search = target => {
    if (target) {
      this.setState({
        target: target
      });
      this.search(target, 30);
    } else {
      alert('You have not input any word!');
    }
  };

 /* Handling events from the ChangeLayout selection of the top bar,
 it will addon different css class when fired.
 Or change the general layout style */
  menuBarContr_Layout = value => {
    switch (value) {
      case 'four':
        this.setState({
          col: 'showarea showarea_four',
          row: 'showboxct'
        });
        break;
      case 'two':
        this.setState({
          col: 'showarea showarea_two',
          row: 'showboxct showboxct_two'
        });
        break;
      case 'one':
        this.setState({
          col: 'showarea showarea_one',
          row: 'showboxct showboxct_one'
        });
        break;
      case 'three':
        this.setState({
          col: 'showarea',
          row: 'showboxct'
        });
        break;
      case 'fancy':
        this.setState({
          style: 'fancy'
        });
        break;
      case 'clear':
        this.setState({
          style: ' '
        });
        break;
      default:
        return null;
    }
  };

  /* Handling events from the filter selection of the top bar,
  it will change the columns rows and orders of the tweets view. */
  menuBarContr_fliter = value => {
    switch (value) {
      case 'default':
        this.search('TrizicCo', 30);
        break;
      case 'asc':
        this.setState({
          inputtwts: this.state.origintwts
        });
        break;
      case 'desc':
        this.setState({
          inputtwts: this.state.origintwts.slice().reverse()
        });
        break;
      case 'today':
        let dayktwts = this.state.origintwts.filter(twt => {
          let tt = (Date.now() - new Date(twt.created_at)) / 1000 / 3600 / 24;
          return parseInt(tt, 10) === 0;
        });
        this.setState({
          inputtwts: dayktwts
        });
        break;
      case '7days':
        let weektwts = this.state.origintwts.filter(twt => {
          let tt = (Date.now() - new Date(twt.created_at)) / 1000 / 3600 / 24;
          return parseInt(tt, 10) < 8;
        });
        this.setState({
          inputtwts: weektwts
        });
        break;
      case '30days':
        let montwts = this.state.origintwts.filter(twt => {
          let tt = (Date.now() - new Date(twt.created_at)) / 1000 / 3600 / 24;
          return parseInt(tt, 10) < 31;
        });
        this.setState({
          inputtwts: montwts
        });
        break;
      default:
        return null;
    }
  };

// Handling mobile menu open and close events
  MiniMenuContr_close = () => {
    this.setState({
      dropshow: false
    });
  };

  MiniMenuContr_open = () => {
    this.setState({
      dropshow: true
    });
  };

// Transfer the date info to appropriate format
  dateTrans = datestr => {
    let date = new Date(datestr),
      Y = `-${date.getFullYear()}`,
      M =
        (date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1) + '-',
      D = date.getDate(),
      h = ` ${date.getHours()}:`,
      m = `${date.getMinutes()}:`,
      s = date.getSeconds();
    return M + D + Y + h + m + s;
  };

  // Saving style an layout to localStorage
  saveStyle = () => {
    if (localStorage.length > 0) {
      localStorage.clear();
    }
    localStorage.setItem('target', this.state.target);
    localStorage.setItem('col', this.state.col);
    localStorage.setItem('row', this.state.row);
    localStorage.setItem('style', this.state.style);
    alert('Your style setting is successfully saved!');
  };

// Handling the topbar reset event
  originStyle = () => {
    localStorage.clear();
    this.setState({
      target: 'TrizicCo',
      col: 'showarea',
      row: 'showboxct',
      style: ' '
    });
    this.search('TrizicCo', 30);
  };

// Checking localStorage and setting data for initial rendering
  componentDidMount = () => {
    if (localStorage.length > 0) {
      this.setState({
        target: localStorage.target,
        col: localStorage.col,
        row: localStorage.row,
        style: localStorage.style
      });
      this.search(localStorage.target, 30);
    } else {
      this.search(this.state.target, 30);
    }
  };

  render() {
    return (
      /* Checking render style */
      <div className={!this.state.style ? 'App' : `App App${this.state.style}`}>
        <div className="wraper">
          <div className="mbbarlin">
            <Menubar
              menuBarContr_cat={this.menuBarContr_cat}
              menuBarContr_Layout={this.menuBarContr_Layout}
              menuBarContr_fliter={this.menuBarContr_fliter}
              changeStyle={this.state.style}
              dropdown={this.state.dropdown}
              dropshow={this.state.dropshow}
              MiniMenuContr_close={this.MiniMenuContr_close}
              MiniMenuContr_open={this.MiniMenuContr_open}
              saveStyle={this.saveStyle}
              originStyle={this.originStyle}
            />
          </div>
          <div>
            <Search menuBarContr_search={this.menuBarContr_search} />
          </div>
          <div>
            <Showarea
              inputtwts={this.state.inputtwts}
              dateTrans={this.dateTrans}
              col={this.state.col}
              row={this.state.row}
              changeStyle={this.state.style}
            />
          </div>
        </div>
        <div className="fwraper">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
