function init()
{
	var fsm = document.getElementById("fsm");
	var lgc = document.getElementById("lgc");
	fsm.href = "tool/drawing_tool.html";
	lgc.href = "tool/drawing_tool.html";
	fsm.onclick = tool_init;
	lgc.onclick = tool_init;
}

function tool_init(e)
{
	console.log(e.target.innerHTML);
	xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:5000/tool/drawing_tool?domain=" + e.target.innerHTML);
	
}

