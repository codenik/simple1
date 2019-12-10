robcolor = mycolor => {
  document.body.style.backgroundColor = mycolor;
  document.body.style.backgroundImage = null;
};

robpicture = () => {
  document.body.style.backgroundImage =
    'url("https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")';

  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center"
};
