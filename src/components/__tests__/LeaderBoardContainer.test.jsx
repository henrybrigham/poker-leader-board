import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { TestableLeaderBoardContainer } from '../LeaderBoardContainer';
Enzyme.configure({ adapter: new Adapter() });

const setup = propOverrides => {
  const props = Object.assign({
		players: [],
		fetchPlayers: jest.fn(),
		createPlayer: jest.fn(),
		updatePlayer: jest.fn(),
		deletePlayer: jest.fn(),
		isFetching: false,
		error: false
	},
    propOverrides
  );

  const wrapper = shallow(<TestableLeaderBoardContainer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<LeaderBoardContainer />', () => {
  it('renders', () => {
		const { wrapper, props } = setup();
		expect(wrapper.exists()).toBe(true);
	});

	it('renders a LeaderBoard', () => {
		const { wrapper } = setup();
    expect(wrapper.find('LeaderBoard')).toHaveLength(1);
	});
});

