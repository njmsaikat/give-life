jQuery(document).ready(function($){
  
  $('.dontae-head').click(function(){
      if($('#month').hasClass('active')){
          $('#donate_title').text("Choose your one-time gift amount");
          $('#donate_btn').text("Donate");
          $('#donate_btn').attr("data-type","once");
          $('#donate_btn').attr("data-price","100");
          $('#month').removeClass('active');
          $('#once').addClass('active');
          $('#month_donate_list').removeClass('open');
          $('#once_donate_list').addClass('open');
          
          $('.amount-details').removeClass('active');
          $('#once_donate_list .default-ad').addClass('active');
          
      }else{
          $('#donate_title').text("Choose your monthly gift amount");
          $('#donate_btn').text("Donate Monthly");
          $('#donate_btn').attr("data-type","month");
          $('#donate_btn').attr("data-price","50");
          
          $('#month').addClass('active');
          $('#once').removeClass('active');
          $('#once_donate_list').removeClass('open');
          $('#month_donate_list').addClass('open');
          
          $('.amount-details').removeClass('active');
          $('#month_donate_list .default-ad').addClass('active');
          
      }
  });
  
  $('.amount-details').click(function(){
      $('.amount-details').removeClass('active');
      $('.amount-details .dollar input').val('');
      $('#donate_btn').attr("data-price",'');
       
      $(this).addClass('active');
      var dprice = $(this).attr('data-price');
      $('#donate_btn').attr("data-price",dprice);
  });
  
  $('.amount-details .dollar input').keyup(function(){
     var dprice = $(this).val();
      $('#donate_btn').attr("data-price",dprice); 
  });
  
  $('#donate_btn').click(function(){ 
      var dtype   = $(this).attr("data-type");
      var dprice  = $(this).attr("data-price"); 
      if(dprice != '' && dprice != '0' && dtype != ''){
          if(dtype == "month"){
              $("#paypalMonthAmt").val(dprice);
              $("#paypal_form_monthly").submit();
          }else{
              $("#paypalAmt").val(dprice);
              $("#paypal_form").submit();
          }
      }else{
          alert('Please enter amount.');
      }
  });
  
  
  $('#choose_amt_btn').click(function(){ 
      var dprice  = $('#choose_amt').val(); 
      if(dprice != '' && dprice != '0' ){
          $("#paypalMonthAmt").val(dprice);
          $("#paypal_form_monthly").submit();
      }else{
          alert('Please enter amount.');
      }
  });
  
  
});

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}