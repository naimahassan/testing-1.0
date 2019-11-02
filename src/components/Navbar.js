import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <div id="header">
					<div id="logo">
						<h1>
							<a href="#">Coffeelike</a>
						</h1>
					</div>
					<div id="nav">
						<ul>
							<li className="first active">
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Portfolio</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li className="last">
								<a href="#">Contact</a>
							</li>
						</ul>
						<br className="clear" />
					</div>
				</div>
    )
  }
}

export default Navbar