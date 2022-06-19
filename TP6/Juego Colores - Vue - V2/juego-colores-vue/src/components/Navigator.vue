<template >
  <div class='jumbotron'>
    <div id="navigator" class="d-flex justify-content-around align-items-center">
      <button  id="reset" class="btn text-uppercase" @click="restart" >New colors</button>

      <span id="message" > </span>
      <div>
          <button id="easy" class="btn text-uppercase" @click="easyButton">easy</button>
          <button id="hard" class="btn text-uppercase selected" @click="hardButton" >hard</button>
      </div>
    </div>
  </div>
</template>

<script >

  export default  {

    name: 'src-components-navigator',
    props: [],
    mounted () {
      this.hardButton();
      this.init();
    },
    data () {
      return {
        pickedColor: " ",

      }
    },
    methods: {
      init() {
        var pickedColor = this.pickedColor;
        const squares = document.querySelectorAll(".square");
        for (var i = 0; i < squares.length; i++) {
          const messageDisplay = document.getElementById("message");
          squares[i].style.backgroundColor = this.$store.state.colors[i];
          squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            pickedColor = document.querySelector('#colorDisplay').textContent;
            if (clickedColor === pickedColor) {
              messageDisplay.textContent = "You Picked Right!";
              squares.forEach(function (square){
                square.style.backgroundColor = pickedColor;
              })
              const restartButton = document.querySelector("#reset");
              restartButton.textContent = "Play Again!";
              const header = document.querySelector("#header");
              header.style.backgroundColor = pickedColor;
            } else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try Again!";
              messageDisplay.style.color = "#000000";
            }
          });
        }
      },
      easyButton() {
        if (this.$store.state.isHard) {
          this.$store.state.isHard = false;
          const squares = document.querySelectorAll(".square");
          const buttonEasy = document.querySelector('#easy');
          const buttonHard = document.querySelector('#hard');
          buttonEasy.classList.add("selected");
          buttonHard.classList.remove("selected");
          this.restart();
          this.$store.state.colorCount = 3;
          for (var i = 0; i < this.$store.state.colorCount; i++) {
            squares[(i+3)].style.display = "none";
          }
        }
      },
      hardButton(){
        if (!this.$store.state.isHard) {
          this.$store.state.isHard = true;
          const squares = document.querySelectorAll(".square");
          const buttonEasy = document.querySelector('#easy');
          const buttonHard = document.querySelector('#hard');
          buttonHard.classList.add("selected");
          buttonEasy.classList.remove("selected");
          this.$store.state.colorCount = 6;
          this.restart();
          for (var i = 3; i < 6; i++) {
            squares[i].style.display = "block";
          }
        }
      },
      randomInt() {
        return Math.floor(Math.random() * 256);
      },
      createRandomStringColor(){
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
        return newColor;
      },
      setAllColorsTo(color) {
        console.log('Entro');
        this.squares.forEach(function (square){
          square.style.backgroundColor = color;
        })
      },
      restart() {
        this.$store.state.colors = this.createNewColors(this.$store.state.colorCount);
        this.pickedColor = this.$store.state.colors[this.PickColor()];
        const colorDisplay = document.getElementById("colorDisplay");
        colorDisplay.textContent = this.pickedColor;
        this.textContent = "Pick New Colors!";
        const header = document.querySelector("#header");
        header.style.backgroundColor = "steelblue";
        const messageDisplay = document.getElementById("message");
        messageDisplay.textContent = "";
        const restartButton = document.querySelector("#reset");
        restartButton.textContent = "New Colors!";
        const squares = document.querySelectorAll(".square");
        for (var i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = this.$store.state.colors[i];
        }
      },
      PickColor(){
        var quantity;
        if (this.isHard) {
          quantity = 6;
        } else {
          quantity = 3;
        }
        return Math.floor(Math.random() * quantity );
      },
      createNewColors(numbers){
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor());
        }
          return arr;
      },
    },
    computed: {

    }
  }
</script>

<style scoped lang="css">
  .jumbotron {
    background-color: white;
    padding: 0;
  }

.btn {
    color: steelblue;
    font-weight: bold;
    font-size: .9rem;
}

.btn:hover {
    color: white !important;
    background-color: steelblue;
}

span {
    color: black;
    font-size: 0.9rem;
}
</style>
