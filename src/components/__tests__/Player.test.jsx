import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Player from '../Player';
import UpdatePlayer from '../UpdatePlayer';

Enzyme.configure({ adapter: new Adapter() });

const setup = propOverrides => {
  const props = Object.assign({
		player: {
			name: 'Bob Weaver',
			winnings: 200,
			country: 'USA'
		},
		updatePlayer: jest.fn(),
		deletePlayer: jest.fn(),
		index: 2
	},
    propOverrides
  );

  const wrapper = shallow(<Player {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Player />', () => {
  it('renders', () => {
		const { wrapper, props } = setup();
		expect(wrapper.exists()).toBe(true);
	});

	it('renders correct flag', () => {
		const { wrapper } = setup();

		const imgSource = wrapper.find('img').prop('src');
    expect(imgSource).toBe('usa.jpeg');
	});

	it('renders UpdatePlayer component', () => {
		const { wrapper } = setup();
		wrapper.instance().toggleOps();
    expect(wrapper.find('UpdatePlayer')).toHaveLength(1);
	});

	it('toggles this.state.editing', () => {
		const { wrapper } = setup();

		wrapper.instance().toggleOps();
    expect(wrapper.state().editing).toBe(true);
	});

	it('renderUpdatePlayer returns updatePlayer component', () => {
		const { wrapper } = setup();
		wrapper.setState({editing: true});
		const result = wrapper.instance().renderUpdatePlayer();
    expect(wrapper.find('UpdatePlayer')).toHaveLength(1);
	});
});

