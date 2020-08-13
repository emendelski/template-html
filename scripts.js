// Insert HTML
var wrapit = async function wrapit(wrapper) {
  const { html } = wrapper.dataset;
  const { origin } = location;

  wrapper.innerHTML = await (await fetch(`${origin}/texts/${html}.html`)).text();
};

if (document.querySelectorAll('[data-html]')) {
  window.addEventListener('load', () => {
    document.querySelectorAll('[data-html]').forEach(wrapit);
  }, false);
}