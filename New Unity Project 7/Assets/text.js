#pragma strict

//GUITextにtxtファイルから文字列を読み込んで表示する例
//このスクリプトをGUITextに貼り付けて使用する
//Resourcesフォルダに配置したtxtファイルである "testScript.txt"を読み込む

function Start () {
	var txt : TextAsset =Instantiate(Resources.Load("testScript", TextAsset));
	guiText.text = txt.text;
}