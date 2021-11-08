import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);


describe('Contact component', () => {
  test('renders', () => {
    render(<ContactForm />);
  });

  test('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });
  
})

test('renders', () => {
  const { getByTestId } = render(<ContactForm />)
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})

test('renders', () => {
  const { getByTestId } = render(<ContactForm />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})
