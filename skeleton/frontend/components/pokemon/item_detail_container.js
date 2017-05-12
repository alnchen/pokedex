import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  itemDetail: selectPokemonItem(state, ownProps.match.params.itemId)
})

const mapDispatchToProps


export default connect();
