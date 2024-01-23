<script lang="ts">
  export let pizza: Pizza;
</script>

<a href="/menu/{pizza.id}">
  <img src={pizza.image} alt="">
  <p>{pizza.name}</p>
</a>

<style>
  a {
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
  }
  p {
    position: absolute;
    
    background-color: var(--accent-color);
    width: 100%;
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;

  }
</style>

