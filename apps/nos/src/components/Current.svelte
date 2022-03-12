<script>
  import { Article } from 'spaper';

  const defaultHabit = {
    title: 'Habit #1',
    due: new Date().toLocaleDateString(),
    description: 'Wake up and drink an 8oz glass of water',
    stack: {
        parent: '',
        child: '', 
    }
  };
  let habit = {
    title: '',
    due: new Date().toLocaleDateString(),
    description: 'Add a description...',
    stack: {
        parent: '', // id of habit preceeding this habit
        child: '', //  id of habit proceeding this habit
    }
  };
  let habits = [defaultHabit];

  const addHabit = () => {
    if (habit) {
      habits = habits.concat(habit);
      habit = defaultHabit;
    }
  };
</script>

<div class="max-w-full">
  <p>Learn who you are and what makes you tick by tracking your habits.</p>

  <div class="form-group">
    <div class="flex add-new-container">
      <input
        type="text"
        placeholder="Add new habit..."
        bind:value={habit.title}
      />
      <button on:click={addHabit}>Add</button>
    </div>

    {#if habits.length > 0}
      <h4>Habits:</h4>
      {#each habits as habit}
        <Article title={habit.title} border>
          <p slot="meta">{habit.due}</p>
          <p>{habit.description}</p>
        </Article>
      {/each}
    {/if}
  </div>
</div>

<style lang="postcss">
  .form-group {
    @apply flex flex-col items-center;
  }

  .add-new-container {
    @apply mt-5 mb-10;
  }
  input {
    @apply mr-5;
  }
</style>
