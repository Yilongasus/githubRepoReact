import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 1-2 引入用npm載下來的React和ReactDOM

import './index.css';
import reportWebVitals from './reportWebVitals';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBDataTableV5 } from 'mdbreact';


// const style = {fontFamily: 'Arial', color: '#FF0000'};
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      repoName: null
    }
    this.handleClick=this.handleClick.bind(this);
  }

  
  handleClick() {
    fetch( 'https://api.github.com/users/yilongasus/repos',{method:"GET"})
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
          for (let i = 0; i < data.length ; i ++) {
            this.setState({
              name: data[i]['name'],
              stargazers_count: data[i]['stargazers_count'],
              html_url: data[i]['html_url'],              
            });
          }         
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
    })
  }
  


  render() {
      return (
        <div className="App">
              {this.state.name}
              {this.state.stargazers_count}
              {this.state.html_url}
          <button onClick={this.handleClick}>yilongasus repo data</button>
    	  </div>

    )
  }
};



export default function Basic() {
  const [datatable, setDatatable] = React.useState({

    columns: [
      {
        label: '名稱',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: '支持和讚許數',
        field: 'stargazers_count',
        width: 270,
      },
      {
        label: '網址',
        field: 'html_url',
        width: 200,
      }
    ],
    rows: [
      {
        name: 'Jennifer Acosta',
        stargazers_count: 'Junior Javascript Developer',
        html_url: 'Edinburgh'
      },
      {
        name: 'Jennifer Acosta',
        stargazers_count: 'Junior Javascript Developer',
        html_url: 'Edinburgh'
      },
      {
        name: 'Jennifer Acosta',
        stargazers_count: 'Junior Javascript Developer',
        html_url: 'Edinburgh'
      },
      {
        name: 'Jennifer Acosta',
        stargazers_count: 'Junior Javascript Developer',
        html_url: 'Edinburgh'
      },
      {
        name: 'Jennifer Acosta',
        stargazers_count: 'Junior Javascript Developer',
        html_url: 'Edinburgh'
      }       
    ]
 

});
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}




ReactDOM.render(
  <React.StrictMode>
    <div>
    <App/>
    <Basic></Basic>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
// React的程式進入點

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();