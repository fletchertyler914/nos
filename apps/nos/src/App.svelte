<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import 'papercss/dist/paper.min.css';

  import Router from './routes/index.svelte';
</script>

<Tailwind />

<main>
  <Router />
</main>

<style lang="postcss">
  :global {
    body {
      @apply h-full min-h-full bg-gray-800 text-gray-400;
    }

    .content {
      @apply flex flex-col items-center justify-center;
      padding-top: 2em;
    }

    p {
      @apply font-bold text-xl;
    }
  }
</style>
