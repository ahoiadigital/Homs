import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Louis Smithz';
  greetUser(name);
  document.body.style.background = 'red';
});
