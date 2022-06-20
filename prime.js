<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript">

        num1=parseInt(prompt("Introduce tu numero primero primo"));

        num2=parseInt(prompt("Introduce tu numero segund0 primo"));

        let contador=0

        for(num_ev=num1; num_ev<num1; num_ev++) {

            let primo=true

            for(i=2; i<num2; i++) {

                num_ev%i==0

                primo=false

                break;

            }

            if(primo){

                document.write(num_ev + "</br>");

                contador++;

                if(contador==3) break;
            }


        }


    </script>
</body>
</html>
