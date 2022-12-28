import PropTypes from 'prop-types';
export const GridItem = ({url, title}) => {
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <p data-test-id="title">{title}</p>
    </div>
  )
}

GridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
