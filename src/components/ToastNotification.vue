<template>
  <div
    class="toast-notification"
    :style="`--toast-duration: ${duration}s; --toast-color:${toastColor}`"
  >
    <div class="close-btn" @click="$store.commit('removeNotifications', id)" title="Close">
      <i class="ri-icon ri-lg ri-close-fill"></i>
    </div>
    <div class="body">
      <i :class="`ri-icon ri-2x ${toastIcon}`"></i>
      <div class="vl"></div>
      <div class="content">
        <div class="content_title">{{ toastTitle }}</div>
        <p class="content_message">{{ message }}</p>
      </div>
    </div>
    <div v-if="autoClose" class="progress"></div>
  </div>
</template>

<script>
export default {
  name: "ToastNotification",
  data() {
    return {
      timer: null,
      startedAt: 0,
      delay: 0,
    };
  },
  props: ["id", "type", "title", "message", "autoClose", "duration"],

  //Setting up the automatic dismissing of notification after the specified duration
  mounted() {
    if (this.autoClose) {
      this.startedAt = Date.now();
      this.delay = this.duration * 1000;
      this.timer = setTimeout(() => this.$store.commit("removeNotifications", this.id), this.delay);
    }
  },
  //A computed property to set the icon for the notification
  computed: {
    toastIcon() {
      switch (this.type) {
        case "error":
          return "ri-emotion-unhappy-line";
        case "warning":
          return "ri-error-warning-line";
        case "success":
          return "ri-emotion-happy-line";
        default:
          return "ri-information-line";
      }
    },
    //Acomputed property to set the icon and progress bar color for the notification
    toastColor() {
      switch (this.type) {
        case "error":
          return "#ff355b";
        case "warning":
          return "#e8b910";
        case "success":
          return "#00cc69";
        default:
          return "#0067ff";
      }
    },
    //A computed property to set the title of the notification
    toastTitle() {
      return this.title && this.title !== null ? this.title : "Notification";
    },
  },
};
</script>



<style lang="scss" scoped>
.toast-notification {
  --toast-color: #0067ff;
  cursor: pointer;
  max-width: 450px;
  position: relative;
  background: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.08),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  min-height: 4rem;
  padding-inline: 1.5rem;
  padding-block: 1.2rem;
  transition: all 0.3s ease-in-out;
  .close-btn {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    display: flex;
    place-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    transition: var(--all-transition);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px rgb(228, 228, 228);
      border-radius: 50%;
    }
  }
}

.body {
  display: flex;
  gap: 1.4rem;
  place-items: center;

  i {
    color: var(--toast-color);
  }

  .vl {
    background: #e4e4e4;
    width: 0.12rem;
    height: 3rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    &__title {
      font-weight: 600;
    }
  }
}

.progress {
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 0.4rem;
  width: 100%;
  background: var(--toast-color);
  animation: progress var(--toast-duration) ease-in-out forwards;

  @keyframes progress {
    to {
      width: 0px;
    }
  }

  @keyframes toast-fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes toast-fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
}
</style>