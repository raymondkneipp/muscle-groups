import styled from "styled-components";

const Styles = styled.div`
	#abs,
	#traps,
	#shoulders,
	#biceps,
	#triceps,
	#forearms,
	#glutes,
	#quads,
	#hamstrings,
	#calves,
	#chest,
	#obliques,
	#lats {
		stroke: white;
		stroke-width: 0px;
		transition: fill 0.3s;
	}

	#abs {
		fill: ${({ colors, defaultColor }) => colors.abs || defaultColor};
	}

	#traps {
		fill: ${({ colors, defaultColor }) => colors.traps || defaultColor};
		animation-delay: 0.1s;
	}

	#shoulders {
		fill: ${({ colors, defaultColor }) => colors.shoulders || defaultColor};
		animation-delay: 0.2s;
	}

	#biceps {
		fill: ${({ colors, defaultColor }) => colors.biceps || defaultColor};
		animation-delay: 0.3s;
	}

	#quads {
		fill: ${({ colors, defaultColor }) => colors.quads || defaultColor};
		animation-delay: 0.1s;
	}

	#hamstrings {
		fill: ${({ colors, defaultColor }) => colors.hamstrings || defaultColor};
		animation-delay: 0.2s;
	}

	#obliques {
		fill: ${({ colors, defaultColor }) => colors.obliques || defaultColor};
		animation-delay: 0.1s;
	}

	#forearms {
		fill: ${({ colors, defaultColor }) => colors.forearms || defaultColor};
		animation-delay: 0.4s;
	}

	#lats {
		fill: ${({ colors, defaultColor }) => colors.lats || defaultColor};
	}

	#triceps {
		fill: ${({ colors, defaultColor }) => colors.triceps || defaultColor};
		animation-delay: 0.3s;
	}

	#glutes {
		fill: ${({ colors, defaultColor }) => colors.glutes || defaultColor};
		animation-delay: 0.1s;
	}

	#calves {
		fill: ${({ colors, defaultColor }) => colors.calves || defaultColor};
		animation-delay: 0.4s;
	}

	#chest {
		fill: ${({ colors, defaultColor }) => colors.chest || defaultColor};
		animation-delay: 0.1s;
	}
`;

const MuscleGroupsDiagram = ({ colors, defaultColor = "#333" }) => {
	colors = {
		abs: defaultColor,
		traps: defaultColor,
		shoulders: defaultColor,
		biceps: defaultColor,
		triceps: defaultColor,
		forearms: defaultColor,
		glutes: defaultColor,
		quads: defaultColor,
		hamstrings: defaultColor,
		calves: defaultColor,
		chest: defaultColor,
		obliques: defaultColor,
		lats: defaultColor,
		...colors,
	};

	return (
		<Styles colors={colors} defaultColor={defaultColor}>
			<svg
				version="1.1"
				id="svg885"
				width="449.8418"
				height="398.31937"
				viewBox="0 0 449.8418 398.31937"
			>
				<g id="g893" transform="translate(-369.97191,-93.393551)">
					<image
						width="1216.7297"
						height="1227.9611"
						preserveAspectRatio="none"
						id="image895"
						x="-33.744232"
						y="540.21356"
						// style="display:inline;opacity:0.587262"
					/>
					<g id="chest" data-tip data-for="chestTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 428.66245,126.16283 c -7.02357,3.76346 -21.08995,41.26555 2.20244,52.37162 20.92381,9.9767 38.62095,9.68189 39.44218,-1.66568 0.53842,-7.43991 1.51197,-35.6321 -2.98612,-42.27991 -5.50434,-8.13495 -32.35091,-11.80584 -38.6585,-8.42603 z"
							id="path897"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 514.59496,126.16283 c 7.02357,3.76346 21.08995,41.26555 -2.20244,52.37162 -20.92381,9.9767 -38.62095,9.68189 -39.44218,-1.66568 -0.53842,-7.43991 -1.51197,-35.6321 2.98612,-42.27991 5.50434,-8.13495 32.35091,-11.80584 38.6585,-8.42603 z"
							id="path1007"
						/>
					</g>
					<g id="biceps" data-tip data-for="bicepsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 415.23557,157.06593 c 0.59953,14.33101 6.98042,13.11314 3.54577,30.4222 -2.98028,15.01924 -21.59646,34.82268 -21.59646,34.82268 0,0 -10.29995,-14.74997 -7.51109,-41.54253 1.33358,-12.81172 15.84507,-13.08121 25.56178,-23.70235 z"
							id="path901"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 528.02184,157.06593 c -0.59953,14.33101 -6.98042,13.11314 -3.54577,30.4222 2.98028,15.01924 21.59646,34.82268 21.59646,34.82268 0,0 10.29995,-14.74997 7.51109,-41.54253 -1.33358,-12.81172 -15.84507,-13.08121 -25.56178,-23.70235 z"
							id="path1011"
						/>
					</g>
					<g id="abs" data-tip data-for="absTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 469.22567,205.08144 c 1.00684,-0.94147 2.04335,-10.47721 -1.12001,-13.80391 -4.48343,-4.71493 -18.8618,5.57263 -15.32829,11.95988 2.39303,4.32567 15.44146,2.7855 16.4483,1.84403 z"
							id="path989"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 469.22981,223.48912 c 1.7485,-1.03554 1.83874,-11.42799 -0.1233,-13.98924 -1.97952,-2.58408 -13.92085,-2.15302 -16.20867,0.0568 -2.72812,2.63511 -4.03192,11.82882 -0.79257,13.51024 3.9746,2.06306 14.48439,1.98582 17.12454,0.4222 z"
							id="path991"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 469.203,227.88141 c 1.7485,1.03554 1.83874,11.42799 -0.1233,13.98924 -1.97952,2.58408 -13.92085,2.15302 -16.20867,-0.0568 -2.72812,-2.63511 -4.03192,-11.82882 -0.79257,-13.51024 3.9746,-2.06306 14.48439,-1.98582 17.12454,-0.4222 z"
							id="path993"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 468.23949,246.17287 c 2.45342,2.04052 3.13678,38.17833 -0.47977,41.00576 -5.04631,3.94523 -20.30206,-28.01273 -15.96853,-39.16173 1.42666,-3.67041 14.4816,-3.47974 16.4483,-1.84403 z"
							id="path997"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 474.03174,205.08144 c -1.00684,-0.94147 -2.04335,-10.47721 1.12001,-13.80391 4.48343,-4.71493 18.8618,5.57263 15.32829,11.95988 -2.39303,4.32567 -15.44146,2.7855 -16.4483,1.84403 z"
							id="path1019"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 474.0276,223.48912 c -1.7485,-1.03554 -1.83874,-11.42799 0.1233,-13.98924 1.97952,-2.58408 13.92085,-2.15302 16.20867,0.0568 2.72812,2.63511 4.03192,11.82882 0.79257,13.51024 -3.9746,2.06306 -14.48439,1.98582 -17.12454,0.4222 z"
							id="path1021"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 474.05441,227.88141 c -1.7485,1.03554 -1.83874,11.42799 0.1233,13.98924 1.97952,2.58408 13.92085,2.15302 16.20867,-0.0568 2.72812,-2.63511 4.03192,-11.82882 0.79257,-13.51024 -3.9746,-2.06306 -14.48439,-1.98582 -17.12454,-0.4222 z"
							id="path1023"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 475.01792,246.17287 c -2.45342,2.04052 -3.13678,38.17833 0.47977,41.00576 5.04631,3.94523 20.30206,-28.01273 15.96853,-39.16173 -1.42666,-3.67041 -14.4816,-3.47974 -16.4483,-1.84403 z"
							id="path1025"
						/>
					</g>
					<g id="quads" data-tip data-for="quadsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 443.11419,270.80772 c -6.69903,1.7313 -15.63495,24.26214 -24.96387,32.31167 -15.49006,13.36573 -16.70436,72.61341 -2.91071,72.90669 15.85761,0.33717 11.88004,7.60751 22.37643,6.72399 22.12278,-1.86215 18.13287,-115.20765 5.49815,-111.94235 z"
							id="path1001"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 500.14322,270.80772 c 6.69903,1.7313 15.63495,24.26214 24.96387,32.31167 15.49006,13.36573 16.70436,72.61341 2.91071,72.90669 -15.85761,0.33717 -11.88004,7.60751 -22.37643,6.72399 -22.12278,-1.86215 -18.13287,-115.20765 -5.49815,-111.94235 z"
							id="path1029"
						/>
					</g>
					<g id="glutes" data-tip data-for="glutesTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 686.21579,250.29259 c -7.02357,3.76346 -14.31465,44.1647 -1.56195,52.88969 6.59199,4.51002 34.44415,7.32191 35.26538,-4.02566 0.53842,-7.43991 3.40337,-30.07687 -1.09472,-36.72468 -5.50434,-8.13495 -26.30112,-15.51916 -32.60871,-12.13935 z"
							id="path1037"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 758.09402,250.29259 c 7.02357,3.76346 14.31465,44.1647 1.56195,52.88969 -6.59199,4.51002 -34.44415,7.32191 -35.26538,-4.02566 -0.53842,-7.43991 -3.40337,-30.07687 1.09472,-36.72468 5.50434,-8.13495 26.30112,-15.51916 32.60871,-12.13935 z"
							id="path1059"
						/>
					</g>
					<g id="shoulders" data-tip data-for="shouldersTooltip">
						<path
							d="m 390.93984,170.30096 c 5.1222,-6.9064 -0.50958,-22.63602 8.33103,-36.73907 3.98749,-6.36108 20.47872,-12.50312 28.28198,-9.91728 -10.86747,6.26023 -10.46352,25.38536 -13.26716,30.10193 -5.85733,9.85381 -16.20333,7.8601 -23.34585,16.55442 z"
							id="shoulder"
						/>
						<path
							d="m 552.31757,170.30096 c -5.1222,-6.9064 0.50958,-22.63602 -8.33103,-36.73907 -3.98749,-6.36108 -20.47872,-12.50312 -28.28198,-9.91728 10.86747,6.26023 10.46352,25.38536 13.26716,30.10193 5.85733,9.85381 16.20333,7.8601 23.34585,16.55442 z"
							id="path1009"
						/>
						<path
							d="m 642.64739,169.5702 c 5.1222,-6.9064 -0.50958,-22.63602 8.33103,-36.73907 12.85491,-17.79229 37.37597,0.0617 34.48709,8.31486 -5.02188,12.61315 -28.8887,9.97395 -42.81812,28.42421 z"
							id="path1039"
						/>
						<path
							d="m 801.66242,169.5702 c -5.1222,-6.9064 0.50958,-22.63602 -8.33103,-36.73907 -12.85491,-17.79229 -37.37597,0.0617 -34.48709,8.31486 5.02188,12.61315 28.8887,9.97395 42.81812,28.42421 z"
							id="path1061"
						/>
					</g>
					<g id="triceps" data-tip data-for="tricepsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 660.99273,159.11905 c -0.48788,20.25858 8.57633,28.02285 6.02288,46.12786 -2.13838,15.16202 -22.08112,24.50179 -22.08112,24.50179 0,0 -7.44096,-17.68144 -5.29986,-44.53353 1.03668,-13.00112 14.0463,-20.14593 21.3581,-26.09612 z"
							id="path1041"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 783.31708,159.11905 c 0.48788,20.25858 -8.57633,28.02285 -6.02288,46.12786 2.13838,15.16202 22.08112,24.50179 22.08112,24.50179 0,0 7.44096,-17.68144 5.29986,-44.53353 -1.03668,-13.00112 -14.0463,-20.14593 -21.3581,-26.09612 z"
							id="path1063"
						/>
					</g>
					<g id="obliques" data-tip data-for="obliquesTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 424.55389,180.67474 c 8.48355,4.22361 16.39501,5.00088 22.60309,9.80388 3.14792,2.43545 -2.53239,29.36785 0.30178,72.33937 -5.59004,-0.16467 -13.13803,-0.41275 -16.27048,-5.16288 -3.41959,-5.18556 -0.16421,-28.76249 -2.68418,-38.28949 -2.44357,-9.23816 -6.36772,-12.63884 -7.01128,-19.52363 -0.60216,-6.44197 2.44146,-12.46518 3.06107,-19.16725 z"
							id="path999"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 518.70352,180.67474 c -8.48355,4.22361 -16.39501,5.00088 -22.60309,9.80388 -3.14792,2.43545 2.53239,29.36785 -0.30178,72.33937 5.59004,-0.16467 13.13803,-0.41275 16.27048,-5.16288 3.41959,-5.18556 0.16421,-28.76249 2.68418,-38.28949 2.44357,-9.23816 6.36772,-12.63884 7.01128,-19.52363 0.60216,-6.44197 -2.44146,-12.46518 -3.06107,-19.16725 z"
							id="path1027"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 681.22111,250.92274 c -0.60621,-9.03721 -0.74643,-19.14911 -0.88641,-25.58578 4.25263,4.33578 11.30566,12.71909 13.81769,20.95653 -4.46839,0.25442 -9.23819,1.61524 -12.93128,4.62925 z"
							id="path1043"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 763.0887,250.92274 c 0.60621,-9.03721 0.74643,-19.14911 0.88641,-25.58578 -4.25263,4.33578 -11.30566,12.71909 -13.81769,20.95653 4.46839,0.25442 9.23819,1.61524 12.93128,4.62925 z"
							id="path1065"
						/>
					</g>
					<g id="lats" data-tip data-for="latsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 665.77377,155.96896 c 9.03136,-0.95747 14.71418,-4.75329 22.50979,-11.596 2.66269,18.44885 6.02017,39.81248 31.38664,56.87523 0.46128,11.96721 0.60766,36.65405 -1.88504,52.96124 -15.59114,1.83915 -36.13107,-31.49351 -38.65104,-41.02051 -2.44357,-9.23816 -9.82517,-28.94458 -12.16548,-39.82469 -1.36059,-6.32538 -1.81448,-10.6932 -1.19487,-17.39527 z"
							id="path1045"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 778.53604,155.96896 c -9.03136,-0.95747 -14.71418,-4.75329 -22.50979,-11.596 -2.66269,18.44885 -6.02017,39.81248 -31.38664,56.87523 -0.46128,11.96721 -0.60766,36.65405 1.88504,52.96124 15.59114,1.83915 36.13107,-31.49351 38.65104,-41.02051 2.44357,-9.23816 9.82517,-28.94458 12.16548,-39.82469 1.36059,-6.32538 1.81448,-10.6932 1.19487,-17.39527 z"
							id="path1067"
						/>
					</g>
					<g id="traps" data-tip data-for="trapsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 428.96562,120.05696 c 9.77566,0.95467 19.54655,2.38223 29.86029,4.64537 2.07635,-11.70135 -4.13184,-23.10361 -8.39704,-29.424611 4.09825,24.941491 -6.83204,17.836251 -21.46325,24.779241 z"
							id="path907"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 514.29179,120.05696 c -9.77566,0.95467 -19.54655,2.38223 -29.86029,4.64537 -2.07635,-11.70135 4.13184,-23.10361 8.39704,-29.424611 -4.09825,24.941491 6.83204,17.836251 21.46325,24.779241 z"
							id="path1017"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 716.00153,93.393551 c 5.68997,39.171059 5.85307,67.162899 3.82546,103.601179 -38.1488,-25.52727 -17.01446,-63.08651 -47.42669,-74.38853 20.52504,-9.5553 36.23325,-7.60744 43.60123,-29.212649 z"
							id="path1047"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 728.30828,93.393551 c -5.68997,39.171059 -5.85307,67.162899 -3.82546,103.601179 38.1488,-25.52727 17.01446,-63.08651 47.42669,-74.38853 -20.52504,-9.5553 -36.23325,-7.60744 -43.60123,-29.212649 z"
							id="path1069"
						/>
					</g>
					<g id="calves" data-tip data-for="calvesTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 409.5139,383.99823 c 8.7976,28.27353 3.02914,42.20936 -5.80374,107.71469 -3.84118,-62.19375 -4.54354,-90.35101 5.80374,-107.71469 z"
							id="path1003"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 442.2862,389.51738 c 1.27719,42.0934 -2.81072,38.0069 -20.98889,101.55627 -0.26455,-43.36015 0.23102,-98.4855 20.98889,-101.55627 z"
							id="path1005"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 533.74351,383.99823 c -8.7976,28.27353 -3.02914,42.20936 5.80374,107.71469 3.84118,-62.19375 4.54354,-90.35101 -5.80374,-107.71469 z"
							id="path1031"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 500.97121,389.51738 c -1.27719,42.0934 2.81072,38.0069 20.98889,101.55627 0.26455,-43.36015 -0.23102,-98.4855 -20.98889,-101.55627 z"
							id="path1033"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 686.66055,395.70352 c -7.37703,-1.69802 -15.29853,-5.21689 -22.51846,-2.94171 -9.73459,3.06761 -14.54595,52.07866 -7.42942,77.1 1.90292,6.69058 17.94399,7.69481 20.82324,1.36276 10.61151,-23.33682 27.09732,-71.38416 9.12464,-75.52105 z"
							id="path1049"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 757.64926,395.70352 c 7.37703,-1.69802 15.29853,-5.21689 22.51846,-2.94171 9.73459,3.06761 14.54595,52.07866 7.42942,77.1 -1.90292,6.69058 -17.94399,7.69481 -20.82324,1.36276 -10.61151,-23.33682 -27.09732,-71.38416 -9.12464,-75.52105 z"
							id="path1071"
						/>
					</g>
					<g id="hamstrings" data-tip data-for="hamstringsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 708.39835,311.91918 c -7.13175,-2.5381 -13.56118,-3.68554 -20.78111,-1.41036 -9.73459,3.06761 -34.80127,53.36095 -27.68474,78.38229 20.71959,-7.78222 26.07057,-1.52242 37.19937,4.63067 18.26925,-32.30443 23.18934,-77.35941 11.26648,-81.6026 z"
							id="path1051"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 735.91146,311.91918 c 7.13175,-2.5381 13.56118,-3.68554 20.78111,-1.41036 9.73459,3.06761 34.80127,53.36095 27.68474,78.38229 -20.71959,-7.78222 -26.07057,-1.52242 -37.19937,4.63067 -18.26925,-32.30443 -23.18934,-77.35941 -11.26648,-81.6026 z"
							id="path1073"
						/>
					</g>
					<g id="forearms" data-tip data-for="forearmsTooltip">
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 387.69718,208.81886 c 5.03086,16.40209 12.22301,18.08001 8.93597,28.42922 -5.67714,17.87446 -14.92213,19.86771 -26.66124,44.05042 3.06448,-42.0621 7.58776,-41.84099 17.72527,-72.47964 z"
							id="path903"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 405.27926,232.34483 c -12.18035,23.33685 -33.07186,39.94365 -32.51006,55.03549 5.62172,0.0478 8.54531,0.40153 13.57043,3.07904 14.90459,-25.87673 18.14572,-35.28241 18.93963,-58.11453 z"
							id="path905"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 555.56023,208.81886 c -5.03086,16.40209 -12.22301,18.08001 -8.93597,28.42922 5.67714,17.87446 14.92213,19.86771 26.66124,44.05042 -3.06448,-42.0621 -7.58776,-41.84099 -17.72527,-72.47964 z"
							id="path1013"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 537.97815,232.34483 c 12.18035,23.33685 33.07186,39.94365 32.51006,55.03549 -5.62172,0.0478 -8.54531,0.40153 -13.57043,3.07904 -14.90459,-25.87673 -18.14572,-35.28241 -18.93963,-58.11453 z"
							id="path1015"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 633.7382,220.53196 c -9.0589,23.63665 -9.65293,45.20302 -9.09113,60.29486 5.62172,0.0478 6.97739,-0.99663 12.00251,1.68088 -0.43321,-15.47269 11.15167,-27.56231 11.65339,-37.58974 0.71052,-14.20054 -10.15108,-11.16654 -14.56477,-24.386 z"
							id="path1057"
						/>
						<path
							// style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
							d="m 810.57161,220.53196 c 9.0589,23.63665 9.65293,45.20302 9.09113,60.29486 -5.62172,0.0478 -6.97739,-0.99663 -12.00251,1.68088 0.43321,-15.47269 -11.15167,-27.56231 -11.65339,-37.58974 -0.71052,-14.20054 10.15108,-11.16654 14.56477,-24.386 z"
							id="path1075"
						/>
					</g>
				</g>
			</svg>
		</Styles>
	);
};

export default MuscleGroupsDiagram;
