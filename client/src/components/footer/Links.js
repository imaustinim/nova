import PropTypes from 'prop-types'

const Link = ({ title, url }) => {
    return (
        <a href={ url }>
            <h1>{ title }</h1>
        </a>

    )
}

Link.defaultProps = {
    title: "title",
    url: "#"
}

Link.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}
 
export default Link