function anim(){
  // réglages
  tl.pause();

  tl.to("#cercle-gris",{x:500,duration:10},0);
  tl.to("#clip",{scale:1.5,transformOrigin:"center center",duration:50},0);
  // tl.fromTo("#chemin",{drawSVG:"0% 2%"},{drawSVG:"98% 100%",duration:10},5);

  tl.to("#cercle-gris",{x:50,duration:0},25);
  tl.to("#cercle-gris",{fill:"green",duration:0},26);


}