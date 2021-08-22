
const _ = elem => {
	return document.querySelector(elem);
}

let pressedToggle = true;

//-------------This creates a rotaion effect on close and open menu toggler
_("#hamburger-wrapper").addEventListener("click",() => {
	if(pressedToggle)
	{
		_(".open-menu").setAttribute("class","fa fa-close open-menu");
		_("#nav-smaller-screen").style.display = "block";
		_(".open-menu").style.transform = "rotate(180deg)";
		_(".open-menu").style.transition = "transform 0.7s ease";
        _("#nav-smaller-screen").style.animation = "appear-slowly 0.7s ease";
		pressedToggle = false;
	}
	else
	{
		_(".open-menu").setAttribute("class","fa fa-bars open-menu");
		_("#nav-smaller-screen").style.animation = "disappear-slowly 0.7s ease";
		setTimeout(()=>{
			_("#nav-smaller-screen").style.display = "none";
		},500);
		_(".open-menu").style.transform = "rotate(-180deg)";
        _(".open-menu").style.transition = "transform 0.7s ease";
		pressedToggle = true;
    }
})

_("#nav-smaller-screen").addEventListener("click", ()=>{
    _(".open-menu").setAttribute("class","fa fa-bars open-menu");
    _("#nav-smaller-screen").style.display = "none";
    pressedToggle = true;
});