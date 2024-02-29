# vue3-learning

Learning VUE3 step by step with online tutorial: https://laracasts.com/series/learn-vue-3-step-by-step/

The code base is divide into **2** sections:

## Section 1

Basic Vue, introduction to the fundamental of Vue. Vue & Tailwind are pulled as CDN

### Start app:

1. start client: `npm run start:client`
2. start server: `npm run start:server`
3. start the server and the client in a single command: `npm run start`

### Tools:

1. tailwind.css -> for styling
2. json-server -> for mocking simple BE to simulate data fetching

   - run json-server: `npx json-server [fileName] -p [customPortNum]`

## Section 2

Build a `website` using Vue with Vite.

- For now only the basics so to keep it simple TS, JSX, test tools (unit & UI) **are not** covered
- The code base is in `vue-project` directory
- Different approaches to state management:
  - using local-storage
  - use global store file
  - use global store tool - [pinia](https://pinia.vuejs.org/getting-started.html) (official Vue state management tool)
