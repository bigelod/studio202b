#pragma strict

var source : AudioSource; 
var gameobj : GameObject;


function Start () {

source = GetComponent.<AudioSource>();
		
}

function OnCollisionEnter (c : Collision)  {

source.Play();

	
}
