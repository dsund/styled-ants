import * as React from "react";
import { ThemeProvider } from 'styled-components';
import { Button } from './Button/Button';
import { lightTheme } from './themes/lightTheme';

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Button>Button</Button>
		</ThemeProvider>
	);
};

export default App;