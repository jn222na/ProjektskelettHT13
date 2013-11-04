<script language="javascript">

document.onmousedown=disableclick;

status="Right Click Has Been Disabled!";

Function disableclick(e)

{

if(event.button==2)

{

alert(status);

return false;

}

}

</script>


