<div>
  <div></div>
</div>

<style>
  div {
    display: grid;
    place-items: center;
    height: 20vh;
    width: 100%;
  }

  div > div {
    background-image: linear-gradient(64deg, 
      var(--primary-color) 30%, 
      var(--secondary-color) 30%,
      var(--secondary-color) 70%, 
      var(--primary-color) 70%);
    background-size: 2rem 2rem;
    height: 1rem;
    border-radius: 1rem;
    animation: slide 1000ms linear infinite;
  }

  @keyframes slide {
    0% { background-position: 0rem; }
    100% { background-position: 2rem;}
  }
</style>