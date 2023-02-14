<template>
  <div class="page-content">
    <h2>Home Page</h2>
    <div class="btn-group">
      <button
        @click.prevent="$store.commit('createNotification', {
            type: 'error',
            message: 'Error Notification from Contact Page',
            duration: 10,
          })
        "
      >Create Notification Home
      </button>
    </div>
  </div>
</template>
