function getFinalOpenedDoors(numDoors) {
      var doors = new Array(101).fill(0);

      for (let i = 1; i <= numDoors; i++) {
          for (let j = i; j <= numDoors; j+=i) {
            doors[j]=1-doors[j];      
          }
      }
      
      var result=[];


      for (let index = 1; index < doors.length; index++) {
        
          if(doors[index]) result.push(index);
      }

      return result;
    
  }

console.log(getFinalOpenedDoors(100));