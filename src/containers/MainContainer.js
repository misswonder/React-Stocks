import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sort: false,
    type: "Tech",
  };

  componentDidMount = async () => {
    const res = await fetch("http://localhost:3000/stocks");
    const stocks = await res.json();
    this.setState({ stocks });
  };

  addStock = (stock) =>
    this.setState({
      portfolio: [...this.state.portfolio, stock],
    });

  removeStock = (stock) =>
    this.setState({
      portfolio: this.state.portfolio.filter(
        (selectedStock) => selectedStock !== stock
      ),
    });

  filteredStocks = () => {
    let filtered = this.state.stocks.filter(
      (stock) => stock.type === this.state.type
    );

    if (this.state.sort === "abc") {
      filtered = filtered.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (this.state.sort === "price") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
  };

  toggleAlphabeticalSort = () => {
    this.setState({
      sort: this.state.sort === "abc" ? false : "abc",
    });
  };

  togglePriceSort = () => {
    this.setState({
      sort: this.state.sort === "price" ? false : "price",
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          sort={this.state.sort}
          toggleAlphabeticalSort={this.toggleAlphabeticalSort}
          togglePriceSort={this.togglePriceSort}
          setType={(type) => this.setState({ type })}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.filteredStocks()}
              addStock={this.addStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.portfolio}
              removeStock={this.removeStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
