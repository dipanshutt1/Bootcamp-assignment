  // $(document).ready(function(){
  //   //question 1
  //   console.log("Hello World");

  //   //question 2
  //   $("div[class$='new']").css("color","red");
  //   $("#test").addClass("load");
    
  //   //question 3
  //   $("button").attr('disabled',true);

    
  //   //question 5
  //   $("#main > .target").css('font-size','20px');

    
  //   //question 6
  //   $("div").html("html method is used in this case.").css('color','red');

  //   jQuery(function(){
  //       close_link=$('<a class="" href="#">Click here to see an alert</a>');
  //       close_link.bind("click",function(){
  //           alert("Alert message is shown");
  //       });

  //   $(".alert_shown").append(close_link);
    
  //   });
    

  //   //question 7
  //   $(".click").click(function(){
  //       $(this).append('click');
  //   })
    

  //   //question 9
  //   $("#contents").change(function(){
  //     let value=$(this).val();
  //     $("#d1").text(value);
  //   });
  //   //question 10
  //   $('.hover').hover(function(){

  //     $('.drop_content').css('display','block');
  //   },
  //   function(){
  //     $('.drop_content').css('display','none');
  //   })
  //   // question 11
  //   $("#stop").on('click',function(e){
  //     e.preventDefault();
  //   })


  //   // question 12
  //   $("#parent").click(function(){
  //     $("#parent > li").click(function(event){
  //         event.stopPropogation();
  //     });
      
  //   });

    //question 13
    $("#max_height_button").click(function(){
      console.log("function called")
      let maxheight=0;
      $("#max_height > li").each(function(){
        let height=$(this).height();
        if(height>maxheight){
          maxheight=height;
        }
      })
      console.log(maxheight);
      $("#height_shown").text(maxheight);
      })
    
      $("#ajax_data").click(function(){

        $.ajax({
          url:"https://jsonplaceholder.typicode.com/posts/1",
          success:function(data){
            console.log(JSON.stringify(data));
          },
          error:function(error){
            alert(error);
          }
          
        })
      })

// })