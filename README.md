# BroadcastChannel API
<a href="https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel"> MDN doc</a>

## Context and main feature
Close other opened tabs through the broadcastchannel API
- [ ENV TO TRY ] It's best to have a neutral chrome as it might 
behaves weirdly if the broadcastchanel is not properly used
( pattern to find )

## User Stories / Main leads
- [ x ] Use broadcastchannel API to communicate between tabs
- [ x ] On message received close the others tabs

## Good to know for this experience
- the tabs still needs to be open by the main tab ( original landing page )

## Scenario
- click on "open a page" button ( and open as many if you want )
- click on "post message" this would post the appropriate message in order to close the other tabs

## To investigate
[ ] Unexpected behavior if we first go to the website and open a tab --> the first tab looks to be unable to receive the message somehow ?