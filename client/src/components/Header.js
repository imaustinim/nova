import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div>
            <header>
                <h1>{ title }</h1>
                <button className="btn">Add</button>
            </header>            
        </div>
    )
}


Header.defaultProps = {
    title: "task"
}

Header.propTypes = {
    title: PropTypes.string
}
 
export default Header
