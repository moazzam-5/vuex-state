<template>
    <footer>
  <div class="container">
    <div class="footer-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
    <p>&copy; 2023 Your Website. All rights reserved.</p>
  </div>
</footer>

</template>

<script>
export default {

}
</script>
<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.footer-links a {
  color: #666;
  margin-right: 10px;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

p {
  color: #666;
  margin-top: 10px;
}

</style>