<script lang="ts">
  export let related: Pizza[];
</script>

<hr />

  <ul>
    <h2>You might also like</h2>
    {#each related as { image, id, name }}
      <li>
        <a href="/menu/{id}">
          <img src={image} alt="">
          <p>{name}</p>
        </a>
      </li>
      {/each}
  </ul>

<style>
  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
    margin: auto;
    max-width: 100%;
  }
  h2 {
    grid-column: 1 / -1;
  }
  a {
    display: grid;
    font-weight: 600;
    gap: .5rem;
    justify-items: center;
  }

  img {
    max-width: 200px;
    width: 100%;
  }
</style>