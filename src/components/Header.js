import React from 'react';

class Header extends React.Component{
	render(){
		let {keyword, 
			searchChange,
			searchSubmit} = this.props;
		return(
			<header className="header block row center">
				<div className="col-2"><h1><i className="fas fa-book-open"></i> IT Bookstore</h1></div>
				<div className="col-1">
					<form className="block" onSubmit={e => searchSubmit(e)}>
						<input className="search-input" type="text" value={keyword} placeholder="Search for Books..."  onChange={(e)=>searchChange(e)}/>
					</form>
				</div>
			</header>
		)
	}
}

export default Header;