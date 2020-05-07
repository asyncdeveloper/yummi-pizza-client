import React from 'react';
import {shallow} from 'enzyme';
import HomePage from "../components/HomePage";

describe('<HomePage />', () => {

  it('renders home page and shows men', () => {
    const wrapper = shallow(<HomePage />);
    const headerText = wrapper.find('.header-text');

    expect(headerText).toHaveLength(1);
    expect(headerText.text()).toEqual('Choose Pizza From Menu');
  });

});

