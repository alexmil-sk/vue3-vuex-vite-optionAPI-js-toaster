<template>
  <div class="page-content">
    <h2>Contact Page</h2>
    <div class="btn-group">
      <button
        @click.prevent="
          $store.commit('createNotification', {
            type: 'info',
            message: 'Info Contact Page',
          })
        "
      >
        Info
      </button>
      <button
        @click.prevent="
          $store.commit('createNotification', {
            type: 'error',
            message: 'Error Notification from Contact Page',
            duration: 10,
          })
        "
      >
        Error
      </button>
      <button
        @click.prevent="
          $store.commit('createNotification', {
            type: 'warning',
            message: 'Warning Notification from Contact Page',
          })
        "
      >
        Warning
      </button>
      <button
        @click.prevent="
          $store.commit('createNotification', {
            type: 'success',
            message: 'Success Notification from Contact Page',
          })
        "
      >
        Success
      </button>
      <button
        @click.prevent="
          $store.commit('createNotification', {
            type: 'default',
            message: 'Persistant Notification Contact Page',
            autoClose: false,
          })
        "
      >
        Persistant Info
      </button>
    </div>
  </div>
</template>
