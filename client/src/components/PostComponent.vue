<template>
  <div class="container">
    <h1>Bus Details</h1>
    <hr>
    <p v-if="error">{{ error }}</p>
    <div class="posts-container">
        <div class="post"
          v-for="(post, index) in posts"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id">
            {{ `${post.date_created.getDate()}/${post.date_created.getMonth()}/${post.date_created.getFullYear()}` }}
            <ul>
              <li>BusName: {{ post.busName }}</li>
              <li>Phone: {{ post.phone }}</li>
              <li>Address: {{ post.address }}</li>
            </ul>
        </div>
      </div> 
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try{

      this.posts = await PostService.getPosts();
      
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
