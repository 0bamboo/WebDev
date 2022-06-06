import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControllLabel from "@mui/material/FormControlLabel";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from "react";
// import { red } from "@mui/material/colors";

function Checkb() {
	const [checked, setChecked] = useState(true);
	return (
		<FormControllLabel
			control={
				<Checkbox
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
					color="secondary"
					inputProps={{
						"aria-label": "secondary checkbox",
					}}
					icon={<FavoriteBorder />}
					size="large"
					checkedIcon={<Favorite />}
					// style={{color:red,}}
					// disabled
				/>
			}
			label="testing"
		/>
	);
}
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Checkb />
				<ButtonGroup>
					<Button
						startIcon={<SaveIcon />}
						style={{
							fontSize: 26,
						}}
						onClick={() => alert("hello")}
						size="large"
						variant="contained"
						color="primary"
					>
						Hello World !
					</Button>
					<Button
						startIcon={<DeleteIcon />}
						style={{
							fontSize: 26,
						}}
						onClick={() => alert("hello")}
						size="large"
						variant="contained"
						color="secondary"
					>
						Hello World !
					</Button>
				</ButtonGroup>
				<img src={logo} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
