import React from "react";
import "./PortfolioItem.css";

class PortfolioItem extends React.Component {
  render() {
    return (
      <a target="_blank" className="portfolio-a" href={this.props.href}>
        <div className="portfolio-item-outer">
          <div className="portfolio-item">
            <div className="portfolio-item-text">
              <div className="portfolio-title">{this.props.title}</div>
              <div className="portfolio-explanation">{this.props.children}</div>
            </div>
            {this.props.imageUrl ? (
              <img src={this.props.imageUrl} className="portfolio-photo" />
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    );
  }
}

export default PortfolioItem;
