(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-59832845-1', 'auto');
      ga('send', 'pageview');


      $(function() {
            console.log( "ready!" );
            $('#page').Pagination({
                  size: 87,
                  pageShow: 5,
                  page: 1,
                  limit: 10,
                }, function(obj){
                        $('#info').html('Current page: ' + obj.page);
                });
      });