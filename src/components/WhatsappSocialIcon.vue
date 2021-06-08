<template>
  <SocialChat
      icon
      :attendants="attendants"
    >
      <p slot="header">Click on one of our attendants below to chat on WhatsApp.</p>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >      
      </template>
      <small slot="footer">Opening hours: 9am to 6pm</small>
    </SocialChat>
</template>

<script>
export default {
data: () => ({
    attendants: [
      {
        app: 'whatsapp',
        label: 'Technical support',
        name: 'Head Tech Team',
        number: '971509873721',
        avatar: {
          src: 'https://picsum.photos/200',
          alt: 'Head Tech Team'
        }
      },
      // ...
    ]
  })
}
</script>

<style scoped>

img {
  display: inline-block;
}
</style>

<style>

:root {
  --vsc-bg-header: #46c056;
  --vsc-bg-footer: #fafafa;
  --vsc-text-color-header: #fff;
  --vsc-text-color-footer: inherit;
  --vsc-bg-button: #46c056;
  --vsc-text-color-button: #fff;
  --vsc-outline-color: #46c056;
  --vsc-border-color-bottom-header: transparent;
  --vsc-border-color-top-footer: #f3f3f3;
}
</style>

