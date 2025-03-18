function appendToScreen(value)
{
  document.getElementById('screen').value+=value;
}
function calculateResult(){
  try{
    let result=eval(document.getElementById('screen').value);
    document.getElementById('screen').value=result;
  }
  catch(e)
    {
      document.getElementById('screen').value="ERROR"
    }
}

function clearScreen()
{
  document.getElementById('screen').value='';
}