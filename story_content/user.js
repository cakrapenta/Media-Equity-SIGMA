function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oKFem0dfxw":
        Script1();
        break;
      case "6jQslCSNoD1":
        Script2();
        break;
      case "6ZzTq2Pyxh4":
        Script3();
        break;
      case "6PQR8SAcrMb":
        Script4();
        break;
      case "6IOxA31ePRv":
        Script5();
        break;
      case "6TeetMXQVij":
        Script6();
        break;
      case "5yBWiNHedrp":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=1.0;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume= 1.0;
}

