new Vue({
    el: '#punch-game',
    data: {
      health: 100,
      ended : false
    },
    methods:{
     punch : function(){
            this.health -= 10;
            if ( this.health <= 0 ){
                this.ended = true;
            }
     },
     reset : function(){
         this.health = 100
         this.ended = false;
    }
    }
  })