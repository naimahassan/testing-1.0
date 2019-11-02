import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
        <div id="sidebar">
						<h3>
							Feugiat sem praesent
						</h3>
						<p>
							Aliquam sed vulputate curabitur convallis dignissim. Phasellus sed convallis condimentum et amet
							hendrerit neque sit euismod.
						</p>
						<h3>
							Suscipit commodo lacinia
						</h3>
						<ul className="linkedList">
							<li className="first">
								<a href="#">Ridiculus dolore felis</a>
							</li>
							<li>
								<a href="#">Cras velit vestibulum penatibus</a>
							</li>
							<li>
								<a href="#">Eleifend porttitor auctor</a>
							</li>
							<li>
								<a href="#">Semper erat sed consequat</a>
							</li>
							<li>
								<a href="#">Integer egestas sodales</a>
							</li>
							<li className="last">
								<a href="#">Aliquet cras odio tristique</a>
							</li>
						</ul>
					</div>
    )
  }
}

export default Sidebar