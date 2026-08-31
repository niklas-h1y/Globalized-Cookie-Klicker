gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDBigCookieObjects1= [];
gdjs.Game_32SceneCode.GDBigCookieObjects2= [];
gdjs.Game_32SceneCode.GDBigCookieObjects3= [];
gdjs.Game_32SceneCode.GDClickTextObjects1= [];
gdjs.Game_32SceneCode.GDClickTextObjects2= [];
gdjs.Game_32SceneCode.GDClickTextObjects3= [];
gdjs.Game_32SceneCode.GDCookieCountTextObjects1= [];
gdjs.Game_32SceneCode.GDCookieCountTextObjects2= [];
gdjs.Game_32SceneCode.GDCookieCountTextObjects3= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 3);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 4);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 5);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 6);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 7);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 7);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayersInLobbyCount() >= 8);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() != 8);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CookieCountText"), gdjs.Game_32SceneCode.GDCookieCountTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCookieCountTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCookieCountTextObjects1[i].getBehavior("Text").setText("Cookies: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBigCookieObjects1Objects = Hashtable.newFrom({"BigCookie": gdjs.Game_32SceneCode.GDBigCookieObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDClickTextObjects1Objects = Hashtable.newFrom({"ClickText": gdjs.Game_32SceneCode.GDClickTextObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 1);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 2);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 3);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 4);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 5);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 6);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 7);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 8);
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SyncTimer");
}
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 3);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 4);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 5);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 6);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 7);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getCurrentPlayerNumber() == 8);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SyncTimer");
}
}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.Game_32SceneCode.GDClickTextObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDClickTextObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SyncTimer");
}
{gdjs.multiplayer.authenticateAndQuickJoinLobby(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigCookie"), gdjs.Game_32SceneCode.GDBigCookieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBigCookieObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14075060);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBigCookieObjects1 */
gdjs.Game_32SceneCode.GDClickTextObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(8).add(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDClickTextObjects1Objects, (( gdjs.Game_32SceneCode.GDBigCookieObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBigCookieObjects1[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDBigCookieObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBigCookieObjects1[0].getCenterYInScene()), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_02.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDClickTextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("rise", -60, "easeOutQuad", 0.6, false);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDClickTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fade", 0, "easeOutQuad", 0.6, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.Game_32SceneCode.GDClickTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDClickTextObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDClickTextObjects1[i].getBehavior("Tween").hasFinished("fade") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDClickTextObjects1[k] = gdjs.Game_32SceneCode.GDClickTextObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDClickTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDClickTextObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDClickTextObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SyncTimer") >= 2;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDBigCookieObjects1.length = 0;
gdjs.Game_32SceneCode.GDBigCookieObjects2.length = 0;
gdjs.Game_32SceneCode.GDBigCookieObjects3.length = 0;
gdjs.Game_32SceneCode.GDClickTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDClickTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDClickTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDCookieCountTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDCookieCountTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDCookieCountTextObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList3(runtimeScene);
gdjs.Game_32SceneCode.GDBigCookieObjects1.length = 0;
gdjs.Game_32SceneCode.GDBigCookieObjects2.length = 0;
gdjs.Game_32SceneCode.GDBigCookieObjects3.length = 0;
gdjs.Game_32SceneCode.GDClickTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDClickTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDClickTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDCookieCountTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDCookieCountTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDCookieCountTextObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
