function isTouching(objecter, objecter1) {
    if(objecter.x - objecter1.x < objecter.width/2 + objecter1.width/2 
      && objecter1.x - objecter.x < objecter.width/2 + objecter1.width/2 &&
      objecter.y - objecter1.y <= objecter.height/2 + objecter1.height/2 
      && objecter1.y - objecter.y < objecter.height/2 + objecter1.height/2) {
      return true;
      }
    
      else {
        return false;
      }
  }