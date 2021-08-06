<template>
  <div class="success">
<head>
  <title>Thanks for booking your guide!</title>
  <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
  <section>
    <h1>You have successfully booked a guide!</h1>
    <b-button href="http://localhost:8080/Login" class="btn btn-primary text-centered">Go back</b-button>
  </section>
</body>
  </div>
</template>

<script>
export default{
 name:"Success"   
}
</script>

<style scoped>
.success{
  background-color: white;
  background-image: none;
}

h1 {
  color:white;
  margin: 100px 40px;
  text-align: center;
}

#btn {
  text-align: center;
}
</style>

