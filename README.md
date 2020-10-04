# React Stopwatch

## Alex McGovern Smith

A simple stopwatch built with React & Material UI.

### How to run

From project root:
`yarn`

`yarn run start`

### Build process

I tried to have as lean an approach as possible to components and their responsiblities.
All the state logic happens inside the `Stopwatch` component, and it just passes state as props to it's children.
The initial timer came together very quickly, so I spent a little extra time to make the user experience as polished and intuitive as it could be.

#### Timer

I tried to think of the simplest way to do this, and my initial instinct was with a library like `moment.js` or similar.
After that not working, I realised I could just subtract `new Date()` from a fixed `Date()` and add some controlling logic and it would be done.

#### Buttons

I made the stopwatch buttons responsible for checking state themselves, and they are called as functions within the same class. Normally I would have gone for a re-usable component, but in this case given the unique needs of each button and the fact that they had to set the components state, I think this approach makes sense.

#### Material UI

I chose to use material UI as I have recently been learning about it, and wanted to apply it to something.
I think it makes sense on quick projects like these to focus only on the core features, and quickly prototype something using an existing UI framework. It also should be good preparation for using a company wide design system and component libraries to quickly assemble prototypes without reinventing the wheel.

#### Laps

The `Laps` component uses `memo` to only re-render on a prop change to save on resources.
Surprisingly, this component gave the most amount of trouble: trying to make it constrain to the height of the parent and overflow reponsively. I gave up on this and set it to a fixed `maxHeight` instead, but might revisit this in a future version.
