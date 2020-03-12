## Task
Implement a subscription order process for a cloud storage provider with React stack.

Subscription order process has 4 steps:

1. Select subscription parameters:
  - Duration: 3/6/12 Months (default: 12)
  - Amount of gigabytes in a cloud: 3/5/10/20/30/50 (default: 5)
  - Upfront payment: yes/no (default: no)

2. User data: Last name, First name, Email, Street Address
3. Credit Card data: Card number, Card expiration date, Card security code
4. Confirmation: Order summary inclusing selected subscription parameters and the computed price, Terms agreement checkbox, Confirm button.

- All parameters are required
- A user should be able to change steps by clicking on Next or Back button.
- Every step needs to be completed in order to see the next one.
- Confirm button click handler should send data to an API endpoint [https://httpbin.org/post](https://httpbin.org/post)

Price calculation:
- One gigabyte in cloud costs 2$ per month.
- Upfront payment adds a 10% discount.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

