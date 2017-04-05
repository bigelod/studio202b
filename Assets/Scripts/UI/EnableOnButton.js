#pragma strict

var enableObj : GameObject;

var button = "Submit";

//Simple script to enable START button to work

function Start () {
	
}

function Update () {
    if (Input.GetButtonDown(button)) {
        enableObj.SetActive(true);
    }
}
