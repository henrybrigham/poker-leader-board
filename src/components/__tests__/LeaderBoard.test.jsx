import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import LeaderBoard from '../LeaderBoard';
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

  const wrapper = mount(<LeaderBoard {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<LeaderBoard />', () => {
	const { wrapper, props } = setup();
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
	});

	it('calls props.fetchPlayers', () => {
    expect(props.fetchPlayers).toHaveBeenCalled();
	});
});

describe('Exchange Conditional Rendering', () => {
  it('renders the loading gif', () => {
		const { wrapper, props } = setup({isFetching: true});
    expect(wrapper.find('img')).toHaveLength(1);
	});

	it('does not render the loading gif', () => {
		const players = [
			{
				name: 'Hank',
				winnings: 2,
				country: 'USA',
				imageUrl: 'blob'
			},
			{
				name: 'John',
				winnings: 3,
				country: 'MX',
				imageUrl: 'blob'
			}
		];
		const { wrapper, props } = setup({players});
    expect(wrapper.find('Player')).toHaveLength(2);
	});
});

