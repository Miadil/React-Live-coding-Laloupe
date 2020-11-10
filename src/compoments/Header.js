import React from 'react'
import logo from '../logo.svg';

import './Header.css'

class Header extends React.Component {
	render(){
		const {status, poulet, age} = this.props
      return (
		    <header className="header-header">
			    <img src={logo} className="header-logo" alt="logo" />
			      <p>
			        salut {status} j'ai {age} ans j'aime le poulet {poulet}
						</p>
    	  	<a
        	className="header-link"
       		href="https://reactjs.org"
        	target="_blank"
	        rel="noopener noreferrer"
      		>
        		Learn React
      		</a>
    		</header>
      )
    }
}

// const Header = ({status, age, poulet}) => {
//     return (
//         <header className="header-header">
//         <img src={logo} className="header-logo" alt="logo" />
//         <p>
//           salut {status} j'ai {age} ans j'aime le poulet {poulet}
//         </p>
//         <a
//           className="header-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     )
// }

export default Header
