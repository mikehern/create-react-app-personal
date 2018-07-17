import React from 'react';
import App from '../components/App';
import { render, cleanup, wait, getByText } from 'react-testing-library';

//Unmounts any React trees, preventing bugs and memory leaks
afterEach(cleanup);

beforeEach(() => {
  fetch.resetMocks();
});

describe(`Tests boilerplate component`, () => {
  it(`gets the username and returns it on the page`, async () => {
    //Prepare mocked data for the component to fetch
    const username = { username: `skynet` };
    fetch.mockResponseOnce(JSON.stringify(username));

    //Instantiate the component
    const { container } = render(<App />);

    //Allows 4500ms (default) to pass, specifically for async fetch
    await wait();

    //Uses 3rd optional parameter to check for partial match of 2nd arg,
    //returning div's entire textContent
    const headerText = getByText(container, 'Aloha', { exact: false }).textContent;
    expect(headerText).toBe(`Aloha skynet!`);
  });
});
