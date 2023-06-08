import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Louis Smith';
  greetUser(name);
  document.body.style.background = 'blue';
});
