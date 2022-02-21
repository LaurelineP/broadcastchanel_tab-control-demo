# BroadcastChannel API - [DEMO](https://laurelinep.github.io/broadcastchanel_tab-control-demo)
<a href="https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel"> MDN doc</a>

## Context and main feature
Close other opened tabs through the broadcastchannel API
- [ ENV TO TEST ] It's best to have a neutral chrome as it might 
behaves weirdly if the broadcastchanel is not properly used
( pattern to find )

## User Stories / Main leads
- :white_check_mark: Use broadcastchannel API to communicate between tabs
- :white_check_mark: On message received close the others tabs

## Good to know for this experience
- the tabs still needs to be open by the main tab ( original landing page )
- broadcastChannel can be connected to from any tabs by creating a new broadcast
  as long as it comminicate to the right channel name ( no need for passing original bc )
- should be appliable to any tabs having the same origin even though the endpoints are different

## Scenario
- click on "open a page" button ( and open as many if you want )
- click on "post message" this would post the appropriate message in order to close the other tabs

## To investigate
:white_large_square: Unexpected behavior if we first go to the website and open a tab --> the first tab looks to be unable to receive the message somehow ?
