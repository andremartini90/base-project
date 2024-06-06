module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is your component name?'
      }
    ], // array of inquirer prompts
    actions: [] // array of actions
  })
}
