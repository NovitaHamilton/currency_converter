/**
 * Before we begin, we need to setup the environment to run React tests:
 * 1- run the following command: npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @babel/preset-env @babel/preset-react
 * 2- In the root directory of the client folder, create a new file and name it ".babelrc"
 * 3- Add the following content to the file: 
 *      {
            "presets": [
                "@babel/preset-env",
                ["@babel/preset-react", { "runtime": "automatic" }]
            ]
        }
 * 4- In package.json, add the following at the end of the file (before the last } bracket):
        ,"jest": {
            "testEnvironment": "jsdom"
        }
 *******       
 * Necessary import:
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Conversion from '../components/Conversion';
import { convertCurrencyAmountFrom } from '../utils/currency_utils';

/**
 * we will test the conversion section that contains: currencyFrom, currencyTo, amountTo and amountFrom input fields
 * You need to do write one unit test that ensure the functionality of the section is working as intended.
 * We need to test that the user will be able to type into the input fields
 * Once the input field change the corresponding amount should update
 */

test('Testing conversion section by Amount From change', () => {
  // convertCurrency is a mock function now
  const convertCurrencyAmountFromMock = jest.fn();

  // Set up user event
  const user = userEvent.setup();

  // Render the conversion component
  render(
    <Conversion convertCurrencyAmountFromMock={convertCurrencyAmountFromMock} />
  );

  // Simulate changing the amountFrom value
  const newAmountFrom = '1';
  user.type(screen.getByTestId('amountFromInput-test'), newAmountFrom);

  // Validate that the convertCurrencyAMountFrom is called with the updated amountFrom
  expect(convertCurrencyAmountFromMock).toHaveBeenCalled();
});
