# My Movie Quotes

- Made using `create-react-native-app` <a href="https://github.com/expo/create-react-native-app">Create React Native App</a>
- Uses Expo so you will not have to install Pods every 10 minutes
- I tried to make it with the idea of "dumb" components that didn't do any logic
- It checks whether a quote has already been added and shows a message if it has, should be BE
- Can view all added quotes or just your own. The "all quotes" are mock data
  
<img width="312" alt="Screenshot 2024-02-10 at 14 25 34" src="https://github.com/GMWilkinson/my-movie-quotes/assets/43377488/21a0d315-cf8c-473b-82ac-177c4d95d286">

<img width="307" alt="Screenshot 2024-02-10 at 14 29 55" src="https://github.com/GMWilkinson/my-movie-quotes/assets/43377488/9e986326-f78d-4211-b057-8f8ba4d4a3ba">

<img width="309" alt="Screenshot 2024-02-10 at 14 30 16" src="https://github.com/GMWilkinson/my-movie-quotes/assets/43377488/3bb79c93-f3a1-4c6f-a745-75b72cce00f6">

<img width="311" alt="Screenshot 2024-02-10 at 14 31 38" src="https://github.com/GMWilkinson/my-movie-quotes/assets/43377488/ea444b17-c172-470d-9ead-9352c0b78098">


## 🚀 How to use

- node version must be 18.17.0 or greater
- `yarn`
- `yarn ios`
- `yarn android`

## What I would change/fix/improve

- I misread the brief and have not made it persist states when app is fully closed, state will persist while app is active in the background but not when closed. The only way I could think of doing that without using a server would be with Storage and that feels pointless now that time has already run out
- Was going to add downvotes but time ran out
- Upvotes, adding quotes and retrieving data should all obviously be done through an API
- Too many useStates much of it could be moved to a BE
- Tests, ran out of time
- Wasted time on reusable components that were only used once
- Hardly any UI and what it has is very basic
