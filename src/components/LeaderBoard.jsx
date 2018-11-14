import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../assets/loading.gif';
import AddPlayer from './AddPlayer';
import Player from './Player';
import style from '../App.css';

const propTypes = {
  players: PropTypes.array.isRequired,
  fetchPlayers: PropTypes.func.isRequired,
  createPlayer: PropTypes.func.isRequired,
  updatePlayer: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlayers();
  }

renderPlayers = () => {
  const { players, updatePlayer, deletePlayer, isFetching } = this.props;
  if (isFetching) {
    return <img alt="loader" className="loader" src={ Loader } />;
  } else {
    const sortedPlayers = players.sort((a, b) => {return b.winnings - a.winnings;});

    const mappedPlayers = sortedPlayers.map((player, i) => 
      <Player key={ player._id } 
				player={ player } 
				updatePlayer={ updatePlayer } 
				deletePlayer={ deletePlayer } 
				index={ i } />
    );

    return mappedPlayers;
  }
}

render() {
  return (
    <div className="column leaderBoard">
      <h2 className="pageHeader">ALL-TIME TOURNAMENT EARNINGS</h2>
      <div className="boardHeader row">
        <div className="nameSpace">
          <span>Player</span>
        </div>
        <div className="otherSpace">
          <span>Winnings</span>
        </div>
        <div className="otherSpace">
          <span>Native Of</span>
        </div>
      </div>
      <div className="playerContainer">
        { this.renderPlayers() }
      </div>
      <AddPlayer createPlayer={ this.props.createPlayer } />
    </div>
  );
}
}
LeaderBoard.propTypes = propTypes;

export default LeaderBoard;