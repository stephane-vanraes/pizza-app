<script lang="ts">    
  export let pizzas: Pizza[] = []
</script>

<ul>
{#each pizzas as pizza}
  <li>
    <a href="/menu/{pizza.id}">
    <img src={pizza.image} alt=""/>
    <p>{pizza.name}</p>
  </a>
  </li>
{/each}
</ul>

<style>
ul {
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  list-style-type: none;
  margin-inline: auto;
  max-width: 96ch;
  width: 100%;
}
a {
  border-radius: .5rem;;
  display: grid;    
  filter: grayscale(var(--grayness));
  font-weight: 500;
  gap: .5rem;
  grid-template-rows: max-content 3lh;
  justify-items: center;
  opacity: 1;
  padding: .5rem;
  text-align: center;
  transition: background-color 500ms, opacity 500ms;
}

img {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  height: 100px;
}

a:where(:active, :focus, :hover) {
  background-color: var(--primary-color);
  font-weight: 600;
}

ul:has(a:where(:active, :focus, :hover)) a:not(:where(:active, :focus, :hover)) {
  --grayness: 1;
  opacity: .75;
}
</style>