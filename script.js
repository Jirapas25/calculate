        <script type="text/javascript">
            $(document).ready(function(){
                c2=0;
                $("#calculate_p").click(function(){
                    var price = $('#price').val();
                    cal = 0;
                    price = parseInt(price);
                    if (price > 299.99) { cal = (price*34)+(price*34)*2/100;c2=34 }
                    if (price > 149.99 && price < 299.99) { cal = (price*35)+(price*35)*2/100;c2=35 }
                    if (price < 149.99) { cal = (price*36)+(price*36)*2/100;c2=36 }

                    $('#price_cal').val(parseInt(cal));
                });

                $("#calculate_w").click(function(){
                    var weight = $('#weight').val();
                    weight = parseInt(weight);
                    weight = weight*2;
                    cal = weight*14*c2;

                    var total = $('#price_cal').val();
                    total_price = parseInt(total);
                    
                    $('#weight_cal').val(parseInt(cal));
                    $('#total').val(parseInt(total_price+cal));

                });

            });
        </script>
