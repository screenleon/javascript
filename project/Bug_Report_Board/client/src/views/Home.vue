<template>
  <div>
    <h1>this is the home page</h1>
    <ul class="list-unstyled" v-for="user in users" :key="user._id">
      <li class="media">
        <!-- <img class="mr-3" src="..." alt="Generic placeholder image" /> -->
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{user.username}}</h4>
          <h5 class="mt-0 mb-1">{{user.status}}</h5>
          <h5 class="mt-0 mb-1">{{user.identity}}</h5>
          <h5 class="mt-0 mb-1">{{user.deal_with_bugs}}</h5>
          <br />
          <small>{{user.create_at}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const API_URL = 'http://192.168.0.124:4300/users';

// @ is an alias to /src

export default {
  name: 'home',
  data: () => ({
    users: [],
  }),
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then((result) => {
        this.users = result;
        // console.log(result);
      });
  },
};
</script>
