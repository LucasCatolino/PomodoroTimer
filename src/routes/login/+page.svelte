<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from '$app/navigation';

  let { form, data } = $props();
  let  { cookie }  = $state(data);

</script>

<div class="login min-h-screen flex flex-col justify-center items-center">
  {#if cookie === undefined}
    <form method="post" use:enhance>
      <label for="email">Email</label>
      <input name="email" type="email" />
    
      <label for="password">Password</label>
      <input name="password" type="password" />
    
      <button class="bg-green-600 text-xl font-bold rounded-lg px-5 py-2 me-2 mb-2" type="submit">Submit</button>
    
      {#if form}
        <p class="error">{form.message}</p>
      {/if}
    </form>
  {:else}
    <div class="p-6 rounded">
      <div class="mb-5 justify-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome back, {cookie}</h1>        
        <button class="bg-orange-600 text-xl font-bold rounded-lg px-5 py-2 me-2" on:click={() => goto('/logout')}>Log out</button>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  form {
    @apply p-4 max-w-screen-sm w-full mx-auto;
    @apply flex flex-col gap-2;
  }

  .error {
    @apply text-red-500;
  }

  .login {
      text-align: center;
      display: block;
      margin: 20px auto;
  }
</style>