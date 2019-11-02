import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
        <div id="content">
						<div id="box1">
							<h2>
								Welcome to Coffeelike
							</h2>
							<img className="left" src="images/pic1.jpg" width="130" height="160" alt="" />
							<p>
								This is <strong>Coffeelike</strong>, a two column CSS template by
								<a href="http://templated.co" rel="nofollow">TEMPLATED</a> with photos from 
								<a href="http://www.pdphoto.org/">PDPhoto</a>. It's released (for free) under the
								<a href="http://templated.co/license/">Creative Commons Attribution license</a>,
								so feel free to use it for any personal or commercial work (just give us credit for it).
								Hit up our <a href="http://templated.co">website</a> for more awesomely
								cool free templates, and follow us on <a href="http://twitter.com/templatedco">Twitter</a>
								(<a href="http://twitter.com/templatedco">@templatedco</a>) for updates, announcements, and other
								mildly interesting ramblings.
							</p>
						</div>
						<div id="box2">
							<h3>
								Primis dolor fringilla porta
							</h3>
							<ul className="imageList">
								<li className="first">
									<img className="left" src="images/pic2.jpg" width="80" height="80" alt="" /> <span>Quis faucibus mauris quis consectetur lobortis parturient sit turpis scelerisque neque aliquet.</span>
								</li>
								<li>
									<img className="left" src="images/pic1.jpg" width="80" height="80" alt="" /> <span>Lobortis malesuada penatibus porta varius ligula blandit sit dolor mattis morbi ullamcorper posuere tempus.</span>
								</li>
								<li className="last">
									<img className="left" src="images/pic2.jpg" width="80" height="80" alt="" /> <span>Diam nunc turpis placerat imperdiet ac cras ac sociis aliquam sed lacinia augue suspendisse.</span>
								</li>
							</ul>
						</div>
						<div id="box3">
							<h3>
								Magnis felis
							</h3>
							<p>
								Vulputate magna nibh augue. Rutrum nibh sodales porta etiam.
							</p>
							<ul className="linkedList">
								<li className="first">
									<a href="#">Lobortis fringilla dictum cras</a>
								</li>
								<li>
									<a href="#">Erat primis accumsan facilisis</a>
								</li>
								<li>
									<a href="#">Laoreet in in magna</a>
								</li>
								<li>
									<a href="#">Porta a vulputate placerat</a>
								</li>
								<li className="last">
									<a href="#">Neque rhoncus rhoncus iaculis</a>
								</li>
							</ul>
						</div>
						<br className="clear" />
					</div>
    )
  }
}

export default Home