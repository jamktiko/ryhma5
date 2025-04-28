<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  let activeColor= 'red';

  function handleClick(color: string) {
    console.log("klikattu", color);
  }
</script>

<Button
color="red"
active={activeColor === 'red'}
onClick={() => handleClick('red')}
/>
<Button
color="blue"
active={activeColor === 'blue'}
onClick={() => handleClick('blue')}
/>
<Button
color="green"
active={activeColor === 'green'}
onClick={() => handleClick('green')}
/>
<Button
color="yellow"
active={activeColor === 'yellow'}
onClick={() => handleClick('yellow')}
/>