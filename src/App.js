import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const buttons = [
  {
    id: 0,
    name: 'income',
    type: 'incomeFilter',
    parameter: 'income',
  },
  {
    id: 1,
    name: 'outlay',
    type: 'outlayFilter',
    parameter: 'outlay',
  },
  {
    id: 2,
    name: 'last month',
    type: 'date',
    parameter: '',
  },
  {
    id: 3,
    name: '> 1000',
    type: 'value',
    parameter: '1000',
  },
];

const transaction = [
  {
    id: 12,
    value: 500,
    type: 'income',
    date: new Date(2021, 6, 6),
  },
  {
    id: 1,
    value: 100,
    type: 'outlay',
    date: new Date(2020, 1, 12),
  },
  {
    id: 2,
    value: 650,
    type: 'income',
    date: new Date(2021, 0, 22),
  },
  {
    id: 3,
    value: 1007,
    type: 'outlay',
    date: new Date(2007, 2, 27),
  },
  {
    id: 4,
    value: 1507,
    type: 'outlay',
    date: new Date(2000, 2, 11),
  },
  {
    id: 5,
    value: 997,
    type: 'income',
    date: new Date(2021, 2, 24),
  },
  {
    id: 6,
    value: 977,
    type: 'income',
    date: new Date(2021, 2, 15),
  },
  {
    id: 7,
    value: 1999,
    type: 'income',
    date: new Date(2021, 6, 29),
  },
  {
    id: 8,
    value: 999,
    type: 'income',
    date: new Date(2021, 7, 1),
  },
  {
    id: 9,
    value: 2999,
    type: 'income',
    date: new Date(2021, 3, 23),
  },
  {
    id: 10,
    value: 3999,
    type: 'outlay',
    date: new Date(2021, 2, 21),
  },
  {
    id: 13,
    value: 4999,
    type: 'outlay',
    date: new Date(2021, 1, 15),
  },
  {
    id: 17,
    value: 1,
    type: 'outlay',
    date: new Date(2021, 3, 16),
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterTransactions: transaction,
    };
  }

  filterData(type) {
    if (type == 'incomeFilter') {
      const arr = [];
      for (const user of transaction) {
        if (user.type === 'income') {
          arr.push(user);
        }
      }
      this.setState({
        filterTransactions: arr,
      });
    } else if (type == 'outlayFilter') {
      const arr = [];
      for (const user of transaction) {
        if (user.type === 'outlay') {
          arr.push(user);
        }
      }
      this.setState({
        filterTransactions: arr,
      });
    } else if (type == 'date') {
      const arr = [];
      const today = new Date();
      for (const user of transaction) {
        if (user.date.getMonth() == today.getMonth()) {
          arr.push(user);
        }
      }
      this.setState({
        filterTransactions: arr,
      });
    } else if (type == 'value') {
      const arr = [];
      for (const user of transaction) {
        if (user.value > 1000) {
          arr.push(user);
        }
      }
      this.setState({
        filterTransactions: arr,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-container">
            <img src={logo} className="App-header-logo" alt="logo" />
            <h1 className="App-header-title">Фильтрация и транзакция</h1>
            <p className="App-header-description">Сортировка данных</p>
          </div>
        </header>
        <main className="App-body container">
          <div className="sortBar row">
            {buttons.map((item) => (
              <button
                className="btn btn-default col-sm"
                variant="outline-primary"
                key={item.id}
                type="button"
                onClick={() => {
                  this.filterData(item.type, item.parameter, item.id);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <table className="App-body-table table table-hover table-sm">
            <thead>
              <tr>
                <th scope="col" className="size-font">
                  #
                </th>
                <th scope="col" className="size-font">
                  Type
                </th>
                <th scope="col" className="size-font">
                  Value
                </th>
                <th scope="col" className="size-font">
                  Date
                </th>
              </tr>
            </thead>
            {this.state.filterTransactions.map((trans) => (
              <tbody key>
                <tr key={trans.id}>
                  <th scope="row" className="size-font">
                    {trans.id}
                  </th>
                  <td className="size-font">{trans.type}</td>
                  <td className="size-font">{trans.value}</td>
                  <td className="size-font">{trans.date.toDateString()}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </main>
      </div>
    );
  }
}
export default App;
