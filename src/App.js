
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/#">Project Name</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                            </li>
                        </ul>
                        <form className="d-flex personalform" >
                            <input className="form-control me-2 " type="text" placeholder="Email" aria-label="Email" />
                            <input className="form-control me-2 pwd_ip" type="password" placeholder="Password" aria-label="Password" />
                            <button className="btn btn-outline-success" type="submit">Submit</button>
                        </form>
                        </div>
                    </div>
                </nav>
        </header>
        <section className="content">
            <div className="container">
                <div className="banner">
                    <h1>Hello, world!</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p><button  type="button" className="btn btn-primary">Learn more »</button></p>
                </div>
            </div>
        </section>
        <section className="headings">
            <div className="container">
                <div className="row">
                <div className="bodytext">
                    <h1>Heading</h1>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                    <p><button  type="button" className="btn btn-primary">View details »</button></p>
                </div>
                <div className="bodytext">
                    <h1>Heading</h1>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                    <p><button  type="button" className="btn btn-primary">View details »</button></p>
                </div>
                <div className="bodytext">
                    <h1>Heading</h1>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                    <p><button  type="button" className="btn btn-primary">View details »</button></p>
                </div>
            </div>
            <hr/>
            </div>
        </section>
        <footer>
            <div className="container">
                <p style={{color:"#333"}}>&copy;  Company 2022</p>    
            </div>
        </footer>
    </div>
  );
}

export default App;
