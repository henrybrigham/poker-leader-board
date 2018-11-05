import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import UpdatePlayer from '../UpdatePlayer';
Enzyme.configure({ adapter: new Adapter() });

const setup = propOverrides => {
  const props = Object.assign({
		player: {
			name: 'John',
			winnings: 30,
			country: {
				value: 'USA',
				label: 'USA',
			},
			imageUrl: 'kdjflaskfj34',
			upload: null
		},
		updatePlayer: jest.fn(),
		toggleOps: jest.fn()
	},
    propOverrides
  );

  const wrapper = shallow(<UpdatePlayer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<UpdatePlayer />', () => {
  it('renders', () => {
		const { wrapper, props } = setup();
		expect(wrapper.exists()).toBe(true);
	});

	it('updateCountry sets state correctly', () => {
		const { wrapper } = setup();
		const selectedCountry = {
			value: 'USA',
			label: 'USA'
		}

		wrapper.instance().updateCountry(selectedCountry);
    expect(wrapper.state().country).toEqual(selectedCountry);
	});

	it('updatePlayer calls props.updatePlayer', () => {
		const { wrapper, props } = setup();

		wrapper.setState({
			name: 'John',
			winnings: 30,
			country: {
				value: 'USA',
				label: 'USA'
			},
			file: 'asdkfj3j412312',
			upload: true
		});

		const e = {
			preventDefault: jest.fn()
		}
		wrapper.instance().updatePlayer(e);
		expect(props.updatePlayer).toHaveBeenCalled();
		expect(wrapper.state().errorMessage).toEqual('');
	});

	it('updatePlayer sets state.errorMessage correctly', () => {
		const { wrapper, props } = setup();
		const e = {
			preventDefault: jest.fn()
		}
		wrapper.instance().updatePlayer(e);
		expect(wrapper.state().errorMessage).toEqual('Please upload a new image');
	});

	it('updatePlayer sets state.errorMessage correctly', () => {
		const { wrapper, props } = setup();
		const e = {
			preventDefault: jest.fn()
		}
		wrapper.setState({
			name: 'John',
			winnings: 'dfdfs30',
			country: {
				value: 'USA',
				label: 'USA'
			},
			file: 'asdkfj3j412312',
			upload: true
		});		

		wrapper.instance().updatePlayer(e);
		expect(wrapper.state().errorMessage).toEqual('Winnings must be a number');
	});

	it('updatePlayer sets state.errorMessage correctly', () => {
		const { wrapper, props } = setup();
		const e = {
			preventDefault: jest.fn()
		}
		wrapper.setState({
			name: 'John',
			winnings: 30,
			country: {
				value: 'USA',
				label: 'USA'
			}
		});		

		wrapper.instance().updatePlayer(e);
		expect(wrapper.state().errorMessage).toEqual('Please upload a new image');
	});
});

