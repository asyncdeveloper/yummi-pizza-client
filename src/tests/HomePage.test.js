import React from 'react';
import {mount} from 'enzyme';
import {HomePage} from "../components/HomePage";
import {PizzaCard} from "../components/PizzaCard";

describe('<HomePage />', () => {
  let wrapper;
  let props;

  beforeEach( () => {
    props = {
      'menu': [
        { 'id' : '1', 'name': 'Test Menu', 'price': 400.79, 'description': 'Test Description' },
        { 'id' : '2', 'name': 'Test Menu II', 'price': 200.19, 'description': 'Test Description II' },
        { 'id' : '3', 'name': 'Test Menu III', 'price': 100.09, 'description': 'Test Description III' }
      ],
      'isLoading' : false,
      errorMessage: null,
      cart: [],
      inCart: [],
      fetchMenu: () => {},
      addItemToCart: id => {},
      removeItemFromCart: id => {},
    };
    wrapper = mount(<HomePage {...props} />);
  });

  it('renders home page and shows menu', () => {
    const headerText = wrapper.find('.header-text');

    expect(headerText).toHaveLength(1);
    expect(headerText.text()).toEqual('Choose Pizza From Menu');
  });

  it('renders page and shows menu list', () => {
    expect(wrapper.find(PizzaCard)).toHaveLength(3);
  });

});

