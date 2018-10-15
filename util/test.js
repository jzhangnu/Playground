
var MAX_CONCURRENCY_LIMIT = 3;
var IDLE_DELAY = 500;

function myTask(item){
    setTimeout(function(){ 
      console.log(item + ' completed.');  
      tasks.done(item); 
    }, Math.random()*1000);
}


for(var i=1;i<=10;i++){
    tasks.add('Item: ' + i);
  }
 
var tasks = {
    queue : [],
    totalActive :0,
    add : function(item){
        if (!item || item.length == 0){
        return;
        }
        var q = this.queue;
        if (q.indexOf(item) == -1)
        q.push(item);
    },
    done : function(item){
        this.totalActive--;
    },
    getNext : function(){
        this.totalActive++;
        //It will remove the returned item from queue automatically
        return this.queue.shift();
    },
    isPending : function(){
        return this.queue.length > 0;
    }
};



function runTask(){
 
    if (tasks.isPending() && tasks.totalActive < MAX_CONCURRENCY_LIMIT){
      var item = tasks.getNext();
      console.log('Processing ' + item + ' Total Active Items ' + tasks.totalActive);
      myTask(item);
      runTask();
    }
   
    else if(tasks.totalActive >= MAX_CONCURRENCY_LIMIT){
      console.log('Hold State');
      setTimeout(function(){ runTask(); }, IDLE_DELAY);
    }
   
    else{
      setTimeout(function(){ runTask(); }, IDLE_DELAY);
    }
  }
  runTask();