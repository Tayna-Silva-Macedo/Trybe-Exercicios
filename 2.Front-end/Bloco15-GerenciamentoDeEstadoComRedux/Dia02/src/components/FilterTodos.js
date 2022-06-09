import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterAction } from '../redux/actions';

class FilterTodos extends React.Component {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <button type="button" onClick={ () => filter('all') }>
          Todos
        </button>
        <button type="button" onClick={ () => filter('done') }>
          Finalizados
        </button>
        <button type="button" onClick={ () => filter('progress') }>
          Em andamento
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (filter) => dispatch(filterAction(filter)),
});

FilterTodos.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterTodos);
