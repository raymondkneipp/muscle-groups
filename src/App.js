import { useState } from "react";
import "./App.css";
import MuscleGroupsDiagram from "./components/MuscleGroupsDiagram";

function App() {
	const [colors, setColors] = useState({});

	const handleColors = (e) => {
		setColors({
			...colors,
			[e.target.name]: e.target.checked && "#757de8",
		});
	};

	return (
		<div className="App">
			<MuscleGroupsDiagram colors={colors} />

			<div className="grid">
				<div className="group">
					<label htmlFor="chest">chest</label>
					<input
						type="checkbox"
						name="chest"
						id="chest"
						onChange={(e) => handleColors(e)}
						value={colors.chest || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="traps">traps</label>
					<input
						type="checkbox"
						name="traps"
						id="traps"
						onChange={(e) => handleColors(e)}
						value={colors.traps || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="shoulders">shoulders</label>
					<input
						type="checkbox"
						name="shoulders"
						id="shoulders"
						onChange={(e) => handleColors(e)}
						value={colors.shoulders || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="lats">lats</label>
					<input
						type="checkbox"
						name="lats"
						id="lats"
						onChange={(e) => handleColors(e)}
						value={colors.lats || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="abs">abs</label>
					<input
						type="checkbox"
						name="abs"
						id="abs"
						onChange={(e) => handleColors(e)}
						value={colors.abs || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="biceps">biceps</label>
					<input
						type="checkbox"
						name="biceps"
						id="biceps"
						onChange={(e) => handleColors(e)}
						value={colors.biceps || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="triceps">triceps</label>
					<input
						type="checkbox"
						name="triceps"
						id="triceps"
						onChange={(e) => handleColors(e)}
						value={colors.triceps || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="forearms">forearms</label>
					<input
						type="checkbox"
						name="forearms"
						id="forearms"
						onChange={(e) => handleColors(e)}
						value={colors.forearms || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="obliques">obliques</label>
					<input
						type="checkbox"
						name="obliques"
						id="obliques"
						onChange={(e) => handleColors(e)}
						value={colors.obliques || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="glutes">glutes</label>
					<input
						type="checkbox"
						name="glutes"
						id="glutes"
						onChange={(e) => handleColors(e)}
						value={colors.glutes || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="hamstrings">hamstrings</label>
					<input
						type="checkbox"
						name="hamstrings"
						id="hamstrings"
						onChange={(e) => handleColors(e)}
						value={colors.hamstrings || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="quads">quads</label>
					<input
						type="checkbox"
						name="quads"
						id="quads"
						onChange={(e) => handleColors(e)}
						value={colors.quads || ""}
					/>
				</div>

				<div className="group">
					<label htmlFor="calves">calves</label>
					<input
						type="checkbox"
						name="calves"
						id="calves"
						onChange={(e) => handleColors(e)}
						value={colors.calves || ""}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
