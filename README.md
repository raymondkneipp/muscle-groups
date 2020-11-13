# Muscle Groups Diagram

## React Component

```JSX
<MuscleGroupsDiagram />
```

![Muscle Group Diagram](src/images/groups.svg)

## Colorize Muscle Groups

Pass a colors object into the component

```JSX
const colors = {
	abs: "#333",
	traps: "#333",
	shoulders: "#333",
	biceps: "#333",
	triceps: "#333",
	forearms: "#333",
	glutes: "#333",
	quads: "#333",
	hamstrings: "#333",
	calves: "#333",
	chest: "#333",
	obliques: "#333",
	lat: "#333",
};

colors.chest = "blue";

<MuscleGroupsDiagram colors={colors} />
```

## `defaultColor` Prop

```JSX
<MuscleGroupsDiagram defaultColor={"teal"} />
```

This will set the default color of all the muscle groups
