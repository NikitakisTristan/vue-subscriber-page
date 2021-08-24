<template>
  <body class="Background">
    <img class="img1" src="./assets/img1.jpg"/>
    <img class="img2" src="./assets/img2.jpg"/>
    <img class="img3" src="./assets/img3.jpg"/>
    <img class="img4" src="./assets/img4.jpg"/>
    <img class="img5" src="./assets/img5.jpg"/>
    
    <div class="Container">
      <Header title="Don't Miss Out On All The Fun" color="white"/>
      <span class="Content">
        Receive Exclusive offers on newly released games and deals when you subscribe to our newsletter
      </span>
      <AddEmail @Subscriber="newSubscriber"/>
    </div>
  </body>
</template>

<script>
import Header from "./components/Header"
import AddEmail from "./components/AddEmail"

export default {
  name: "App",
  components: {
    Header,
    AddEmail
  },
  data() {
    return {
      subscribers: []
    }
  },
  methods: {
      newSubscriber(user) {
        this.subscribers.push(user)
        console.log(user)
        console.log(this.subscribers)
      }
    },
};

</script>

<style>

.Background {
  background-image: linear-gradient(to right, #9DBAE8, #550022);
  padding: 80px 120px 80px 120px;
  min-width: 1100px;
  min-height: 550px;
  max-height: 550px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe Ui';
  color: white;
  overflow: hidden;
  position: relative;

}
.layer {
  background-color: #3113ff20;
  min-width: 1100px;
  min-height: 550px;
  max-height: 550px;
  max-width: 1100px;
  z-index: 1;
}


img {
  width: 450px;
  height: auto;
  float: left;
  position:absolute;
  z-index: 0;
  
}

.img1 {
  display: flex;
  transform: rotate(-90deg);
  width: 700px;
  right: -150px;
  bottom: -250px;
  

}
.img2 {
  right: -50px;
  top: -290px;
}

.img3 {
  left: -20px;
  bottom: -300px;
}

.img4 {
  top: -30px;
}

.img5 {
  left: -20px;
  top: -350px;
}

.Container {
  border-style: solid;
  border-width: 1px;
  border-color: #707070;
  border-radius: 8px;
  background: #0D0D0D49;
  padding: 90px 90px 90px 90px;
  z-index: 1;
}

.Content {
  font-size: 32px;
  padding: 30px 10px 60px 10px;
  line-height: 1.6em;
  text-align: center;
  display: block;
}
</style>