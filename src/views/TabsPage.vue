<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon :icon="home" />
          Home
        </ion-tab-button>
        <ion-tab-button tab="radio">
          <ion-icon :icon="albums"></ion-icon>
          Booking
        </ion-tab-button>
        <ion-tab-button tab="library">
          <ion-icon :icon="list"></ion-icon>
          History
        </ion-tab-button>
        <ion-tab-button :router-link="{ name: 'Profile' }" tab="search">
          <ion-icon :icon="person"></ion-icon>
          Profile
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { home, person, albums, list } from 'ionicons/icons';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';

</script>


<style scoped></style>
