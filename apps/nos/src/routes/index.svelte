<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Habits from '../components/Current.svelte';
  import Thoughts from '../components/Thoughts.svelte';
  import Entanglement from '../components/Entanglement.svelte';

  import { Navbar } from 'spaper';

  export let url = '';
</script>

<Router {url}>
  <Navbar split={false}>
    <h3 slot="brand">
        <Link to="/">nós</Link>
    </h3>
    <ul class="inline">
      <li><Link to="/">Habits</Link></li>
      <li><Link to="entanglement">Entanglement</Link></li>
      <li><Link to="thoughts">Thoughts</Link></li>
    </ul>
  </Navbar>

  <div class="content">
    <Route path="/" component={Habits} />
    <Route path="entanglement" component={Entanglement} />
    <Route path="thoughts" component={Thoughts} />
  </div>
</Router>
