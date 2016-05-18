jQuery(document).ready(function($) {
  $('#search-submit').on('click',function(){
    $('#result').empty();
    //PLEASE ADD LOGIN & APIKEY HERE.
    var bitlySDK = new BitlySDK({
      login: '',
      apiKey: ''
    });

    var longlink = $("#search-input").val();
    bitlySDK.shorten(longlink).then(function(result){
      if(!localStorage.shortenlinks){
        var shortenlinks = [];
      } else {
        var shortenlinks = JSON.parse(localStorage.getItem('shortenlinks'));
      }

      //check if the short url is existed in localstorage
      var existIndex = false,
          existValue = false;
      $.each(shortenlinks,function(index,value){
        console.log(value);
        if(value == result.url){
          existValue = value;
          existIndex = index;
        }
      })

      if(existIndex || existIndex === 0){
        shortenlinks.splice(existIndex,1);
        console.log(shortenlinks);
        console.log(existValue);
        shortenlinks.push(existValue);
      } else {
        shortenlinks.push(result.url);
        localStorage.setItem('shortenlinks', JSON.stringify(shortenlinks));
      }

      //get result from promises and push the result to div
      $.each(shortenlinks,function(index,value){
        var title,
          long_url,
          short_url,
          global_count;
          promises = [];

        var getTitle = bitlySDK.info(value);
      var getLong = bitlySDK.expand(value);
      var getCount = bitlySDK.clicks(value);

      Promise.all([getTitle,getLong,getCount]).then(function(values){
        title = values[0].title;
        long_url = values[1].long_url;
        global_count = values[2][0].global_clicks;
        if(title === null){
          title = long_url;
        }

        var output = $('<div class="output"></div>');
        output.append('<div class="url-name">'+title+'</div>');
        output.append('<div class="url-old">'+long_url+'</div>');
        output.append('<div class="url-new">'+value+'</div>');
        var num = $('<div class="url-num">'+global_count+'</div>')
        num.append('<img src="img/click-icon.svg" alt="click" />')
        output.append(num);
        output.append('<hr class="underline">');

        $('#result').append(output);
        console.log(title);
        console.log(value);
        console.log(long_url);
        console.log(global_count);
      })
      })
    });
  })
});
