<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <div>
      <RouterView></RouterView>
    </div>
    <div>
      <nav style="background: #9F8DC3; padding: 10px 20px; position: fixed; top: 0; left: 0; right: 0; z-index: 1000;">
        <ul style="list-style: none; display: flex; justify-content:center; gap: 20px; margin: 0; padding: 0; color: white;">
          <li><router-link to="/home" style="color: white">Home</router-link></li>
          <li><router-link to="/listUrl" style="color: white">List URL</router-link></li>
          <li><router-link to="/createUrl" style="color: white">Create URL</router-link></li>
          <li><router-link to="/manageTags" style="color: white">Manage Tags</router-link></li>
        </ul>
      </nav>
    </div>
</template>
