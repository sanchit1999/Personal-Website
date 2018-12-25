var flag=1;
function display()
{ document.getElementById("image").src="./"+flag+".jpg";
		flag=flag+1;
		if(flag==9)
			flag=1;
}