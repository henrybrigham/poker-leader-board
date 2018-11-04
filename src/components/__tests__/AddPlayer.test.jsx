import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import AddPlayer from '../AddPlayer';
Enzyme.configure({ adapter: new Adapter() });

const setup = propOverrides => {
  const props = Object.assign({
		createPlayer: jest.fn()
	},
    propOverrides
  );

  const wrapper = shallow(<AddPlayer {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<AddPlayer />', () => {
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

	it('updatePlayer sets state correctly', () => {
		const { wrapper } = setup();
		const value = 300;
		const label = 'winnings';
		

		wrapper.instance().updatePlayer(value, label);
    expect(wrapper.state().winnings).toEqual(300);
	});

	it('createPlayer calls props.createPlayer', () => {
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
		wrapper.instance().createPlayer(e);
		expect(props.createPlayer).toHaveBeenCalled();
		expect(wrapper.state().errorMessage).toEqual('');
	});

	it('createPlayer sets state.errorMessage correctly', () => {
		const { wrapper, props } = setup();
		const e = {
			preventDefault: jest.fn()
		}
		wrapper.instance().createPlayer(e);
		expect(wrapper.state().errorMessage).toEqual('All fields must contain valid inputs');
	});

	it('createPlayer sets state.errorMessage correctly', () => {
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

		wrapper.instance().createPlayer(e);
		expect(wrapper.state().errorMessage).toEqual('Winnings must be a number');
	});

	it('createPlayer sets state.errorMessage correctly', () => {
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

		wrapper.instance().createPlayer(e);
		expect(wrapper.state().errorMessage).toEqual('Please upload an image');
	});
});

